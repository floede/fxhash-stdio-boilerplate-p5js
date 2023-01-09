import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 08";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let bgLines;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

let R = (a = 1) => Math.random() * a;
let L = (x, y) => (x * x + y * y) ** 0.5;

const satOff = 15;
const brightOff = 7;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  // angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(60, 16, 94, 100);
};

window.draw = function () {
  for (let k = 0; k < 40000; k++) {
    let p = [R(2) - 1, R(2) - 1];
    let d = sdf(p);
    let outline = [
      228,
      15 + random(-satOff, satOff),
      13 + random(-brightOff, brightOff),
      100,
    ];
    let petals = [
      20,
      96 + random(-satOff, satOff),
      84 + random(-brightOff, brightOff),
      100,
    ];
    let bg = [
      127,
      30 + random(-satOff, satOff),
      97 + random(-brightOff, brightOff),
      100,
    ];
    let col = outline;
    if (d < -0.025) col = petals;
    if (d > 0.025) col = bg;
    draw_circle(p, 10, col);
  }
  noLoop();

  strokeWeight(3);
  stroke(100);
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

function draw_circle([x, y], r, c) {
  noStroke();
  fill(c);
  circle(((x + 1) * width) / 2, ((y + 1) * width) / 2, r / 2);
}

function sdf_circle([x, y], [cx, cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r;
}

function sdf_box([x, y], [cx, cy], [w, h]) {
  x -= cx;
  y -= cy;
  return k(abs(x) - w, abs(y) - h);
}

let k = (a, b) => (a > 0 && b > 0 ? L(a, b) : a > b ? a : b);

function sdf_rep(x, r) {
  x /= r;
  x -= Math.floor(x) + 0.5;
  x *= r;
  return x;
}

function sdf([x, y]) {
  let bal = sdf_circle([x, y], [-0.5, 0], 0.3);
  let box = sdf_box([x, y], [-0.35, 0.15], [0.15, 0.15]);
  let bo2 = sdf_box([x, y], [-0, -0], [0.15, 0.15]);
  x = abs(x) - 0.25;
  y = abs(y) - 0.25;
  return Math.min(
    sdf_circle([x, y], [0, 0], 0.3),
    sdf_box([x, y], [-0.15, -0.15], [0.15, 0.15])
  );
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
