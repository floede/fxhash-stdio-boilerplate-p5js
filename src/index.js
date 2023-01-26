import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 25";

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
var c = 5;

var points = [];

var start = 0;
let margin;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  margin = w / 10;

  canvas = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  // colStartSlider = createSlider(0, 360, 0, 1);
  // colEndSlider = createSlider(0, 360, 360, 1);
  colorMode(HSB);
};

window.draw = function () {
  background(yellow);
  translate(w / 2, h / 2);
  // rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i * 0.1);
    hu = map(hu, -1, 1, 0, 360);
    //noFill();
    fill(black[0], black[1], black[2] + random(-3, 3));
    noStroke();
    //stroke(black);
    //strokeWeight(c / 4);
    if (k(abs(x) - 300, abs(y) - 300) < 0) {
      ellipse(x, y, c + (0.08 * i) / 40, c + (0.08 * i) / 40);
    }
  }
  n += 6;
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
  if (n > 10000) {
    noLoop();
  }
  // noLoop();
};

features = {
  Title: title,
};

console.table(features);
window.$fxhashFeatures = features;

function windowResized() {
  setDimensions();
  resizeCanvas(w, h);
}

let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5;

let k = (a, b) => (a > 0 && b > 0 ? L(a, b) : a > b ? a : b);

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
