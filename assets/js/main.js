//Video Variables
var videos = ["https://www.youtube-nocookie.com/embed/ykieEE1j9eA",
                  "https://www.youtube-nocookie.com/embed/M5azNpTwVk8",
                  "https://www.youtube-nocookie.com/embed/arMKDDSwrTo",
                  "https://www.youtube-nocookie.com/embed/xGKFVMgjrPc",
                  "https://www.youtube-nocookie.com/embed/cqvVL8IurMw"
                 ];

//Artwork Variables
var artwork = [{by: "Isabelle", files: ["assets/artwork/0/0.jpg", 
                                        "assets/artwork/0/1.jpg", 
                                        "assets/artwork/0/2.jpg", 
                                        "assets/artwork/0/3.jpg", 
                                        "assets/artwork/0/4.jpg", 
                                        "assets/artwork/0/5.jpg"]
               }
]; 

//Idea Variables
var words = [{name: "Read A Book Or Ebook", link: 'https://covidkidsonline.com/assets/articles/book-list.html'},
             {name: "Play Video Games", link: 'https://www.epicgames.com/store'},
             {name: "Call, Text, Or Email A Friend", link: null},
             {name: "Listen To Music", link: 'https://www.spotify.com/us/'},
             {name: "Learn A Musical Instrument", link: 'https://www.udemy.com/topic/piano/'},
             {name: "Watch Youtube", link: 'https://www.youtube.com/'},
             {name: "Watch A Movie Or TV Show", link: 'https://covidkidsonline.com/assets/articles/movie-list.html'},
             {name: "Play A Board Or Card Game", link: 'https://www.gearhungry.com/best-family-board-games/'},
             {name: "Read The News", link: 'https://news.google.com/'},
             {name: "Start Learning A New Language", link: 'https://www.duolingo.com/'},
             {name: "Do Extra Chores", link: null},
             {name: "Learn To Code", link: 'https://www.khanacademy.org/computing/computer-programming'},
             {name: "Take an Online Course", link: 'https://www.edx.org'},
             {name: "Write A Story", link: null},
             {name: "Write A Journal Or Diary", link: 'https://myjournalate.com/'},
             {name: "Build A Pillow Fort", link: null},
             {name: "Build A Cardboard Box Fort", link: 'https://handsonaswegrow.com/build-fun-cardboard-fort/'},
             {name: "Go On A Bike Ride, Run, Or Walk", link: null},
             {name: "Start  A Garden", link: null},
             {name: "Do A Puzzle", link: 'https://www.amazon.com/s?k=puzzles'},
             {name: "Organize Your Books By Color", link: null},
             {name: "Draw Or Color", link: 'https://www.amazon.com/s?k=coloring+books'},
             {name: "Make A Collage With Scraps Of Paper", link: null},
             {name: "Start A Vlog Or Blog About Your Time Stuck At Home", link: null},
             {name: "Write A Song", link: null},
             {name: "Make Something Out Of Clay", link: null},
             {name: "Listen To A Podcast", link: 'https://apps.apple.com/us/app/apple-podcasts/id525463029'},
             {name: "Paint A Picture", link: null},
             {name: "Make A Comic Book", link: null},
             {name: "Start A Book Club With Family Or Friends", link: null},
             {name: "Paint Rocks", link: null},
             {name: "Make Homemade Playdough And Slime", link: null},
             {name: "Play Multiplayer Video Games With Your Friends", link: null},
             {name: "Video Chat With Friends", link: null},
             {name: "Bake A Cake Or Cupcakes", link: 'https://www.google.com/search?q=cupcake+recipes&rlz=1C5CHFA_enUS729US729&oq=cupcake+recipies'},
             {name: "Perfect A Recipe", link: null},
             {name: "Make Breakfast For Dinner", link: null},
             {name: "Try Out A Mini Baking Kit", link: 'https://www.amazon.com/SmartLab-Toys-SL322431-Tiny-Baking/dp/B07PF22K81'},
             {name: "Play Solitare", link: 'https://www.google.com/search?q=play+solitaire'},
             {name: "Play Uno", link: 'https://www.amazon.com/Mattel-Games-Wild-Card-Game/dp/B07234H86N/'},
             {name: "MadLibs", link: 'http://www.madlibs.com/printables/'},
             {name: "Make Something With Lego", link: null},
             {name: "Play A Game Of Chess", link: 'https://www.chess.com/play/computer'},
             {name: "Play With Your Pet", link: null},
             {name: "Read Outside", link: 'https://covidkidsonline.com/assets/articles/book-list.html'},
             {name: "Take A Virtual Exercise Class", link: 'https://www.gonoodle.com'},
             {name: "Take A Virtual Museum Tour", link: 'https://www.travelandleisure.com/attractions/museums-galleries/museums-with-virtual-tours'}
             ];

//Home Page Videos
var funnyvid = videos[0];
var happyvid = videos[4];

//Article Variables
var articles = [{image: "dc.jpeg", description: "Hawthorne Summer Camp Is 3D Printing Face Shields For Frontline Workers", link: "assets/articles/discover-camp.html"},
                {image: "book-list.jpg", description: "20+ Great Books For Kids To Read While Stuck At Home", link: "assets/articles/book-list.html"},
                {image: "puzzle.jpg", description: "30+ Activities to keep you busy while bored at home", link: "assets/articles/activities-list.html"},
                {image: "corona.png", description: "A Firsthand Account Of A Kid Living Through The Pandemic", link: "assets/articles/kids-corona-experience.html"},
                {image: "camera.jpg", description: "25+ Great Family Friendly Movies To Pass The Time", link: "assets/articles/movie-list.html"},
                {image: "summer-plan.png", description: "How To Plan Your Summer During These Uncertain Times", link: "assets/articles/planning-summer.html"},
                {image: "course-site.png", description: "The 3 Best Online Course Sites", link: "assets/articles/online-course.html"},
                {image: "playdate.jpeg", description: "Is it safe for kids to have playdates?", link: "assets/articles/playdates-safe.html"}
               ];

