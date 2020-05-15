//start function 
function start() {
    console.clear();
    console.log("This is a work in progress. Please suggest any improvements on the feedback page https://corona-media.github.io/feedback.html");
}

//video code
var videos = ["https://www.youtube.com/embed/ykieEE1j9eA", "https://youtube.com/embed/M5azNpTwVk8", "https://www.youtube.com/embed/e0-2XxgHIXk", "https://youtube.com/embed/xWdPusIK8XU", "https://www.youtube.com/embed/arMKDDSwrTo", "https://youtube.com/embed/xGKFVMgjrPc", "https://www.youtube.com/embed/cqvVL8IurMw"];
        
for (var x = 0; x < videos.length; x += 1) {
    var div = "<center>" + "<iframe class='card-body' width='100%' height='300px' src='" + videos[x] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "</center>";

    var addTo = document.getElementById("vids");
    var newContent = document.createElement('div');
    newContent.className = "card bg-dark text-center mr-3 ml-3  rounded mt-4 mb-3 mx-auto";
    newContent.style = "width:  500px;";
    newContent.innerHTML = div;
    addTo.appendChild(newContent);
}

//Ideas gen code
function generate() {

//Create array of ideas and links
var words = [{name: "Read", link: null},
             {name: "Play Video Games", link: 'https://www.epicgames.com/store'},
             {name: "Call Or Text A Friend", link: null},
             {name: "Listen To Music", link: 'https://www.spotify.com/us/'},
             {name: "Learn A Musical Instrument", link: 'https://www.udemy.com/topic/piano/'},
             {name: "Watch Youtube", link: 'https://www.youtube.com/'},
             {name: "Watch A Movie Or TV Show", link: 'https://www.netflix.com/'},
             {name: "Play A Board Or Card Game", link: 'https://www.gearhungry.com/best-family-board-games/'},
             {name: "Read The News", link: 'https://news.google.com/'},
             {name: "Learn A New Language", link: 'https://www.duolingo.com/'},
             {name: "Do Extra Chores", link: null},
             {name: "Learn To Code", link: 'https://www.khanacademy.org/computing/computer-programming'},
             {name: "Take an Online Course", link: 'https://www.edx.org'},
             {name: "Write A Story", link: null},
             {name: "Write A Journal Or Diary", link: 'https://myjournalate.com/'},
             {name: "Build A Pillow Fort", link: null},
             {name: "Build A Cardboard Box Fort", link: 'https://handsonaswegrow.com/build-fun-cardboard-fort/'},
             {name: "Go On A Bike Ride, Run, Or Walk", link: null},
             ];

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