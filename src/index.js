import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 09";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let bgLines;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(60, 16, 94, 100);
};

window.draw = function () {
  strokeWeight(3);
  fill(137, 30, 51, 70);
  stroke(144, 44, 29, 100);
  for (let index = 0; index < 50; index++) {
    drawGrass(
      random(100, w - 100),
      height,
      random(40, 80),
      3,
      random(60, 100),
      random(3, 6),
      random(-20, 0)
    );
  }
  noLoop();

  // strokeWeight(2);
  // line(0, h / 2, w, h / 2);
  // line(w / 2, 0, w / 2, h);
  // line(0, tw, w, tw);
  // line(tw, 0, tw, h);
  // line(margin, 0, margin, h);
  // line(w - margin, 0, w - margin, h);
  // line(0, margin, w, margin);
  // line(0, h - tw, w, h - tw);

  //fxpreview();
  noLoop();
};

features = {
  Title: title,
};

console.table(features);
window.$fxhashFeatures = features;

function drawGrass(x, y, stemLength, stemThickness, leafSize, pieces, angle) {
  // Calculate the new x and y coordinates for the top of the stem
  let newX = x + stemLength * sin(angle);
  let newY = y - stemLength * cos(angle);

  // Draw the stem of the grass
  line(x, y, newX, newY);

  // Draw a leaf at the end of the stem with a 50% chance
  if (random() < 0.5) {
    // Choose randomly whether to draw the leaf on the left or right side of the stem
    if (random() < 0.5) {
      push();
      translate(newX - 0.5 * leafSize, newY);
      // drawLeaf(x, y, angle, leftSide, size)
      drawLeaf(0, 0, random(-20, 45), false, leafSize);
      pop();
    } else {
      push();
      translate(newX + 0.5 * leafSize, newY);
      // drawLeaf(x, y, angle, leftSide, size)
      drawLeaf(0, 0, random(-20, 45), true, leafSize);
      pop();
    }
  }

  // Recursively draw more grass on top of the current straw
  if (pieces > 0) {
    drawGrass(
      newX,
      newY,
      stemLength + random(10),
      stemThickness,
      leafSize,
      pieces - 1,
      angle + random(-5, 10)
    );
  } else {
    // drawFlower(x, y, size, rotation, petalColor, centerColor)
    drawFlower(
      newX,
      newY,
      random(45, 55),
      random(0, 360),
      [142, 6, 99, 100],
      [127, 20, 16, 100]
    );
  }
}

function drawLeaf(x, y, angle, leftSide, size) {
  push();
  noStroke();
  translate(x, y);
  //rotate(angle);
  if (leftSide) {
    rotate(-angle);
    scale(-1, 1);
  } else {
    rotate(angle);
  }
  beginShape();
  for (let t = 0; t <= 360; t += 5) {
    let x, y;
    if (t === 0 || t === 315) {
      x = size / 2;
      y = 0;
      t += 45;
    } else if (t === 135) {
      x = -size / 2;
      y = 0;
      t += 90;
    } else {
      x = (size / 2) * cos(t);
      y = (size / 2 / 7) * sin(t);
    }
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function drawFlower(x, y, size, rotation, petalColor, centerColor) {
  push();
  // Translate and rotate the coordinate system
  translate(x, y);
  rotate(rotation);

  // Set the fill color for the petals
  fill(petalColor);

  // Draw the four petals of the flower
  ellipse(size / 2, 0, size, size);
  ellipse(0, size / 2, size, size);
  ellipse(-size / 2, 0, size, size);
  ellipse(0, -size / 2, size, size);

  // Set the fill color for the center of the flower
  fill(centerColor);

  // Draw the center of the flower
  ellipse(0, 0, size / 2, size / 2);
  pop();
}

function sgn(w) {
  if (w < 0) {
    return -1;
  } else if (w === 0) {
    return 0;
  } else {
    return 1;
  }
}

function getMapColor(pos, inverse = false) {
  return inverse
    ? map(pos, 0, noOfLines, 360, 0)
    : map(pos, 0, noOfLines, 0, 360);
}

function windowResized() {
  setDimensions();
  resizeCanvas(w, h);
}

function setDimensions() {
  if (aspect === 1) {
    w = h = floor(min(windowWidth, windowHeight));
  } else if (aspect > 1) {
    w = max(renderSize, floor(min(windowWidth, windowHeight * aspect)));
    h = w / aspect;
  } else if (aspect < 1) {
    h = floor(min(windowWidth / aspect, windowHeight));
    w = h * aspect;
  }
  windowScale = map(w, 0, referenceSize, 0, 1);
}

window.keyPressed = function () {
  if (key === "s" || key === "S") {
    console.log("SAVE");
    saveCanvas(title + width * pd + "x" + height * pd, "png");
  }
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9"
  ) {
    clear();
    pd = 1 * key;
    pixelDensity(pd);
    fxrand = sfc32(...hashes);
    //init();
    //paper();
    //layoutGrid();
    //coloring();
    draw();
  }
};
