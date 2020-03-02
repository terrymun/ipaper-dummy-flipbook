const ua = navigator.userAgent.toLowerCase();
const host = {
	isIOS: /iphone; cpu/.test(ua) || /ipad; cpu/.test(ua) || /ipod; cpu/.test(ua),
}

function setAppHeight() {
	$('html, body').css('height', window.innerHeight);

	if (host.isIOS) {
		$('#newsticker').css('top', Math.min(window.innerHeight, $(window).height()));
	}

	$('#window-inner-height').text(window.innerHeight);
	$('#window-height').text($(window).height());
}

$(function() {
	setAppHeight();

	$('#refresh-heights').click(function() {
		setAppHeight();
	});
});
