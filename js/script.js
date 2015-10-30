function resize() {
    var heights = window.innerHeight;
    var width = window.innerWidth;
    document.getElementById("nav-container").style.height = heights -48 + "px";
    document.getElementById("main-container").style.height = heights -50 + "px";
    document.getElementById("main-container").style.width = width -70 + "px";
}
resize();
window.onresize = function() {
    resize();
};