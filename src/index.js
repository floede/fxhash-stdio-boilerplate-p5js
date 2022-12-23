// TODO: I halfline acceptable ?

import "p5";
// Use random functions from stdio and not from p5
import { random, randomBoolean, weight } from "@altesc/stdio";

let c, w, h;
let windowScale;
let pd = 1;
let bgCol;
let features = {};
const renderSize = 1000;
const referenceSize = 1000;
const aspect = 1 / 1;

const HexSize = 100;
const HexSide = HexSize / Math.sqrt(3);
const r = (HexSide * Math.sqrt(3)) / 2;
const HexHeight = 1.5 * HexSide;

const shuffleColors = true;

const colors = [
  [164, 87],
  [195, 80],
  [346, 60],
];
const shades = [20, 50, 80];

// prettier-ignore
/* const colorRoll = random("Color roll", [
  weight(1, 0),
  weight(6, 1),
  weight(6, 2),
  weight(6, 3),
  weight(6, 4),
  weight(6, 5),
  weight(6, 6),
  weight(6, 7),
  weight(6, 8),
  weight(6, 9),
  weight(6, 10),
  weight(6, 11),
  weight(6, 12),
  weight(1, 13),
  weight(6, 14),
  weight(6, 16),
  weight(6, 16),
  weight(2, 17),
  weight(6, 18),
]); */

// const palette = colors[colorRoll].colArr;
// const paletteName = colors[colorRoll].name;

window.setup = function () {
  //Math.random = fxrand();
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  setDimensions();
  pixelDensity(pd);

  c = createCanvas(w, h, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);

  bgCol = [
    ...colors[Math.floor(random(0, 3))],
    shades[Math.floor(random(0, 3))],
  ];

  background(bgCol);
};

window.draw = function () {
  translate(-width / 2, -height / 2);
  for (let row = 0; row < h / (r * Math.sqrt(3)) - 2; row++) {
    for (let col = 0; col < w / (HexSize + (row % 2)) - 1; col++) {
      push();
      let YOffset = false ? random(-r, +r) : 0;
      let currX = col * HexSize + 2.5 * r - (row % 2) * r;
      let currY = row * (r * (Math.sqrt(3) / 3)) + YOffset + 2 * HexSide;
      translate(currX, currY);
      // circle(0, 0, 20);
      rotate(90);
      if (random() > 0) {
        drawHex(0, 0, HexSide, currX, currY);
      }
      pop();
    }
  }
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
  Features: "features",
};

console.table(features);
window.$fxhashFeatures = features;

function drawHex(x, y, len, currX, currY) {
  let gs = 0.5 * len;
  let tlc = [x - gs, y - r]; // left top corner
  let tcen = [x, y - r];
  let trc = [x + gs, y - r]; // top right corner
  let two = [0.75 * len, -0.5 * r];
  let rmc = [x + len, y]; // right most corner
  let four = [0.75 * len, 0.5 * r];
  let brc = [x + gs, y + r]; // bottom right corner
  let bcen = [x, y + r];
  let blc = [x - gs, y + r]; // bottom left corner
  let eight = [-0.75 * len, 0.5 * r];
  let lmc = [x - len, y]; // left most corner
  let ten = [-0.75 * len, -0.5 * r];

  let baseCol = shuffleColors ? colors.sort(() => Math.random() - 0.5) : colors;
  let randShade = shades.sort(() => Math.random() - 0.5);
  let mapShade = map(currY, 0, height, 100, 30);
  let shade = (pick) => {
    return true ? randShade[pick] : mapShade;
  };

  noStroke();
  stroke(bgCol);
  strokeWeight(0);
  fill(...baseCol[0], shade(0));
  beginShape();
  vertex(...tlc);
  vertex(...trc);
  vertex(...rmc);
  vertex(x, y);
  endShape(CLOSE);

  fill(...baseCol[1], shade(1));
  beginShape();
  vertex(x, y);
  vertex(...rmc);
  vertex(...brc);
  vertex(...blc);
  endShape(CLOSE);

  fill(...baseCol[2], shade(2));
  beginShape();
  vertex(x, y);
  vertex(...blc);
  vertex(...lmc);
  vertex(...tlc);
  endShape(CLOSE);
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
    w = max(renderSize, floor(min(windowWidth, windowHeight)));
    h = w / aspect;
  } else if (aspect < 1) {
    h = floor(min(windowWidth, windowHeight));
    w = h * aspect;
  }
  windowScale = map(w, 0, referenceSize, 0, 1);
}

window.keyPressed = function () {
  if (key === "s" || key === "S") {
    console.log("SAVE");
    saveCanvas("Iso Boxes" + width * pd + "x" + height * pd, "png");
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
