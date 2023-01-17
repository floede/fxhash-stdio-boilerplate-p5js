import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 15";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let bgLines;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

const cellSize = 10;

const rows = renderSize / cellSize;
const cols = renderSize / cellSize;

const inputStart = 0;
const inputEnd = 1000;
const inRange = 2.5;
const outRange = 0.5;

const outputStart = 0;
const outputEnd = 0.5;

const minRange = 0;
const maxRange = 360;

let noiseMax = 2;
let slider;
let anim = 0;

let grid = [];

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  //angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(69, 8, 100, 100);

  frameRate(2);

  for (let row = 0; row < rows; row++) {
    let data = [];
    for (let col = 0; col < cols; col++) {
      let inX = map(col, 0, 100, -inRange, inRange);
      let inY = map(row, 0, 100, -inRange, inRange);
      data[col] = { x: row, y: col, value: f(inX, inY) }; //
    }
    grid[row] = data;
  }
};

window.draw = function () {
  console.log("GRID: ", grid);
  noStroke();

  //noiseMax = slider.value();

  let xoff = map(cos(anim), -1, 1, 0, noiseMax);
  let yoff = map(sin(anim), -1, 1, 0, noiseMax);
  let offset = map(noise(xoff, yoff), 0, 1, 0, 360);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let data = grid[row][col];
      let x = data.x * cellSize * windowScale + cellSize * windowScale * 0.5;
      let y = data.y * cellSize * windowScale + cellSize * windowScale * 0.5;
      let size = floor(
        map(data.value, -outRange, outRange, 0, 10) * windowScale
      );
      let hue = map(data.value, -outRange, outRange, 0, 360);
      fill(wrapAround(hue, offset), 70, 70, 100);
      circle(x, y, size);
    }
  }
  anim++;
  if (anim > 360) {
    anim = 0;
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

function f(x, y) {
  return (x + y) / (1 + x * x + y * y);
  //return cos(x) * sin(y);
}

function wrapAround(value, offset) {
  let newValue = value + offset;
  if (newValue > maxRange) {
    newValue = minRange + (newValue - maxRange);
  }
  return newValue;
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