var starredArticles = [];
var likedArticles = [];


//Start Function 
function start() {
    console.log("This is a work in progress. Please suggest any improvements on the feedback page https://covidkidsonline.com/feedback.html");

    //popup for feedback
    setTimeout(function() {
        $("#feedbackpopup").modal('show')
    }, 60000);
}


//Video Code
function videosfunc(document) {

    for (var x = 0; x < videos.length; x += 1) {
        var div = "<center>" + "<iframe class='card-body' width='100%' height='300px' src='" + videos[x] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "</center>";
        var addTo = document.getElementById("vids");
        var newContent = document.createElement('div');
        newContent.className = "card bg-dark text-center mr-3 ml-3  rounded mt-4 mb-3 mx-auto";
        newContent.style = "width:  500px;";
        newContent.innerHTML = div;
        addTo.appendChild(newContent);
    }
}


//Artwork Code
function artworkfunc(document) {

    for (var x1 = 0; x1 < artwork.length; x1 += 1) {
        var div = "<center>" + "<img id='img1' src='" + artwork[x1].files[0] + "' width='90%' data-toggle='tooltip' title='Artwork By " + artwork[x1].by + "' alt='" + artwork[x1].by + "art'>" + "</center>"  
        var addTo = document.getElementById("art");
        var newContent = document.createElement('div');
        newContent.className = "card bg-dark pt-2 mt-5 mb-3 rounded mx-auto mobile";
        newContent.style = "width: 400px; height: 530px;";
        newContent.setAttribute("onclick", "popup(this)");
        newContent.setAttribute("id", String(x1));
        newContent.innerHTML = div;
        addTo.appendChild(newContent);
        
        //create popup
        var images = [];
        for (var x2 = 0; x2 < artwork[x1].files.length; x2 += 1) {
            images.push("<img src='" + artwork[x1].files[x2] + "'width='90%;' alt='img" + x2 + "'>")
        }
        
        var modalele = "<div class='modal-dialog' role='document'>" + " <div class='modal-content'>" + "<div class='modal-header'>" + "<h5 class='modal-title' id='" + "model" + String(x1) + "Label" + "'>Artwork By " + artwork[x1].by + "</h5>" + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" + "<span aria-hidden='true'>x</span>" + " </button>" + "</div>" + "<div class='modal-body'>" + "<center>" + images.toString() + "</center>" + "</div>" + "<div class='modal-footer'>" + "<button type='button' class='btn btn-dark' data-dismiss='modal'>Close</button>" + "</div>" + "</div>" + "</div>" + "</div>";
        
        var addToModal = document.getElementById("modals");
        var newContentModal = document.createElement("div");
        newContentModal.className = "modal fade";
        newContentModal.setAttribute("id", "model" + String(x1));
        newContentModal.setAttribute("tabindex", "-1");
        newContentModal.setAttribute("role", "dialog");
        newContentModal.setAttribute("aria-labelledby", "model" + String(x1) + "Label");
        newContentModal.setAttribute("aria-hidden", "true");
        newContentModal.innerHTML = modalele;
        addToModal.appendChild(newContentModal);
    }
}


//Show Popup
function popup(thus) {
    var modalnum = String("#model" + thus.id)
    $(modalnum).modal('show');
}


//Show Index Popup
function popupindex() {
    var modalnum = "#model00"
    $(modalnum).modal('show');
}


//Ideas Gen code
function ideasfunc(document) {

//Set link text to "Learn More"
document.getElementById("link").innerHTML = "I want to try this.";

//Set text to random idea and set link to correct url
var number = Math.floor(Math.random() * words.length);

var word = words[number].name;
document.getElementById("text").innerHTML = word;

var link = words[number].link;
    if (link != null) {
        document.getElementById("link").href = link;
    } else {
        document.getElementById("link").removeAttribute("href");
        document.getElementById("link").innerHTML = "";
    }
}



function newWebRequest(url)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function indexfunc(document) 
{
    for (var x = articles.length - 1; x >= (articles.length - 5); x -= 1) {
        var div = "<h6><a class='title2' href='" + articles[x].link + "' target='_blank'>" + articles[x].description +"</a></h6>";
        var addTo = document.getElementById("articleslist");
        var newContent = document.createElement('li');
        newContent.innerHTML = div;
        addTo.appendChild(newContent);
    }

    var funnyvidid = document.getElementById("funnyvid");
    var happyvidid = document.getElementById("happyvid");

    funnyvidid.setAttribute("src", funnyvid);
    funnyvidid.setAttribute("width", "90%");
    funnyvidid.setAttribute("height", "300px");

    happyvidid.setAttribute("src", happyvid);
    happyvidid.setAttribute("width", "90%");
    happyvidid.setAttribute("height", "300px");
}


function validatefeedback() 
{
    var inputText = document.forms["feedbackform"]["message"].value;
    if (inputText != "") {
        alert("Thank You For Contacting Us.");
        return true;
    } else {
        alert("Please Write Something Before Submitting.");
        return false;
    }
}