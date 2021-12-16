let r, g, b;
let rad = 60; // Width of the shape
let xpos,
  ypos = 1; // Starting position of shape

let xspeed = 6.8; // Speed of the shape
let yspeed = 6.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
 
  createCanvas(500, 500); //create a 500px X 500px canvas
  noStroke();
  frameRate(505);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;

  r = (99, 19, 232);
  g = (255, 155, 0);
  b = (255, 243, 0);
}

function draw() {
  background(220, 218, 222);
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
  strokeWeight(8);
  stroke(r, g, b);
  fill(r, g, b);
}

function mousePressed() {

  r = random(255);
  g = random(255);
  b = random(255);
 
 
 
}