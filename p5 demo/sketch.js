function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);

    triangle(random(300), random(300), 300, 600, 600, 600)
    noStroke()
  }