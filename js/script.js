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
			current: 'session', // whichever of session or break is activated
			isTiming: false // boolean of timing status
		};
		this.setSession = function(length) {
			settings.session = length;
		};
		this.setBreak = function(length) {
			settings.break = length;
		};
		this.play = function() {
			settings.isTiming = true;
			settings.timer = setInterval(function() {
				--settings.time;
				// if time is up, change to session or break accordingly
				if (settings.time === 0) {
					this.toggleMode();
				}
			}, 1000);
		};
		this.pause = function() {
			settings.isTiming = false;
			clearInterval(settings.timer);
		};
		this.getTime = function() {
			return settings.time;
		}
		// change between play and pause
		this.toggleTiming = function() {
			if (settings.isTiming) {
				this.pause();
				settings.isTiming = false;
			} else {
				this.play();
				settings.isTiming = true;
			}
		};
		// change between session and break
		this.toggleMode = function() {
			if (settings.current === 'session') {
				settings.current = 'break';
			} else {
				settings.current = 'session';
			}
			// set time to length of current mode
			settings.time = settings[settings.current];
		};
		this.init = function() {
			settings.time = settings.session;
		};
	}

	function displayTime(pomodoro) {
		setInterval(function() {
			let time = pomodoro.getTime(),
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

	// adjust session length
	sessionDiv.addEventListener('click', function(e) {
		let target = e.target,
			id = target.id;

		// update session length if adjuster was clicked
		if (id === 'minusSession' || id === 'plusSession') {
			pomodoro.setSession(sessionValue.textContent * 60);
		}
	});

	// alternate between timing and paused
	timeDiv.addEventListener('click', function() {
		pomodoro.toggleTiming();
	});

	displayTime(pomodoro);
})();

