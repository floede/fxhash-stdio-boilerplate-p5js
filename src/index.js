import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

const title = "Genuary 23 - 17";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let bgLines;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

let gridDivsX;
let gridDivsY;

// actual spacing between grid points
let gridSpacingX;
let gridSpacingY;

let bools = [];

let rectInfo = [];
let padding;

const variation = 0.25;
const offset = 30;
const xoff = 0.1;
const yoff = 0.1;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h);
  // slider = createSlider(0, 10, 0, 0.1);
  //angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 90, 100, 100);

  // size of the padding between grid and sketch borders
  padding = w / 12;

  // number of rows and columns of the grid
  gridDivsX = 20;
  gridDivsY = 20;

  // actual spacing between grid points
  gridSpacingX = (w - padding * 2) / gridDivsX;
  gridSpacingY = (w - padding * 2) / gridDivsY;

  for (let x = 0; x < gridDivsX; x++) {
    var column = [];
    for (let y = 0; y < gridDivsY; y++) {
      column.push(1);
    }
    bools.push(column);
  }

  constructIrregularGrid([2, 3]);
  constructIrregularGrid([1]);

  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  drawGrid();
  markEmptySpots();
};

window.draw = function () {
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

function makeRect(posX, posY, dimX, dimY) {
  this.posX = posX;
  this.posY = posY;
  this.dimX = dimX;
  this.dimY = dimY;
}

function constructIrregularGrid(sizesArr) {
  for (let x = 0; x < gridDivsX - max(sizesArr) + 1; x++) {
    for (let y = 0; y < gridDivsY - max(sizesArr) + 1; y++) {
      let xdim = random(sizesArr);
      let ydim = random(sizesArr);

      let fits = true;

      // check if within bounds
      if (x + xdim > gridDivsX || y + ydim > gridDivsY) {
        fits = false;
      }

      // check if rectangle overlaps with any other rectangle
      if (fits) {
        for (let xc = x; xc < x + xdim; xc++) {
          for (let yc = y; yc < y + ydim; yc++) {
            if (bools[xc][yc] == 0) {
              fits = false;
            }
          }
        }
      }

      if (fits) {
        // mark area as occupied
        for (let xc = x; xc < x + xdim; xc++) {
          for (let yc = y; yc < y + ydim; yc++) {
            bools[xc][yc] = false;
          }
        }

        rectInfo.push(new makeRect(x, y, xdim, ydim));
      }
    }
  }
}

function drawGrid() {
  for (let n = 0; n < rectInfo.length; n++) {
    let r = rectInfo[n];
    rect(
      r.posX * gridSpacingX + padding,
      r.posY * gridSpacingY + padding,
      r.dimX * gridSpacingX,
      r.dimY * gridSpacingY
    );
    // drawSquigglyLine(x1, y1, x2, y2, strokeWidth, color)
    drawSquigglyLine(
      r.posX * gridSpacingX + padding,
      r.posY * gridSpacingY + padding,
      r.dimX * gridSpacingX,
      r.dimY * gridSpacingY,
      2,
      255
    );
    console.log(
      r.posX * gridSpacingX + padding,
      r.posY * gridSpacingY + padding,
      r.dimX * gridSpacingX,
      r.dimY * gridSpacingY
    );
  }
}

function markEmptySpots() {
  for (let x = 0; x < gridDivsX; x++) {
    for (let y = 0; y < gridDivsY; y++) {
      if (bools[x][y]) {
        point(
          x * gridSpacingX + gridSpacingX / 2 + padding,
          y * gridSpacingY + gridSpacingY / 2 + padding
        );
      }
    }
  }
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
