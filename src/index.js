import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 10";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let bgLines;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

const variation = 0.25;
const offset = 30;
const xoff = 0.1;
const yoff = 0.1;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  //angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(159, 5, 100, 100);
};

window.draw = function () {
  let ystart = 300;
  let offset = 20;
  for (let index = 0; index < 5; index++) {
    drawSquigglyLine(
      50,
      ystart + index * offset,
      w - 50,
      ystart + index * offset,
      2,
      [191, 44, 15, 100]
    );
  }

  let nodeStart = 60;
  let nodeGap = 40;
  for (let j = 0; j < 16; j++) {
    drawNode(nodeStart + j * nodeGap, h / 2 - random([-20, 0, 20, 40, 60]));
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

function drawSquigglyLine(x1, y1, x2, y2, strokeWidth, color) {
  strokeWeight(strokeWidth);
  stroke(color);
  //noFill();
  let x, y;
  beginShape();
  for (let i = 0; i <= 1; i += 0.025) {
    x =
      x1 +
      (x2 - x1) * i +
      cos(i * PI * offset) * variation +
      random(-xoff, xoff);
    y =
      y1 +
      (y2 - y1) * i +
      sin(i * PI * offset) * variation +
      random(-yoff, yoff);
    vertex(x, y);
  }
  endShape();
}

function drawEllipse(x, y, width, height, angle, color) {
  noStroke();
  fill(color);
  push();
  translate(x, y);
  rotate(angle);

  beginShape();
  for (let i = 0; i <= TWO_PI; i += 0.1) {
    let x = (width / 2) * cos(i) + random(-xoff, xoff);
    let y = (height / 2) * sin(i) + random(-xoff, xoff);
    vertex(x, y);
  }
  endShape();
  pop();
}

function drawNode(x, y) {
  const lineLen = 50;
  if (random() < 0.75) {
    if (random() < 0.5) {
      drawSquigglyLine(
        x + 10,
        y - 2,
        x + 14,
        y - lineLen,
        1.5,
        [191, 44, 15, 100]
      );
      drawEllipse(x, y, 20, 10, -PI / 6, [191, 44, 15, 100]);
    } else {
      drawSquigglyLine(
        x + 10,
        y - 2 + 40,
        x + 14,
        y - lineLen - 2 + 40,
        1.5,
        [191, 44, 15, 100]
      );
      drawEllipse(x + 6, y - lineLen + 40, 20, 10, -PI / 6, [191, 44, 15, 100]);
    }
  }
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
