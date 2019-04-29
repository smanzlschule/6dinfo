function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	fill(0);
}

var width = window.innerWidth;
var height = window.innerHeight;

var x = 100;
var y = 100;

var vx = 5;
var vy = 0;

var radius = 30;

function draw() {
	background("lightgray");
	ballMove();
	ellipse(x, y, radius*2, radius*2);
}

function ballMove() {
	x = x + accelerationX;
	y += accelerationY;
	
	if(x >= width-radius){
		vx = -vx;
	}
	if(x <= radius){
		vx = -vx;
	}
	if(y >= height-radius){
		vy = -vy;
	}
	if(y <= radius){
		vy = -vy;
	}
}

function keyPressed() {
  console.log(keyCode);
  if(keyCode == 38) { //nach oben
	  vx=0;
	  vy=-5;
  }
  if(keyCode == 40) { //nach unten
	  vx=0;
	  vy=5;
  }
  if(keyCode == 39) { //nach rechts
	  vx=5;
	  vy=0;
  }
  if(keyCode == 37) { //nach links
	  vx=-5;
	  vy=0;
  }
  if(keyCode == 32) {
	  vx=vx*1.1;
	  vy*=1.1;
  }
  if(keyCode == 13) {
	  vx=vx/1.1;
	  vy/=1.1;
  }
}