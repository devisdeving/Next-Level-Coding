let drawingDots = [];

let cursorImage;

function preload(){
  cursorImage = loadImage('drawEllipse.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0);
  // Load points from local storage
  drawingDots = JSON.parse(localStorage.getItem('array-of-dots') || '[]');
  color1 = color("#F3EBD4");
  color2 = color("#B9B9B9");
}

function draw() {
  // Continuously update and redraw the canvas
  updateCanvas();
}

function mouseDragged() {
  const point = {
    x: mouseX,
    y: mouseY,
    time: millis() // Current timestamp
  };
  drawingDots.push(point);
  localStorage.setItem('array-of-dots', JSON.stringify(drawingDots));
}

function updateCanvas() {
  clear();
  background(0,0);

  for (let point of drawingDots) {
    drawDot(point);
  }
}

function drawDot(point) {
  const elapsedTime = millis() - point.time;
  const fadeDuration = 10000;
  let alpha = 255;

  if (elapsedTime < fadeDuration) {
    alpha = 255 * (1 - (elapsedTime / fadeDuration));
  }

  noStroke();

  // Interpolate between the two colors based on the elapsed time
  let blendedColor = lerpColor(color1, color2, elapsedTime / fadeDuration);

  fill(red(blendedColor), green(blendedColor), blue(blendedColor), alpha);
  image(cursorImage, point.x, point.y, 30, 30)
}

function clearDrawing() {
  localStorage.removeItem('array-of-dots');
  drawingDots = [];
  clear();
  background(0,0);
}

function keyPressed(){
  if( key === ' '){
    clearDrawing() 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const follower = document.querySelector(".follower");

  document.addEventListener("mousemove", function(e) {
    // Set the position of the follower div to the cursor coordinates
    follower.style.left = e.pageX + "px";
    follower.style.top = e.pageY + "px";
  });
});
