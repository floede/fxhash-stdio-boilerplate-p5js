import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 22";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

let margin;

const color = [random("Hue", 0, 360), random("Saturation", 20, 50), 100];

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);
  margin = 100 * windowScale;

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  // colStartSlider = createSlider(0, 360, 0, 1);
  // colEndSlider = createSlider(0, 360, 360, 1);
  colorMode(HSB);
  angleMode(DEGREES);
  background(color[0], color[1], color[2] - 10);
};

window.draw = function () {
  let x = random("X", margin, w - margin - 200);
  let y = random("Y", margin + 200, h - margin);
  let tw = 200;
  let th = random("Shadow", 10, 100);
  translate(x, y);
  noStroke();
  let box = new ShadowBox(0, 0, tw, 200, th);
  box.show();

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

class ShadowBox {
  constructor(x, y, width, height, shadowHeight) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + width;
    this.y2 = y;
    this.x3 = x + width;
    this.y3 = y - height;
    this.x4 = x;
    this.y4 = y - height;
    this.width = width;
    this.height = height;
    this.shadowHeight = shadowHeight;
  }
  show() {
    fill(color[0], color[1], color[2] - 50);
    rectMode(CORNERS);
    rect(this.x1 + 1, this.y1 - 1, this.x3 - 1, this.y3 + 1);
    push();
    translate(this.x1, this.y1);
    fill(color[0], color[1], color[2] - 90);
    drawTrapezoid(0, 0, this.x2, this.y2, this.shadowHeight);
    pop();
    push();
    translate(this.x2, this.y2);
    fill(color[0], color[1], color[2] - 70);
    rotate(-90);
    drawTrapezoid(0, 0, this.width, 0, this.shadowHeight);
    pop();
    push();
    translate(this.x3, this.y3);
    fill(color[0], color[1], color[2] - 10);
    rotate(-180);
    drawTrapezoid(0, 0, this.width, 0, this.shadowHeight);
    pop();
    push();
    translate(this.x4, this.y4);
    fill(color[0], color[1], color[2] - 20);
    rotate(-270);
    drawTrapezoid(0, 0, this.width, 0, this.shadowHeight);
    pop();
  }
}

function drawTrapezoid(x1, y1, x2, y2, height) {
  quad(x1, y1, x2, y2, x2 - height, y2 - height, x1 + height, y1 - height);
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
