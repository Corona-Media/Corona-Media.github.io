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