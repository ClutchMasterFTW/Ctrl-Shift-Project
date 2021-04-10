//Variables

setInterval(checkTop, 1);

function checkTop(hover, id) {
    if(window.pageYOffset != 0) {
        document.getElementById("header").style.backgroundColor = "#060016";
        var x = document.getElementsByClassName("item");
        for(i = 0; i < x.length; i++) {
            x[i].style.color = "white";
        }
        document.getElementById("logo").style.filter = "invert(100%)";
        document.getElementById("header").style.boxShadow = "2px 2px 10px black";
    } else if(window.pageYOffset == 0) {
        document.getElementById("header").style.backgroundColor = "white";
        var x = document.getElementsByClassName("item");
        for(i = 0; i < x.length; i++) {
            x[i].style.color = "black";
        }
        document.getElementById("logo").style.filter = "invert(0%)";
        document.getElementById("header").style.boxShadow = "none";
    }
    if(window.pageYOffset != 0 && hover == true) {
        document.getElementById(id).style.backgroundColor = "#1c0756";
    } else if(window.pageYOffset != 0 && hover == false) {
        document.getElementById(id).style.backgroundColor = "transparent";
    } else if(window.pageYOffset == 0 && hover == true) {
        document.getElementById(id).style.backgroundColor = "lightgray";
    } else if(window.pageYOffset == 0 && hover == false) {
        document.getElementById(id).style.backgroundColor = "transparent";
    }
}

function closeHelpMenu() {
    document.getElementById("help-container").style.visibility = "hidden";
}

function preview(option) {
    if(option == 1) {
        document.getElementById("body2").style.visibility = "visible";
        document.getElementById("preview-container").style.visibility = "visible";
        document.body.style.height = "0";
    } else if(option == 0) {
        document.getElementById("body2").style.visibility = "hidden";
        document.getElementById("preview-container").style.visibility = "hidden";
        document.body.style.height = "200vw";
    }
}

function alpha(hover) {
    if(hover == true) {
        document.getElementById("alpha-text").style.visibility = "visible";
    } else if(hover == false) {
        document.getElementById("alpha-text").style.visibility = "hidden";
    }
}

function changeSettings() {
    //Variables - from inputs
    var backgroundColor = document.getElementById("background-color-input").value;
    var textColor = document.getElementById("text-color-input").value;
    document.getElementById("body2").style.backgroundColor = backgroundColor;
    document.getElementById("body2").style.color = textColor;
    document.getElementById("preview-container").style.color = black;
}