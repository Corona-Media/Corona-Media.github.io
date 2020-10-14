const videos = [
    "https://www.youtube-nocookie.com/embed/ykieEE1j9eA",
    "https://www.youtube-nocookie.com/embed/M5azNpTwVk8",
    "https://www.youtube-nocookie.com/embed/arMKDDSwrTo",
    "https://www.youtube-nocookie.com/embed/xGKFVMgjrPc",
    "https://www.youtube-nocookie.com/embed/cqvVL8IurMw",
    "https://www.youtube-nocookie.com/embed/MMBh-eo3tvE",
    "https://www.youtube-nocookie.com/embed/oeAN8Xxz0q4",
    "https://www.youtube-nocookie.com/embed/uABDLKyVm8o"

];
const artwork = [{
    by: "Isabelle",
    files: ["assets/artwork/0/0.jpg", "assets/artwork/0/1.jpg", "assets/artwork/0/2.jpg", "assets/artwork/0/3.jpg", "assets/artwork/0/4.jpg", "assets/artwork/0/5.jpg"]
}];

const words = [{name: "Read A Book Or Ebook", link: 'https://covidkidsonline.com/assets/articles/book-list.html'},
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
    {name: "Start  A Garden", link: 'https://www.youtube.com/watch?v=B0DrWAUsNSc&ab_channel=SSLFamilyDad'},
    {name: "Do A Puzzle", link: 'https://www.amazon.com/s?k=puzzles'},
    {name: "Organize Your Books By Color", link: null},
    {name: "Draw Or Color", link: 'https://www.amazon.com/s?k=coloring+books'},
    {name: "Make A Collage With Scraps Of Paper", link: null},
    {name: "Start A Vlog Or Blog About Your Time Stuck At Home", link: null},
    {name: "Write A Song", link: 'https://www.youtube.com/watch?v=cAVVZX7zHIc'},
    {name: "Make Something Out Of Clay", link: 'https://www.pinterest.com/jmbyrd31/clay-ideas/'},
    {name: "Listen To A Podcast", link: 'https://apps.apple.com/us/app/apple-podcasts/id525463029'},
    {name: "Paint A Picture", link: null},
    {name: "Make A Comic Book", link: null},
    {name: "Start A Book Club With Family Or Friends", link: null},
    {name: "Paint Rocks", link: 'https://rockpainting101.com/rock-painting-ideas/'},
    {name: "Make Homemade Playdough And Slime", link: 'https://www.iheartnaptime.net/homemade-slime/'},
    {name: "Play Multiplayer Video Games With Your Friends", link: null},
    {name: "Video Chat With Friends", link: null},
    {
        name: "Bake A Cake Or Cupcakes",
        link: 'https://www.google.com/search?q=cupcake+recipes&rlz=1C5CHFA_enUS729US729&oq=cupcake+recipies'
    },
    {name: "Perfect A Recipe", link: null},
    {name: "Make Breakfast For Dinner", link: null},
    {
        name: "Try Out A Mini Baking Kit",
        link: 'https://www.amazon.com/SmartLab-Toys-SL322431-Tiny-Baking/dp/B07PF22K81'
    },
    {name: "Play Solitare", link: 'https://www.google.com/search?q=play+solitaire'},
    {name: "Play Uno", link: 'https://www.amazon.com/Mattel-Games-Wild-Card-Game/dp/B07234H86N/'},
    {name: "MadLibs", link: 'http://www.madlibs.com/printables/'},
    {name: "Make Something With Lego", link: 'https://www.youtube.com/watch?v=TlhegLgzFpU'},
    {name: "Play A Game Of Chess", link: 'https://www.chess.com/play/computer'},
    {name: "Play With Your Pet", link: null},
    {name: "Read Outside", link: 'https://covidkidsonline.com/assets/articles/book-list.html'},
    {name: "Take A Virtual Exercise Class", link: 'https://www.gonoodle.com'},
    {
        name: "Take A Virtual Museum Tour",
        link: 'https://www.travelandleisure.com/attractions/museums-galleries/museums-with-virtual-tours'
    },
    {name: "Write a letter to your loved one", link: null}

];
const funnyvid = videos[0];
const happyvid = videos[4];
const articles = [{
    image: "dc.jpeg",
    description: "Hawthorne Summer Camp Is 3D Printing Face Shields For Frontline Workers",
    link: "assets/articles/discover-camp.html"
    },
    {
        image: "book-list.jpg",
        description: "20+ Great Books For Kids To Read While Stuck At Home",
        link: "assets/articles/book-list.html"
    },
    {
        image: "puzzle.jpg",
        description: "30+ Activities to keep you busy while bored at home",
        link: "assets/articles/activities-list.html"
    },
    {
        image: "corona.png",
        description: "A Firsthand Account Of A Kid Living Through The Pandemic",
        link: "assets/articles/kids-corona-experience.html"
    },
    {
        image: "camera.jpg",
        description: "25+ Great Family Friendly Movies To Pass The Time",
        link: "assets/articles/movie-list.html"
    },
    {
        image: "summer-plan.png",
        description: "How To Plan Your Summer During These Uncertain Times",
        link: "assets/articles/planning-summer.html"
    },
    {
        image: "course-site.png",
        description: "The 3 Best Online Course Sites",
        link: "assets/articles/online-course.html"
    },
    {
        image: "playdate.jpeg",
        description: "Is it safe for kids to have playdates?",
        link: "assets/articles/playdates-safe.html"
    },
    {
        image: "photo-schedule.png",
        description: "New Covid Kids Photo Schedule/Planner",
        link: "assets/articles/photo-schedule.html"
    }
];

let starredArticles = [];
let likedArticles = [];

function start() {
    setTimeout(() => {
        $("#feedbackpopup").modal('show')
    }, 60000);
}

function newWebRequest(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) console.log(this.responseText);
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
