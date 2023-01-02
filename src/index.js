import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

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
  angleMode(DEGREES);
  colorMode(HSB);
};

window.draw = function () {
  /*   strokeWeight(3);
  stroke(100);
  strokeWeight(2);
  line(0, h / 2, w, h / 2);
  line(w / 2, 0, w / 2, h);
  line(margin, 0, margin, h);
  line(w - margin, 0, w - margin, h);
  line(0, margin, w, margin);
  line(0, h - margin, w, h - margin); */

  noLoop();

  fxpreview();
};

features = {
  Genuary: "01",
};

console.table(features);
window.$fxhashFeatures = features;

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
    w = h = floor(min(windowWidth, windowHeight) / noOfLines) * noOfLines;
  } else if (aspect > 1) {
    w = max(
      renderSize,
      floor(min(windowWidth, windowHeight * aspect) / noOfLines) * noOfLines
    );
    h = w / aspect;
  } else if (aspect < 1) {
    h =
      floor(min(windowWidth / aspect, windowHeight) / (2 * noOfLines)) *
      2 *
      noOfLines;
    w = h * aspect;
  }
  windowScale = map(w, 0, referenceSize, 0, 1);
}

window.keyPressed = function () {
  if (key === "s" || key === "S") {
    console.log("SAVE");
    saveCanvas("simnple_lines" + width * pd + "x" + height * pd, "png");
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
