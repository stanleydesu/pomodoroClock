"use strict";

(function() {
	// html elements
	const breakDiv = document.getElementById('break'),
		  sessionDiv = document.getElementById('session'),
		  breakValue = document.getElementById('breakValue'),
		  sessionValue = document.getElementById('sessionValue'),
		  timeDiv = document.getElementById('time'),
		  animationDiv = document.getElementById('animation');

	// functions
	function getTime() {
		return parseInt(timeDiv.textContent);
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
	});
})();

