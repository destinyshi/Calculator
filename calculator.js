// JavaScript Document
function d(val) {
	document.getElementById("d").value = val;
}
function v(val) {
	document.getElementById("d").value += val;
}
function e() {
	try{
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}