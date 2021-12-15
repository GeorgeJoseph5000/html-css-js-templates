function changeColor(id) {
    setInterval(() => {
        if (document.getElementById(id).style.backgroundColor == "white") {
            document.getElementById(id).style.backgroundColor = "green";
        } else if (document.getElementById(id).style.backgroundColor == "green") {
            document.getElementById(id).style.backgroundColor = "blue";
        } else if (document.getElementById(id).style.backgroundColor == "blue") {
            document.getElementById(id).style.backgroundColor = "violet";
        } else if (document.getElementById(id).style.backgroundColor == "violet") {
            document.getElementById(id).style.backgroundColor = "red";
        } else if (document.getElementById(id).style.backgroundColor == "red") {
            document.getElementById(id).style.backgroundColor = "black";
        }else if(document.getElementById(id).style.backgroundColor == "black"){
            document.getElementById(id).style.backgroundColor = "white";
        }
    }, 500);
    //document.getElementById(id).style.backgroundColor = "black";
}
changeColor("colors");



setInterval(setScroll,200);

function setScroll() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            document.getElementById("main-nav").style.backgroundColor = "black";
            document.getElementById("dropdown-item").style.color = "white";
            document.getElementById("dropdown-menu1").style.backgroundColor = "black";
            
        }else{
            document.getElementById("main-nav").style.backgroundColor = "";
            document.getElementById("dropdown-menu1").style.backgroundColor = "rgb(106, 106, 106)";
        }
    });
}
