'use strict';
const canvas = document.getElementById('canvas'),
  	  c = canvas.getContext('2d'),
  	  volcano = document.getElementById('path').getBoundingClientRect();

let particles = [];

// initialise canvas dimensions
canvas.width = innerWidth;
canvas.height = volcano.top;

window.addEventListener('resize', function() {
	canvas.width = innerWidth;
	particles = [];
	init();
}, false);

const colors = [
  "rgb(242, 193, 102)",
  "rgb(242, 134, 39)",
  "rgb(217, 63, 7)",
  "rgb(140, 29, 4)",
  "rgb(65, 15, 4)"
];

function Particle(x, y, vx, vy, color) {
	this.x = x;
	this.y = y;
	this.lastX = x;
	this.lastY = y;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	this.update = function() {
		this.lastX = this.x;
		this.lastY = this.y;
		this.x += this.vx;
		this.y += this.vy;
		this.draw();
	};
	this.draw = function() {
		c.beginPath();
		c.moveTo(this.lastX, this.lastY);
		c.lineTo(this.x, this.y);
		c.strokeStyle = this.color;
		c.lineWidth = '3';
		c.stroke();
	};
}

function init() {
	for (let i = 0; i < 500; ++i) {
		// volcano hole width: 40px
		let x = (canvas.width / 2) - 20 + (Math.random() * (40 / 8)) * 8,
			y = volcano.top + (Math.random() * volcano.bottom),
			vx = 0,
			vy = -10,
			color = colors[Math.floor(Math.random() * colors.length)];
		particles.push(new Particle(x, y, vx, vy, color));
	}
}

init();

function eruptVolcano() {
	requestAnimationFrame(eruptVolcano);
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < particles.length; ++i) {
		particles[i].update();
		if (particles[i].y <= 0) {
			particles[i].y = volcano.bottom; 
		}
	}
}
