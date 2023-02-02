import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 30";

let canvas, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

let margin;

let lines = [];
const noOfLines = 10;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  margin = w / 10;

  canvas = createCanvas(w, h);
  colorMode(HSB);
};

window.draw = function () {
  background(colors[0].hsb);

  for (let index = 0; index < noOfLines; index++) {
    let element;
    let elementRoll = random();
    let orientationRoll = random();

    if (elementRoll < 0.25) {
      element = new BigLine(
        random(margin, w - margin),
        orientationRoll < 0.5 ? "vertical" : "horizontal",
        random(2, 4),
        colors[1 + floor(random(colors.length - 1))].hsb
      );
    } else if (elementRoll > 0.25 && elementRoll < 0.75) {
      element = new SmallLine(
        random(margin, w - margin),
        orientationRoll < 0.5 ? "vertical" : "horizontal",
        random(2, 4),
        colors[1 + floor(random(colors.length - 1))].hsb
      );
    } else {
      element = new Lines(
        random(margin, w - margin),
        orientationRoll < 0.5 ? "vertical" : "horizontal",
        random(2, 4),
        colors[1 + floor(random(colors.length - 1))].hsb
      );
    }
    lines[index] = element;
  }

  for (let j = 0; j < noOfLines; j++) {
    lines[j].show();
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

function windowResized() {
  setDimensions();
  resizeCanvas(w, h);
}

class SmallLine {
  constructor(pos, direction, width, col) {
    this.pos = pos;
    this.direction = direction;
    this.width = 25 * width * windowScale;
    this.color = col;
  }
  show() {
    push();
    stroke(this.color);
    strokeWeight(this.width);
    if (this.direction === "vertical") {
      line(this.pos, 0, this.pos, h);
    } else {
      line(0, this.pos, w, this.pos);
    }
    pop();
  }
}

class BigLine {
  constructor(pos, direction, width, col) {
    this.pos = pos;
    this.direction = direction;
    this.width = 50 * width * windowScale;
    this.color = col;
  }
  show() {
    push();
    stroke(this.color);
    strokeWeight(this.width);
    if (this.direction === "vertical") {
      line(this.pos, 0, this.pos, h);
    } else {
      line(0, this.pos, w, this.pos);
    }
    pop();
  }
}

class Lines {
  constructor(pos, direction, width, col) {
    this.pos = pos;
    this.direction = direction;
    this.width = 2 * width * windowScale;
    this.color = col;
  }
  show() {
    push();
    stroke(this.color);
    strokeWeight(this.width);
    if (this.direction === "vertical") {
      line(this.pos - 8 * this.width, 0, this.pos - 8 * this.width, h);
      line(this.pos, 0, this.pos, h);
      line(this.pos + 8 * this.width, 0, this.pos + 8 * this.width, h);
    } else {
      line(0, this.pos - 8 * this.width, w, this.pos - 8 * this.width);
      line(0, this.pos, w, this.pos);
      line(0, this.pos + 8 * this.width, w, this.pos + 8 * this.width);
    }
    pop();
  }
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
