//called onload for article pages
function loadArticlePages()
{
    document.getElementById("articleImage").src = "../images/" + articles[articleid].image;
    document.getElementById("title").innerHTML += " <a class='text-dark unselectable' id='article" + articleid + "' onclick='starArticle();'>&#9734;</a> <a class='text-dark unselectable' id='like" + articleid + "' onclick='likeArticle();'></a>"

    //Load The Starred and Liked Articles
    temparticles = localStorage.getItem("starredArticles");
    if (temparticles != null) starredArticles = JSON.parse(temparticles);

    temparticles = localStorage.getItem("likedArticles");
    if (temparticles != null) likedArticles = JSON.parse(temparticles);

    setIcons();
}

//called onload for articles.html
function loadArticles()
{
    temparticles = localStorage.getItem("starredArticles");
    if (temparticles != null) starredArticles = JSON.parse(temparticles);

    temparticles = localStorage.getItem("likedArticles");
    if (temparticles != null) likedArticles = JSON.parse(temparticles);

    if (sessionStorage.getItem("loadType") == null) sessionStorage.setItem("loadType", "default");
    populateArticles(sessionStorage.getItem("loadType"));
}

//set like and star icons on article pages
function setIcons()
{
    if (starredArticles.includes("article" + articleid)) document.getElementById("article" + articleid).innerHTML = "&#9733;";
    else document.getElementById("article" + articleid).innerHTML = "&#9734;";
    if (likedArticles.includes("like" + articleid)) document.getElementById("like" + articleid).innerHTML = "<i class='fas fa-thumbs-up'></i>";
    else document.getElementById("like" + articleid).innerHTML = "<i class='far fa-thumbs-up'></i>";
}

//called when article liked
function likeArticle()
{
    if (likedArticles.includes("like" + articleid)) likedArticles.splice(likedArticles.indexOf(`like${articleid}`));
    else likedArticles.push("like" + articleid);
    newWebRequest("https://ilan-not-elon.com/Covid-Kids/handleLikes.php?requestType=unlikeArticle&article=" + "like" + articleid);
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
    setIcons();
}

//called when article starred on article page
function starArticle()
{ 
    if (starredArticles.includes("article" + articleid)) starredArticles.splice(starredArticles.indexOf(`article${articleid}`));
    else starredArticles.push("article" + articleid);
    localStorage.setItem("starredArticles", JSON.stringify(starredArticles));
    setIcons();
}

//called when article starred on articles.html
function starArticleAlt(articleid)
{
    if (starredArticles.includes("article" + articleid)) starredArticles.splice(starredArticles.indexOf(`article${articleid}`));
    else starredArticles.push("article" + articleid);
    if (starredArticles.includes("article" + articleid)) document.getElementById("article" + articleid).innerHTML = "&#9733;";
    else document.getElementById("article" + articleid).innerHTML = "&#9734;";
    localStorage.setItem("starredArticles", JSON.stringify(starredArticles));
}

//loads articles on articles.html
function populateArticles(type)
{
    if (type == "default")
    {
        sessionStorage.setItem("loadType", "default");
        var code = "";
        document.getElementById("articles").innerHTML = "";
        for (var x = articles.length - 1; x >= 0; x -= 1) {
            if (starredArticles.includes("article" + x)) code = "&#9733;";
            else code = "&#9734;";
            var div = "<div style='display: inline-block;'>" + "<img src='assets/images/" + articles[x].image + "' height='120px' class='ml-2' style='float: left;' alt='img" + x + "'>" + "<div class='mr-2 mb-4' style='display: block;'>" + "<p class='fontchange'>" + articles[x].description + "    <a class='text-light unselectable' id='article" + x + "' onclick='starArticleAlt(" + x + ");'>" + code + "</a>" + "</p>" + "<a target='_blank' href='" + articles[x].link + "' class='title2 articlereadmore'>Read More</a>" + "</div>" + "</div>";
            var addTo = document.getElementById("articles");
            var newContent = document.createElement('div');
            newContent.className = "card bg-dark pt-2 mt-3 mb-2 rounded mx-auto text-light";
            newContent.style = "width: 100%; height: 135px;";
            newContent.innerHTML = div;
            addTo.appendChild(newContent);
        }
    }
    else if (type == "starred")
    {
        sessionStorage.setItem("loadType", "starred");
        document.getElementById("articles").innerHTML = "";
        for (var x = starredArticles.length - 1; x >= 0; x -= 1) {
            var string = starredArticles[x];
            var index = string.slice(7, string.length);
            var article = articles[index];
            var div = "<div style='display: inline-block;'>" + "<img src='assets/images/" + article.image + "' height='120px' class='ml-2' style='float: left;' alt='img" + x + "'>" + "<div class='mr-2 mb-4' style='display: block;'>" + "<p class='fontchange'>" + article.description + "    <a class='text-light unselectable' id='article" + index + "' onclick='starArticleAlt(" + index + ");'>&#9733;</a>" + "</p>" + "<a target='_blank' href='" + article.link + "' class='title2 articlereadmore'>Read More</a>" + "</div>" + "</div>";
            var addTo = document.getElementById("articles");
            var newContent = document.createElement('div');
            newContent.className = "card bg-dark pt-2 mt-3 mb-2 rounded mx-auto text-light";
            newContent.style = "width: 100%; height: 135px;";
            newContent.innerHTML = div;
            addTo.appendChild(newContent);
        }
    }
    else if (type == "popular")
    {
        sessionStorage.setItem("loadType", "popular");
        var likesList = [];
        document.getElementById("articles").innerHTML = "";
        for (let x in articles)
        {
            likes = "0";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) likes = this.responseText;
            };
            xmlhttp.open("GET", "https://ilan-not-elon.com/Covid-Kids/handleLikes.php?requestType=getLikes&article=like" + x, false);
            xmlhttp.send();
            if (likes == "" || likes == null) likes = "0";
            likesList.push(likes);
        }
        var likesListOrganized = likesList.concat();
        likesListOrganized.sort((a, b) => b - a);
        for (let z in likesListOrganized)
        {
            ind = findIndex(likesListOrganized[z], likesList);
            if (starredArticles.includes("article" + ind)) code = "&#9733;";
            else code = "&#9734;";
            var div = "<div style='display: inline-block;'>" + "<img src='" + articles[ind].image + "' height='120px' class='ml-2' style='float: left;' alt='img" + ind + "'>" + "<div class='mr-2 mb-4' style='display: block;'>" + "<p class='fontchange'>" + articles[ind].description + "    <a class='text-light unselectable' id='article" + ind + "' onclick='starArticleAlt(" + ind + ");'>" + code + "</a>" + "</p>" + "<a target='_blank' href='" + articles[ind].link + "' class='title2 articlereadmore'>Read More</a>" + "</div>" + "</div>";
            var addTo = document.getElementById("articles");
            var newContent = document.createElement('div');
            newContent.className = "card bg-dark pt-2 mt-3 mb-2 rounded mx-auto text-light";
            newContent.style = "width: 100%; height: 135px;";
            newContent.innerHTML = div;
            addTo.appendChild(newContent);
            likesList[ind] = null;
        }
    }
}

//finds the index for popular article sorting
function findIndex(key, list)
{
    for (let x in list)
    {
        if (list[x] == key) return x;
    }
}