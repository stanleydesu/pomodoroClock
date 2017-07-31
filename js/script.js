"use strict";

(function() {
	// html elements
	const breakDiv = document.getElementById('break'),
		  sessionDiv = document.getElementById('session'),
		  breakValue = document.getElementById('breakValue'),
		  sessionValue = document.getElementById('sessionValue'),
		  timeDiv = document.getElementById('time'),
		  animationDiv = document.getElementById('animation');

	function Pomodoro() {
		const settings = {
			session: 1500, // session length, default of 25 minutes
			break: 300, // break length, default of 5 minutes
			time: undefined, // current time length
			timer: undefined, // id of setInterval loop
			current: undefined, // whichever of session or break is activated
			next: undefined, // whichever of session or break should be timed next
			isTiming: undefined // boolean of timing status
		};
		this.setSession = function(length) {
			this.settings.session = length;
		};
		this.setBreak = function(length) {
			this.settings.break = length;
		};
		this.play = function() {
			this.settings.isTiming = true;
			settings.timer = setInterval(function() {
				--settings[settings.current];
				// if time is up, change to session or break accordingly
				if (settings[settings.current] === 0) {
					let temp = settings.current;
					settings.current = settings.next;
					settings.next = temp;
				}
			}, 1000);
		};
		this.pause = function() {
			settings.isTiming = false;
			clearInterval(settings.timer);
		};
		this.toggleTiming = function() {
			if (settings.isTiming) {
				this.play();
			} else {
				this.start();
			}
		}
		this.init = function() {
			console.log(settings);
			settings.current = 'session';
			settings.next = 'next';
		};
	}

	function displayTime(pomodoro) {
		setInterval(function() {
			let time = pomodoro.settings.time,
				minutes = Math.floor(time / 60),
				seconds = time % 60;
			timeDiv.textContent = '' + minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
		}, 1000);
	}

	let pomodoro = new Pomodoro();
	pomodoro.init();

	// event listeners

	// adjust break length
	breakDiv.addEventListener('click', function(e) {
		let target = e.target,
			id = target.id;

		// update break length if adjuster was clicked
		if (id === 'minusBreak' || id === 'plusBreak') {
			pomodoro.setBreak(breakValue.textContent * 60);
		}
	});

	sessionDiv.addEventListener('click', function(e) {
		let target = e.target,
			id = target.id;

		// update session length if adjuster was clicked
		if (id === 'minusSession' || id === 'plusSession') {
			pomodoro.setSession(sessionValue.textContent * 60);
		}
	});

	timeDiv.addEventListener('click', function() {
		pomoro.toggleTiming();
	});
})();

