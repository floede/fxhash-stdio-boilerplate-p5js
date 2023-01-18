import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 18";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

const noOfArcs = 100;

let colStart = 0;
let colEnd = 360;

let colStartSlider;
let colEndSlider;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  // colStartSlider = createSlider(0, 360, 0, 1);
  // colEndSlider = createSlider(0, 360, 360, 1);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(30, 10, 90, 100);

  noFill();
};

window.draw = function () {
  translate(width / 2, height / 2);
  // colStart = colStartSlider.value();
  // colEnd = colEndSlider.value();
  for (let i = 0; i < noOfArcs; i++) {
    drawRandomArc(colStart, colEnd);
  }
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

function drawRandomArc(start, end) {
  strokeCap(SQUARE);
  strokeWeight(windowScale * random(60, 80));
  let angle = Math.random() * 360;
  let distance = Math.random() * width;
  stroke(
    map(angle, 0, 360, start, end),
    map(distance, 0, width, 10, 90, true),
    70,
    20
  );
  arc(0, 0, distance, distance, 0 + angle, random(20, 40) + angle);
}

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
