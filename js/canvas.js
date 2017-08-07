'use strict';
const canvas = document.getElementById('canvas'),
  	  c = canvas.getContext('2d'),
  	  particles = [];

canvas.style.width = '300px';
canvas.style.height = '380px';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function drawVolcano() {
	const volcano = new Path2D('M 30 345 L 60 270 L 120 270 L 140 310 L 120 270 L 90 270 L 120 190 L 190 190 L 210 240 L 180 240 L 165 270 L 180 240 L 210 240 L 225 240 L 270 345');
	c.strokeStyle = 'white';
	c.lineWidth = '4';
	c.stroke(volcano);
}

function eruptVolcano() {

}

