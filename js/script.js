document.addEventListener('DOMContentLoaded', function () {
	initCounters();
	scrollToHash();
	window.addEventListener('hashchange', scrollToHash, false);
});

function initCounters() {
	const counters = document.querySelectorAll('.count');
	const speed = 2000;

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;
			const inc = target / speed;

			if (count < target) {
				counter.innerText = Math.ceil(count + inc);
				setTimeout(updateCount, 100);
			} else {
				counter.innerText = target;
			}
		};

		updateCount();
	});
}

function scrollToHash() {
	const hash = window.location.hash;
	const docScrollbar = document.querySelector('#scrollbar');
	const scrollbar = Scrollbar.init(docScrollbar, {
		continuousScrolling: false,
		alwaysShowTracks: true,
		plugins: {}
	});

	if (hash) {
		const target = document.getElementById(hash.substring(1));
		if (target) {
			scrollbar.scrollIntoView(target, {
				offsetTop: -scrollbar.containerEl.scrollTop,
			});
		}
	}
}
