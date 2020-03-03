const ua = navigator.userAgent.toLowerCase();
const host = {
	isIOS: /iphone; cpu/.test(ua) || /ipad; cpu/.test(ua) || /ipod; cpu/.test(ua),
}

let timer;

function setAppHeight() {
	$('html, body').css('height', window.innerHeight);

	if (host.isIOS) {
		$('#log').css({
			top: Math.min(window.innerHeight, $(window).height()),
			bottom: 'auto',
			transform: 'translateY(-100%)',
		});
	}

	$('#window-inner-height').text(window.innerHeight);
	$('#window-height').text($(window).height());

	$('#timestamp').text(new Date());
}

$(function() {
	setAppHeight();

	const startTimer = () => {
		stopTimer();

		$('.start-auto-refresh').prop('disabled', true);
		$('.cancel-auto-refresh').prop('disabled', false);
		setAppHeight();

		timer = window.setInterval(() => {
			setAppHeight();
		}, 3000);
	};

	const stopTimer = () => {
		if (timer) {
			window.clearInterval(timer);

			$('.start-auto-refresh').prop('disabled', false);
			$('.cancel-auto-refresh').prop('disabled', true);
		}
	}

	$('.refresh-heights').click(() => setAppHeight());
	$('.start-auto-refresh').click(() => startTimer());
	$('.cancel-auto-refresh').click(() => stopTimer());

	startTimer();
});
