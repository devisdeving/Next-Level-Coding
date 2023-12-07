function setup() {
    createCanvas(600, 600);
}

function draw() {
    fill(0,0,0);
    ellipse(mouseX, mouseY, 100, 100);
}

if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }