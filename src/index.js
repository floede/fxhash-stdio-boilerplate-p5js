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

const grid = [];
let HexSize;
let HexSide;

let pattern;
let hexes = [];

let lineBase = 2;

const white = [0, 0, 10];
const black = [0, 0, 100];

const colArr = [black, white];

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
  background(black);

  HexSize = 100 * windowScale;
  HexSide = HexSize / Math.sqrt(3);

  noStroke();
  for (let j = 0; j < 1 + h / HexSize; j++) {
    let row = [];
    for (let index = 0; index < 1 + w / HexSize; index++) {
      if (j % 2 === 0) {
        row[index] = [index * HexSize, j * HexSize];
      } else {
        row[index] = [index * HexSize + HexSize / 2, j * HexSize];
      }
    }
    grid[j] = row;
  }
};

window.draw = function () {
  for (let j = 0; j < grid.length; j++) {
    for (let index = 0; index < grid[j].length; index++) {
      let x = grid[j][index][0];
      let y = grid[j][index][1];
      push();
      translate(x, y);
      rotate(30 * (PI / 180));
      rotate(60 * Math.round(random(1, 3)) * (PI / 180));
      hexes.push(new Hex(HexSide, 0, 0, randdomGrey(), Math.round(random(3))));

      rotate(60 * Math.round(random(1, 3)) * (PI / 180));
      hexes.push(
        new Hex(HexSide * 0.5, 0, 0, randdomGrey(), Math.round(random(3)))
      );
      pop();
    }
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

function randdomGrey() {
  return colArr[Math.floor(random(colArr.length))];
}

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

class StripePattern {
  constructor(x, y, len) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.lineWidth = lineBase * windowScale;
    this.noOflines = len / this.lineWidth;
    this.patternOffset = this.len - this.lineWidth;
    for (let index = 0; index < this.noOflines; index++) {
      stroke(white);
      strokeWeight(this.lineWidth);
      line(
        this.x - len,
        -this.patternOffset + this.y + index * 2 * this.lineWidth,
        this.x + len,
        -this.patternOffset + this.y + index * 2 * this.lineWidth
      );
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
