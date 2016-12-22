$(function() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px';
	}
})