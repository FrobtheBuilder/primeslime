$(document).ready(function () {
	adjust();
	$(window).resize(function() {
		adjust();
	})
})

function adjust() {
	$(".jumbo-slime").css({
		top: (window.innerHeight/2) - ($(".jumbo-slime").outerHeight(false)/2),
		left: (window.innerWidth/2) - ($(".jumbo-slime").outerWidth(false)/2)
	})
	//$("body").css({
	//	"background-size": "auto " + window.innerHeight + "px"
	//})
}