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

function buttonChange(obj) {
	if (obj.classList.contains("blue-button")) {
		obj.classList.remove("blue-button");
		obj.classList.add("white-button");
	} else if (obj.classList.contains("white-button")) {
		obj.classList.remove("white-button");
		obj.classList.add("blue-button");
	}
}