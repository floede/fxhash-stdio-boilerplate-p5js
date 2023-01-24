import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 24";

let canvas, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

const yellow = [55, 95, 98]; // #f9e60d
const black = [216, 33, 34]; // #3a4556

var n = 0;
var c = 6;

var points = [];

var start = 0;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  canvas = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  // colStartSlider = createSlider(0, 360, 0, 1);
  // colEndSlider = createSlider(0, 360, 360, 1);
  colorMode(HSB);
};

window.draw = function () {
  background(yellow);
  translate(w / 2, h / 2);
  //rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i * 0.1);
    hu = map(hu, -1, 1, 0, 360);
    fill(black[0], black[1], black[2] + random(-10, 10));
    noStroke();
    ellipse(x, y, c + (0.1 * i) / 40, c + (0.1 * i) / 40);
  }
  n += 5;
  start += 0.1;

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
  if (n > 5000) {
    noLoop();
  }
  // noLoop();
};

features = {
  Title: title,
};

console.table(features);
window.$fxhashFeatures = features;

class Hex {
  constructor(len, x, y, col, variation) {
    this.gs = 0.5 * len;
    this.len = len;
    this.variation = variation;
    this.lineWidth = lineBase * windowScale;

    if (this.variation === 1) {
      fill(white);
    }

    if (this.variation === 2) {
      fill(black);
    }

    if (this.variation === 3) {
      noFill();
      strokeWeight(this.lineWidth);
      stroke(white);
      this.len = this.len - 0.5 * this.lineWidth;
    }

    beginShape();
    for (let a = 0; a < TAU; a += TAU / 6) {
      vertex(x + this.len * cos(a), y + this.len * sin(a));
    }
    endShape(CLOSE);

    if (this.variation === 2) {
      drawingContext.clip();
      pattern = new StripePattern(x, y, len);
    }
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
