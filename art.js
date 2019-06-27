// Navigation bar scrow
var prevScrollposition = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;
    if (prevScrollposition > currentScrollPosition) {
        document.getElementById("my_nav").style.top = "0";
    } else {
        document.getElementById("my_nav").style.top = "-48px";
    }
    prevScrollposition = currentScrollPosition;
}
