let drawingDots = [];
let circleRadius = 25;

let isKeyPressed = false;
let startTime;
let opacity = 0;

let cursorImage;
let counter = 0;

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
  myTime = millis()
  // localStorage.removeItem('array-of-dots');
}

function draw() {
  // Continuously update and redraw the canvas
  updateCanvas();
  // console.log(drawingDots);
  // if(isKeyPressed){

  // }
}



function mouseDragged() {
  for (let i=0;i<100;i++){
    const point = {
      x: mouseX,
      y: mouseY,
      angle: random(TWO_PI),
      r: random(circleRadius),
      offsetX: random(-30, 30),
      offsetY: random(-30, 30),
      time: millis() // Current timestamp
    };
    drawingDots.push(point);
  }
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

  // if (elapsedTime < fadeDuration) {
    // alpha = 255 * (1 - (elapsedTime / fadeDuration));
    noStroke();

    // Interpolate between the two colors based on the elapsed time
    let blendedColor = lerpColor(color1, color2, elapsedTime / fadeDuration);
    console.log(alpha)
    fill(red(blendedColor), green(blendedColor), blue(blendedColor));
    for(i=0; i<30; i++){
      ellipse(point.x+cos(point.angle)*point.r, point.y+sin(point.angle)*point.r, 1)
    // }

    if(isKeyPressed){
      let elapsedTime = millis()-startTime;
      opacity = map(elapsedTime, 0, 3000, 0, 255)
      opacity = constrain(opacity, 0, 255)
      if(elapsedTime==3000){
        localStorage.removeItem('array-of-dots');
        drawingDots = [];
        opacity = 255;
      }
    }

    
  } 


  // image(cursorImage, point.x, point.y, 30, 30)
}

function clearDrawing() {
  
  
  // clear()
  // background(0, opacity);
  // console
}


function keyPressed(){
  isKeyPressed =! isKeyPressed
  console.log(isKeyPressed)
}


document.addEventListener("DOMContentLoaded", function() {
  const follower = document.querySelector(".follower");

  document.addEventListener("mousemove", function(e) {
    // Set the position of the follower div to the cursor coordinates
    follower.style.left = e.pageX + "px";
    follower.style.top = e.pageY + "px";
  });
});
