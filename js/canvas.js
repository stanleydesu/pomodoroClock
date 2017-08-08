'use strict';
const canvas = document.getElementById('canvas'),
  	  c = canvas.getContext('2d'),
  	  particles = [];

canvas.style.width = '300px';
canvas.style.height = '380px';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function drawVolcano() {
	const volcano = new Path2D('M 30 340 L 70 260 L 110 260 L 130 300 L 110 260 L 90 260 L 130 180 L 170 180 L 190 220 L 180 240 L 170 240 L 160 230 L 140 230 L 130 240 L 120 240 L 110 220 L 130 180 L 170 180 L 190 220 L 220 280 L 200 280 L 180 320 L 200 280 L 220 280 L 240 280 L 270 340');
	c.strokeStyle = 'white';
	c.lineWidth = '5';
	c.stroke(volcano);
}

function eruptVolcano() {

}
