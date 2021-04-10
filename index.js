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