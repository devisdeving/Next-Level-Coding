function setup() {
    createCanvas(400, 400);
}

function draw() {
background(255);

const red = color(251, 2, 7);
const black = color(0, 0, 0);
const white = color(255, 255, 255);

fill(red);
noStroke();

beginShape();
vertex(71, 58);
bezierVertex(125, 59, 300, 70, 300, 138);
bezierVertex(300, 138, 300, 205, 125, 216);
vertex(71, 218);
vertex(71, 137);
bezierVertex(98, 137, 149, 132, 149, 110);
bezierVertex(149, 110, 149, 83, 71, 83.1);
vertex(71, 82.6);
vertex(71, 58);
endShape();

beginShape();
vertex(311, 110);
bezierVertex(320, 119, 415, 225, 266, 300);
bezierVertex(266, 300, 209, 329, 110, 337);
vertex(71, 339);
vertex(71, 253);
bezierVertex(115, 253, 178, 250, 251, 222);
vertex(251, 222);
bezierVertex(318, 196, 343, 156, 311, 110);

endShape();

//FIRST ATTEMPT TO RECREATE LOGO WITH CONCENTRIC ELLIPSES
    //beginShape; 
    //ellipse(200, 200, 360, 180);
    // ellipse(200, 195, 330, 160);
    // ellipse(200, 190, 300, 140);
    // ellipse(200, 185, 270, 120);
    // ellipse(200, 180, 240, 100);
    // ellipse(200, 175, 210, 80);

    // fill(251, 2, 7);
    // noStroke();
    // ellipse(200, 170, 180, 60);
  }
       