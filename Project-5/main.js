let drawingDots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0);
  // Load points from local storage
  drawingDots = JSON.parse(localStorage.getItem('array-of-dots') || '[]');
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
  const fadeDuration = 30000;
  let alpha = 255;

  if (elapsedTime < fadeDuration) {
    alpha = 255 * (1 - (elapsedTime / fadeDuration));
  }

  noStroke();

  // Define the gradient colors
  let color1 = color("#F3EBD4");
  let color2 = color("#B9B9B9");

  // Interpolate between the two colors based on the elapsed time
  let blendedColor = lerpColor(color1, color2, elapsedTime / fadeDuration);

  // Set the fill color to the interpolated color with adjusted alpha
  fill(red(blendedColor), green(blendedColor), blue(blendedColor), alpha);

  ellipse(point.x, point.y, 30);
  // ellipse(point.x + random(-5, 5), point.y+random(-5, 5), 30);
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