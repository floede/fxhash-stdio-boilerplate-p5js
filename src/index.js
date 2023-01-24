import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 19";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

let grid = [];
let colSize;

const white = [0, 0, 100];
const black = [0, 0, 10];

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
  colorMode(HSB);
  background(white);

  colSize = 100 * windowScale;

  noStroke();
  for (let j = 0; j < w / colSize; j++) {
    let col = { ...grid[j] };
    console.log("GRID J: ", j, col);
    //let prev = j < 1 ? undefined : grid[j].half;
    if (!("half" in col)) {
      if (random() < 0.3) {
        grid[j] = { x: j * colSize, half: true };
      } else {
        grid[j] = { x: j * colSize, half: false };
        grid[j + 1] = { half: false };
      }
    }
  }
};

window.draw = function () {
  background(white);
  stroke(black);
  for (let i = 0; i < grid.length; i++) {
    console.log("X:", grid[i]);
    let x = grid[i].x;
    line(x, 0, x, h);
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
