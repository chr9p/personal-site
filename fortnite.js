
var navbars = document.getElementById("navbar")

function navbar() {
    console.log(window.scrollY)
    if ((window.scrollY) > 75) {
        navbars.classList.add("fortnite")
    }
    else {
        navbars.classList.remove("fortnite")
    }
}

window.onscroll = function () {
    navbar()
}