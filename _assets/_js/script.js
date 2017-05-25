
var nav = document.getElementsByTagName("nav")[0],
    navButtonContainer = document.getElementById("nav-button-container"),
    navButton = document.getElementById("nav-button"),
    main = document.getElementsByTagName("main")[0],
    onpage = false; // Decides if Nav is in view of user

// Puts Nav on page
function slidein() {
    nav.style.transform = "translate(100%)";
    navButtonContainer.style.transform = "translate(100%)";
    onpage = true;
}

// Takes Nav off Page
function slideout() {
    nav.style.transform = "translate(0)";
    navButtonContainer.style.transform = "translate(0)";
    onpage = false;

}

// If statement for Nav Button
function slide() {
    if (onpage) {
        slideout();
    } else {
        slidein();
    }
}

// Slides out Nav if on page
function slideoutclick() {
    if (onpage) {
        slideout();
    }
}

// Onclick of Nav Button (slidein and slideout)
navButton.addEventListener("click", slide);

// Onclick of Main (slideoutclick)
main.addEventListener("click", slideout);

// Unload (slideoutclick)
window.addEventListener("beforeunload", slideout);
