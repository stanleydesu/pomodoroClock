"use strict";

(function() {
	// html elements
	const breakDiv = document.getElementById('break'),
		  sessionDiv = document.getElementById('session'),
		  breakValue = document.getElementById('breakValue'),
		  sessionValue = document.getElementById('sessionValue'),
		  timeDiv = document.getElementById('time'),
		  animationDiv = document.getElementById('animation');

	let timeInSeconds = sessionValue.textContent * 60,
		timerId,
		isTiming;
	// functions

	function startTime() {
		isTiming = true;
		timerId = setInterval(function() {
			--timeInSeconds;
			displayTime();
		}, 1000);
	}

	function pauseTime(timerId) {
		isTiming = false;
		clearInterval(timerId);
	}

	function displayTime() {
		let minutes = Math.floor(timeInSeconds / 60);
		let seconds = timeInSeconds % 60;
		timeDiv.textContent = '' + minutes + ':' + seconds;
	}

	// event listeners

	// adjust break length
	breakDiv.addEventListener('click', function(e) {
		let target = e.target,
			id = target.id;

		// alter break length depending on button clicked
		if (id === 'minusBreak') {
			--breakValue.textContent;
		} else if (id === 'plusBreak') {
			++breakValue.textContent;
		}
	});

	sessionDiv.addEventListener('click', function(e) {
		let target = e.target,
			id = target.id;

		// alter break length depending on button clicked
		if (id === 'minusSession') {
			--sessionValue.textContent;
		} else if (id === 'plusSession') {
			++sessionValue.textContent;
		}

		timeInSeconds = +sessionDiv.textContent * 60;
	});

	timeDiv.addEventListener('click', function() {
		if (isTiming === true) {
			pauseTime(timerId);
		} else {
			startTime();
		}
	});
})();

