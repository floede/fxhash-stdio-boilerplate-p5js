const colors =
  /* Extended Array */
  [
    {
      name: "The greys",

      offset: 3,
      colArr: [
        { hsb: [0, 0, 15] },
        { hsb: [0, 0, 30] },
        { hsb: [0, 0, 45] },
        { hsb: [0, 0, 60] },
        { hsb: [0, 0, 75] },
        { hsb: [0, 0, 90] },
      ],
    },
    {
      name: "Tivoli",
      number: 1,
      offset: 3.5,
      colArr: [
        {
          name: "Red",
          hex: "#ff0000",
          rgb: [255, 0, 0],
          hsb: [0, 100, 100],
        },
        {
          name: "Dark Orange",
          hex: "#ff8700",
          rgb: [255, 135, 0],
          hsb: [32, 100, 100],
        },
        {
          name: "Cyber Yellow",
          hex: "#ffd300",
          rgb: [255, 211, 0],
          hsb: [50, 100, 100],
        },
        {
          name: "Chartreuse Traditional",
          hex: "#deff0a",
          rgb: [222, 255, 10],
          hsb: [68, 96, 100],
        },
        {
          name: "Spring Bud",
          hex: "#a1ff0a",
          rgb: [161, 255, 10],
          hsb: [83, 96, 100],
        },
        {
          name: "Medium Spring Green",
          hex: "#0aff99",
          rgb: [10, 255, 153],
          cmyk: [96, 0, 40, 0],
          hsb: [155, 96, 100],
          hsl: [155, 100, 52],
          lab: [89, -72, 35],
        },
        {
          name: "Electric Blue",
          hex: "#0aefff",
          rgb: [10, 239, 255],
          cmyk: [96, 6, 0, 0],
          hsb: [184, 96, 100],
          hsl: [184, 100, 52],
          lab: [87, -41, -21],
        },
        {
          name: "Azure",
          hex: "#147df5",
          rgb: [20, 125, 245],
          cmyk: [92, 49, 0, 4],
          hsb: [212, 92, 96],
          hsl: [212, 92, 52],
          lab: [53, 17, -68],
        },
        {
          name: "Han Purple",
          hex: "#580aff",
          rgb: [88, 10, 255],
          cmyk: [65, 96, 0, 0],
          hsb: [259, 96, 100],
          hsl: [259, 100, 52],
          lab: [37, 80, -100],
        },
        {
          name: "Electric Purple",
          hex: "#be0aff",
          rgb: [190, 10, 255],
          cmyk: [25, 96, 0, 0],
          hsb: [284, 96, 100],
          hsl: [284, 100, 52],
          lab: [50, 88, -78],
        },
      ],
    },
    {
      name: "Subdued",
      number: 2,
      offset: 2,
      colArr: [
        {
          name: "Middle Green",
          hex: "#528865",
          rgb: [82, 136, 101],
          cmyk: [40, 0, 26, 47],
          hsb: [141, 40, 53],
          hsl: [141, 25, 43],
          lab: [52, -26, 13],
        },
        {
          name: "Liberty",
          hex: "#4A5199",
          rgb: [74, 81, 153],
          cmyk: [52, 47, 0, 40],
          hsb: [235, 52, 60],
          hsl: [235, 35, 45],
          lab: [37, 18, -40],
        },
        {
          name: "Camel",
          hex: "#BB9166",
          rgb: [187, 145, 102],
          cmyk: [0, 22, 45, 27],
          hsb: [30, 45, 73],
          hsl: [30, 38, 57],
          lab: [63, 10, 29],
        },
        {
          name: "Lemon Curry",
          hex: "#C39D22",
          rgb: [195, 157, 34],
          cmyk: [0, 19, 83, 24],
          hsb: [46, 83, 76],
          hsl: [46, 70, 45],
          lab: [66, 3, 64],
        },
        {
          name: "Wild Orchid",
          hex: "#C47C9E",
          rgb: [196, 124, 158],
          cmyk: [0, 37, 19, 23],
          hsb: [332, 37, 77],
          hsl: [332, 38, 63],
          lab: [60, 33, -6],
        },
        {
          name: "Ruby Red",
          hex: "#A01226",
          rgb: [160, 18, 38],
          cmyk: [0, 89, 76, 37],
          hsb: [352, 89, 63],
          hsl: [352, 80, 35],
          lab: [34, 55, 29],
        },
        {
          name: "Iceberg",
          hex: "#72ACD3",
          rgb: [114, 172, 211],
          cmyk: [46, 18, 0, 17],
          hsb: [204, 46, 83],
          hsl: [204, 52, 64],
          lab: [68, -8, -26],
        },
      ],
    },
    {
      name: "Sweden",
      number: 3,
      offset: 2,
      colArr: [
        {
          name: "Light Cornflower Blue",
          hex: "#8ecae6",
          rgb: [142, 202, 230],
          cmyk: [38, 12, 0, 10],
          hsb: [199, 38, 90],
          hsl: [199, 64, 73],
          lab: [78, -12, -20],
        },
        {
          name: "Blue Green",
          hex: "#219ebc",
          rgb: [33, 158, 188],
          cmyk: [82, 16, 0, 26],
          hsb: [192, 82, 74],
          hsl: [192, 70, 43],
          lab: [60, -22, -25],
        },
        {
          name: "Prussian Blue",
          hex: "#023047",
          rgb: [2, 48, 71],
          cmyk: [97, 32, 0, 72],
          hsb: [200, 97, 28],
          hsl: [200, 95, 14],
          lab: [18, -5, -18],
        },
        {
          name: "Selective Yellow",
          hex: "#ffb703",
          rgb: [255, 183, 3],
          cmyk: [0, 28, 99, 0],
          hsb: [43, 99, 100],
          hsl: [43, 100, 51],
          lab: [79, 15, 81],
        },
        {
          name: "Tangerine",
          hex: "#fb8500",
          rgb: [251, 133, 0],
          cmyk: [0, 47, 100, 2],
          hsb: [32, 100, 98],
          hsl: [32, 100, 49],
          lab: [67, 39, 74],
        },
      ],
    },
    {
      name: "Blues",
      number: 4,
      offset: 2,
      colArr: [
        {
          name: "Midnight Blue",
          hex: "#03045e",
          rgb: [3, 4, 94],
          cmyk: [97, 96, 0, 63],
          hsb: [239, 97, 37],
          hsl: [239, 94, 19],
          lab: [8, 36, -50],
        },
        {
          name: "Dark Cornflower Blue",
          hex: "#023e8a",
          rgb: [2, 62, 138],
          cmyk: [99, 55, 0, 46],
          hsb: [214, 99, 54],
          hsl: [214, 97, 27],
          lab: [28, 15, -47],
        },
        {
          name: "Star Command Blue",
          hex: "#0077b6",
          rgb: [0, 119, 182],
          cmyk: [100, 35, 0, 29],
          hsb: [201, 100, 71],
          hsl: [201, 100, 36],
          lab: [48, -4, -41],
        },
        {
          name: "Blue Green",
          hex: "#0096c7",
          rgb: [0, 150, 199],
          cmyk: [100, 25, 0, 22],
          hsb: [195, 100, 78],
          hsl: [195, 100, 39],
          lab: [58, -16, -35],
        },
        {
          name: "Pacific Blue",
          hex: "#00b4d8",
          rgb: [0, 180, 216],
          cmyk: [100, 17, 0, 15],
          hsb: [190, 100, 85],
          hsl: [190, 100, 42],
          lab: [68, -25, -29],
        },
        {
          name: "Sky Blue Crayola",
          hex: "#48cae4",
          rgb: [72, 202, 228],
          cmyk: [68, 11, 0, 11],
          hsb: [190, 68, 89],
          hsl: [190, 74, 59],
          lab: [76, -27, -23],
        },
        {
          name: "Middle Blue",
          hex: "#90e0ef",
          rgb: [144, 224, 239],
          cmyk: [40, 6, 0, 6],
          hsb: [189, 40, 94],
          hsl: [189, 75, 75],
          lab: [85, -21, -15],
        },
        {
          name: "Blizzard Blue",
          hex: "#ade8f4",
          rgb: [173, 232, 244],
          cmyk: [29, 5, 0, 4],
          hsb: [190, 29, 96],
          hsl: [190, 76, 82],
          lab: [89, -16, -12],
        },
        {
          name: "Light Cyan",
          hex: "#caf0f8",
          rgb: [202, 240, 248],
          cmyk: [19, 3, 0, 3],
          hsb: [190, 19, 97],
          hsl: [190, 77, 88],
          lab: [92, -11, -8],
        },
      ],
    },
    {
      name: "Neon purple",
      number: 5,
      offset: 2,
      colArr: [
        {
          name: "Flickr Pink",
          hex: "#f72585",
          rgb: [247, 37, 133],
          cmyk: [0, 85, 46, 3],
          hsb: [333, 85, 97],
          hsl: [333, 93, 56],
          lab: [55, 79, 1],
        },
        {
          name: "Byzantine",
          hex: "#b5179e",
          rgb: [181, 23, 158],
          cmyk: [0, 87, 13, 29],
          hsb: [309, 87, 71],
          hsl: [309, 77, 40],
          lab: [43, 70, -34],
        },
        {
          name: "Purple",
          hex: "#7209b7",
          rgb: [114, 9, 183],
          cmyk: [38, 95, 0, 28],
          hsb: [276, 95, 72],
          hsl: [276, 91, 38],
          lab: [32, 66, -66],
        },
        {
          name: "Purple",
          hex: "#560bad",
          rgb: [86, 11, 173],
          cmyk: [50, 94, 0, 32],
          hsb: [268, 94, 68],
          hsl: [268, 88, 36],
          lab: [27, 60, -68],
        },
        {
          name: "Trypan Blue",
          hex: "#480ca8",
          rgb: [72, 12, 168],
          cmyk: [57, 93, 0, 34],
          hsb: [263, 93, 66],
          hsl: [263, 87, 35],
          lab: [25, 58, -69],
        },
        {
          name: "Trypan Blue",
          hex: "#3a0ca3",
          rgb: [58, 12, 163],
          cmyk: [64, 93, 0, 36],
          hsb: [258, 93, 64],
          hsl: [258, 86, 34],
          lab: [23, 55, -70],
        },
        {
          name: "Persian Blue",
          hex: "#3f37c9",
          rgb: [63, 55, 201],
          cmyk: [69, 73, 0, 21],
          hsb: [243, 73, 79],
          hsl: [243, 57, 50],
          lab: [34, 48, -74],
        },
        {
          name: "Ultramarine Blue",
          hex: "#4361ee",
          rgb: [67, 97, 238],
          cmyk: [72, 59, 0, 7],
          hsb: [229, 72, 93],
          hsl: [229, 83, 60],
          lab: [47, 36, -74],
        },
        {
          name: "Dodger Blue",
          hex: "#4895ef",
          rgb: [72, 149, 239],
          cmyk: [70, 38, 0, 6],
          hsb: [212, 70, 94],
          hsl: [212, 84, 61],
          lab: [61, 5, -52],
        },
        {
          name: "Vivid Sky Blue",
          hex: "#4cc9f0",
          rgb: [76, 201, 240],
          cmyk: [68, 16, 0, 6],
          hsb: [194, 68, 94],
          hsl: [194, 85, 62],
          lab: [76, -22, -29],
        },
      ],
    },
    {
      name: "Pink flowers",
      number: 6,
      offset: 2,
      colArr: [
        {
          name: "Maximum Purple",
          hex: "#7e2e84",
          rgb: [126, 46, 132],
          cmyk: [5, 65, 0, 48],
          hsb: [296, 65, 52],
          hsl: [296, 48, 35],
          lab: [34, 47, -32],
        },
        {
          name: "Magenta Pantone",
          hex: "#d14081",
          rgb: [209, 64, 129],
          cmyk: [0, 69, 38, 18],
          hsb: [333, 69, 82],
          hsl: [333, 61, 54],
          lab: [50, 62, -4],
        },
        {
          name: "Ultra Red",
          hex: "#ef798a",
          rgb: [239, 121, 138],
          cmyk: [0, 49, 42, 6],
          hsb: [351, 49, 94],
          hsl: [351, 79, 71],
          lab: [65, 47, 12],
        },
        {
          name: "Cosmic Latte",
          hex: "#f9f5e3",
          rgb: [249, 245, 227],
          cmyk: [0, 2, 9, 2],
          hsb: [49, 9, 98],
          hsl: [49, 65, 93],
          lab: [96, -2, 9],
        },
        {
          name: "Tea Green",
          hex: "#ccf5ac",
          rgb: [204, 245, 172],
          cmyk: [17, 0, 30, 4],
          hsb: [94, 30, 96],
          hsl: [94, 78, 82],
          lab: [92, -26, 31],
        },
      ],
    },
    {
      name: "In flames",
      number: 7,
      offset: 2,
      colArr: [
        {
          name: "Citrine",
          hex: "#e0ce00",
          rgb: [224, 206, 0],
          cmyk: [0, 8, 100, 12],
          hsb: [55, 100, 88],
          hsl: [55, 100, 44],
          lab: [82, -11, 82],
        },
        {
          name: "Orange Yellow",
          hex: "#e8b10c",
          rgb: [232, 177, 12],
          cmyk: [0, 24, 95, 9],
          hsb: [45, 95, 91],
          hsl: [45, 90, 48],
          lab: [75, 8, 77],
        },
        {
          name: "Ochre",
          hex: "#d07a00",
          rgb: [208, 122, 0],
          cmyk: [0, 41, 100, 18],
          hsb: [35, 100, 82],
          hsl: [35, 100, 41],
          lab: [59, 27, 66],
        },
        {
          name: "Persimmon",
          hex: "#e9570c",
          rgb: [233, 87, 12],
          cmyk: [0, 63, 95, 9],
          hsb: [20, 95, 91],
          hsl: [20, 90, 48],
          lab: [56, 54, 64],
        },
        {
          name: "Vermilion",
          hex: "#de2310",
          rgb: [222, 35, 16],
          cmyk: [0, 84, 93, 13],
          hsb: [6, 93, 87],
          hsl: [6, 87, 47],
          lab: [48, 68, 57],
        },
      ],
    },
    {
      name: "Orange & Purple",
      number: 8,
      offset: 3,
      colArr: [
        {
          name: "Medium Blue",
          hex: "#4402d6",
          rgb: [68, 2, 214],
          cmyk: [68, 99, 0, 16],
          hsb: [259, 99, 84],
          hsl: [259, 98, 42],
          lab: [30, 70, -89],
        },
        {
          name: "Flame",
          hex: "#d6522c",
          rgb: [214, 82, 44],
          cmyk: [0, 62, 79, 16],
          hsb: [13, 79, 84],
          hsl: [13, 67, 51],
          lab: [52, 50, 48],
        },
        {
          name: "Caribbean Green",
          hex: "#0ad699",
          rgb: [10, 214, 153],
          cmyk: [95, 0, 29, 16],
          hsb: [162, 95, 84],
          hsl: [162, 91, 44],
          lab: [76, -58, 18],
        },
        {
          name: "Citrine",
          hex: "#d6c901",
          rgb: [214, 201, 1],
          cmyk: [0, 6, 100, 16],
          hsb: [56, 100, 84],
          hsl: [56, 99, 42],
          lab: [80, -12, 80],
        },
      ],
    },
    {
      name: "Violets",
      number: 9,
      offset: 2,
      colArr: [
        {
          name: "Russian Violet",
          hex: "#370d4f",
          rgb: [55, 13, 79],
          cmyk: [30, 84, 0, 69],
          hsb: [278, 84, 31],
          hsl: [278, 72, 18],
          lab: [14, 33, -31],
        },
        {
          name: "Lavender Floral",
          hex: "#b67ed5",
          rgb: [182, 126, 213],
          cmyk: [15, 41, 0, 16],
          hsb: [279, 41, 84],
          hsl: [279, 51, 66],
          lab: [61, 37, -36],
        },
        {
          name: "Dark Violet",
          hex: "#9323cf",
          rgb: [147, 35, 207],
          cmyk: [29, 83, 0, 19],
          hsb: [279, 83, 81],
          hsl: [279, 71, 47],
          lab: [41, 70, -66],
        },
        {
          name: "Russian Violet",
          hex: "#412152",
          rgb: [65, 33, 82],
          cmyk: [21, 60, 0, 68],
          hsb: [279, 60, 32],
          hsl: [279, 43, 23],
          lab: [19, 25, -24],
        },
        {
          name: "Purple",
          hex: "#701b9d",
          rgb: [112, 27, 157],
          cmyk: [29, 83, 0, 38],
          hsb: [279, 83, 62],
          hsl: [279, 71, 36],
          lab: [31, 56, -53],
        },
      ],
    },
    {
      name: "Cyanide rose",
      number: 10,
      offset: 2,
      colArr: [
        {
          name: "Dogwood Rose",
          hex: "#CB1B63",
          rgb: [203, 27, 99],
          cmyk: [0, 87, 51, 20],
          hsb: [335, 87, 80],
          hsl: [335, 77, 45],
          lab: [45, 68, 6],
        },
        {
          name: "Dark Cyan",
          hex: "#0D8A8C",
          rgb: [13, 138, 140],
          cmyk: [91, 1, 0, 45],
          hsb: [181, 91, 55],
          hsl: [181, 83, 30],
          lab: [52, -29, -10],
        },
        {
          name: "Baby Pink",
          hex: "#E0C2C0",
          rgb: [224, 194, 192],
          cmyk: [0, 13, 14, 12],
          hsb: [4, 14, 88],
          hsl: [4, 34, 82],
          lab: [81, 10, 5],
        },
        {
          name: "Dark Purple",
          hex: "#311D42",
          rgb: [49, 29, 66],
          cmyk: [26, 56, 0, 74],
          hsb: [272, 56, 26],
          hsl: [272, 39, 19],
          lab: [15, 18, -20],
        },
      ],
    },
    {
      name: "Golden age",
      number: 11,
      offset: 2,
      colArr: [
        {
          name: "Bronze",
          hex: "#D28140",
          rgb: [210, 129, 64],
          cmyk: [0, 39, 70, 18],
          hsb: [27, 70, 82],
          hsl: [27, 62, 54],
          lab: [61, 26, 47],
        },
        {
          name: "Caput Mortuum",
          hex: "#4F2215",
          rgb: [79, 34, 21],
          cmyk: [0, 57, 73, 69],
          hsb: [13, 73, 31],
          hsl: [13, 58, 20],
          lab: [19, 20, 19],
        },
        {
          name: "Cinnabar",
          hex: "#E3492D",
          rgb: [227, 73, 45],
          cmyk: [0, 68, 80, 11],
          hsb: [9, 80, 89],
          hsl: [9, 76, 53],
          lab: [53, 58, 49],
        },
        {
          name: "Bone",
          hex: "#E5DDCA",
          rgb: [229, 221, 202],
          cmyk: [0, 3, 12, 10],
          hsb: [42, 12, 90],
          hsl: [42, 34, 85],
          lab: [88, 0, 10],
        },
        {
          name: "Space Cadet",
          hex: "#292642",
          rgb: [41, 38, 66],
          cmyk: [38, 42, 0, 74],
          hsb: [246, 42, 26],
          hsl: [246, 27, 20],
          lab: [17, 9, -17],
        },
        {
          name: "Light Steel Blue",
          hex: "#AAC3E1",
          rgb: [170, 195, 225],
          cmyk: [24, 13, 0, 12],
          hsb: [213, 24, 88],
          hsl: [213, 48, 77],
          lab: [78, -2, -18],
        },
        {
          name: "Earth Yellow",
          hex: "#D9AD6C",
          rgb: [217, 173, 108],
          cmyk: [0, 20, 50, 15],
          hsb: [36, 50, 85],
          hsl: [36, 59, 64],
          lab: [73, 8, 39],
        },
        {
          name: "Copper Crayola",
          hex: "#E48A68",
          rgb: [228, 138, 104],
          cmyk: [0, 39, 54, 11],
          hsb: [16, 54, 89],
          hsl: [16, 70, 65],
          lab: [66, 31, 33],
        },
      ],
    },
    {
      name: "Coffee ad",
      number: 12,
      offset: 2,
      colArr: [
        {
          name: "Chinese Red",
          hex: "#A4341C",
          rgb: [164, 52, 28],
          cmyk: [0, 68, 83, 36],
          hsb: [11, 83, 64],
          hsl: [11, 71, 38],
          lab: [39, 45, 39],
        },
        {
          hsb: [0, 0, 94],
        },
        {
          hsb: [0, 0, 8],
        },
      ],
    },
    {
      name: "Mondrian",
      number: 13,
      offset: 2,
      colArr: [
        {
          name: "International Orange Engineering",
          hex: "#C50806",
          rgb: [197, 8, 6],
          cmyk: [0, 96, 97, 23],
          hsb: [1, 97, 77],
          hsl: [1, 94, 40],
          lab: [41, 65, 53],
        },
        {
          name: "Navy Blue",
          hex: "#0F026B",
          rgb: [15, 2, 107],
          cmyk: [86, 98, 0, 58],
          hsb: [247, 98, 42],
          hsl: [247, 96, 21],
          lab: [11, 41, -55],
        },
        {
          name: "Orange Yellow",
          hex: "#EFBB17",
          rgb: [239, 187, 23],
          cmyk: [0, 22, 90, 6],
          hsb: [46, 90, 94],
          hsl: [46, 87, 51],
          lab: [78, 6, 78],
        },
        {
          name: "White",
          hex: "#FFFFFF",
          rgb: [255, 255, 255],
          cmyk: [0, 0, 0, 0],
          hsb: [0, 0, 100],
          hsl: [0, 0, 100],
          lab: [100, 0, 0],
        },
        {
          name: "Black",
          hex: "#000000",
          rgb: [0, 0, 0],
          cmyk: [0, 0, 0, 100],
          hsb: [0, 0, 0],
          hsl: [0, 0, 0],
          lab: [0, 0, 0],
        },
      ],
    },
    {
      name: "Diner",
      number: 14,
      offset: 2,
      colArr: [
        {
          name: "Flame",
          hex: "#E5532C",
          rgb: [229, 83, 44],
          cmyk: [0, 64, 81, 10],
          hsb: [13, 81, 90],
          hsl: [13, 78, 54],
          lab: [55, 55, 51],
        },
        {
          name: "Liver",
          hex: "#6A4F44",
          rgb: [106, 79, 68],
          cmyk: [0, 25, 36, 58],
          hsb: [17, 36, 42],
          hsl: [17, 22, 34],
          lab: [36, 10, 11],
        },
        {
          name: "Olive Green",
          hex: "#A8AB5C",
          rgb: [168, 171, 92],
          cmyk: [2, 0, 46, 33],
          hsb: [62, 46, 67],
          hsl: [62, 32, 52],
          lab: [68, -13, 40],
        },
        {
          name: "Cyan Process",
          hex: "#46BAED",
          rgb: [70, 186, 237],
          cmyk: [70, 22, 0, 7],
          hsb: [198, 70, 93],
          hsl: [198, 82, 60],
          lab: [71, -16, -35],
        },
        {
          name: "Fiery Rose",
          hex: "#FF3F6E",
          rgb: [255, 63, 110],
          cmyk: [0, 75, 57, 0],
          hsb: [345, 75, 100],
          hsl: [345, 100, 62],
          lab: [58, 73, 19],
        },
        {
          name: "Mustard",
          hex: "#F9D94D",
          rgb: [249, 217, 77],
          cmyk: [0, 13, 69, 2],
          hsb: [49, 69, 98],
          hsl: [49, 93, 64],
          lab: [87, -4, 70],
        },
        {
          name: "Black",
          hex: "#000000",
          rgb: [0, 0, 0],
          cmyk: [0, 0, 0, 100],
          hsb: [0, 0, 0],
          hsl: [0, 0, 0],
          lab: [0, 0, 0],
        },
        {
          name: "Princeton Orange",
          hex: "#EA7C1E",
          rgb: [234, 124, 30],
          cmyk: [0, 47, 87, 8],
          hsb: [28, 87, 92],
          hsl: [28, 83, 52],
          lab: [63, 37, 64],
        },
        {
          name: "Persian Green",
          hex: "#259E95",
          rgb: [37, 158, 149],
          cmyk: [77, 0, 6, 38],
          hsb: [176, 77, 62],
          hsl: [176, 62, 38],
          lab: [59, -34, -5],
        },
        {
          name: "Royal Purple",
          hex: "#6B51AF",
          rgb: [107, 81, 175],
          cmyk: [39, 54, 0, 31],
          hsb: [257, 54, 69],
          hsl: [257, 37, 50],
          lab: [41, 33, -47],
        },
      ],
    },
    {
      name: "In flames ",
      number: 15,
      offset: 2,
      colArr: [
        {
          name: "Cultured",
          hex: "#ededed",
          rgb: [237, 237, 237],
          cmyk: [0, 0, 0, 7],
          hsb: [0, 0, 93],
          hsl: [0, 0, 93],
          lab: [94, 0, 0],
        },
        {
          name: "Middle Blue Green",
          hex: "#89ccca",
          rgb: [137, 204, 202],
          cmyk: [33, 0, 1, 20],
          hsb: [178, 33, 80],
          hsl: [178, 40, 67],
          lab: [78, -21, -6],
        },
        {
          name: "Titanium Yellow",
          hex: "#ece203",
          rgb: [236, 226, 3],
          cmyk: [0, 4, 99, 7],
          hsb: [57, 99, 93],
          hsl: [57, 97, 47],
          lab: [88, -15, 87],
        },
        {
          name: "Carolina Blue",
          hex: "#2599d6",
          rgb: [37, 153, 214],
          cmyk: [83, 29, 0, 16],
          hsb: [201, 83, 84],
          hsl: [201, 71, 49],
          lab: [60, -10, -40],
        },
        {
          name: "Dark Salmon",
          hex: "#f3997b",
          rgb: [243, 153, 123],
          cmyk: [0, 37, 49, 5],
          hsb: [15, 49, 95],
          hsl: [15, 83, 72],
          lab: [72, 31, 30],
        },
        {
          name: "Princeton Orange",
          hex: "#ee7602",
          rgb: [238, 118, 2],
          cmyk: [0, 50, 99, 7],
          hsb: [29, 99, 93],
          hsl: [29, 98, 47],
          lab: [63, 41, 70],
        },
        {
          name: "Cardinal",
          hex: "#be1d39",
          rgb: [190, 29, 57],
          cmyk: [0, 85, 70, 25],
          hsb: [350, 85, 75],
          hsl: [350, 74, 43],
          lab: [41, 61, 27],
        },
        {
          name: "Palatinate Purple",
          hex: "#652b59",
          rgb: [101, 43, 89],
          cmyk: [0, 57, 12, 60],
          hsb: [312, 57, 40],
          hsl: [312, 40, 28],
          lab: [27, 33, -16],
        },
        {
          name: "Dark Olive Green",
          hex: "#5a7034",
          rgb: [90, 112, 52],
          cmyk: [20, 0, 54, 56],
          hsb: [82, 54, 44],
          hsl: [82, 37, 32],
          lab: [44, -19, 30],
        },
        {
          name: "Eerie Black",
          hex: "#1d1d1b",
          rgb: [29, 29, 27],
          cmyk: [0, 0, 7, 89],
          hsb: [60, 7, 11],
          hsl: [60, 4, 11],
          lab: [11, 0, 1],
        },
      ],
    },
    {
      name: "Expanded signature",
      number: 16,
      offset: 2,
      colArr: [
        {
          name: "Baby Blue",
          hex: "#83d0f5",
          rgb: [131, 208, 245],
          cmyk: [47, 15, 0, 4],
          hsb: [199, 47, 96],
          hsl: [199, 85, 74],
          lab: [80, -14, -26],
        },
        {
          name: "Indigo Dye",
          hex: "#154a68",
          rgb: [21, 74, 104],
          cmyk: [80, 29, 0, 59],
          hsb: [202, 80, 41],
          hsl: [202, 66, 25],
          lab: [30, -6, -22],
        },
        {
          name: "Yale Blue",
          hex: "#01499a",
          rgb: [1, 73, 154],
          cmyk: [99, 53, 0, 40],
          hsb: [212, 99, 60],
          hsl: [212, 99, 30],
          lab: [32, 14, -49],
        },
        {
          name: "Silver",
          hex: "#c6c6c6",
          rgb: [198, 198, 198],
          cmyk: [0, 0, 0, 22],
          hsb: [0, 0, 78],
          hsl: [0, 0, 78],
          lab: [80, 0, 0],
        },
        {
          name: "White",
          hex: "#ffffff",
          rgb: [255, 255, 255],
          cmyk: [0, 0, 0, 0],
          hsb: [0, 0, 100],
          hsl: [0, 0, 100],
          lab: [100, 0, 0],
        },
        {
          name: "Eerie Black",
          hex: "#1d1d1b",
          rgb: [29, 29, 27],
          cmyk: [0, 0, 7, 89],
          hsb: [60, 7, 11],
          hsl: [60, 4, 11],
          lab: [11, 0, 1],
        },
        {
          name: "Medium Candy Apple Red",
          hex: "#e40234",
          rgb: [228, 2, 52],
          cmyk: [0, 99, 77, 11],
          hsb: [347, 99, 89],
          hsl: [347, 98, 45],
          lab: [48, 74, 40],
        },
        {
          name: "Kobi",
          hex: "#f29fc5",
          rgb: [242, 159, 197],
          cmyk: [0, 34, 19, 5],
          hsb: [333, 34, 95],
          hsl: [333, 76, 79],
          lab: [75, 36, -7],
        },
        {
          name: "Carnelian",
          hex: "#bd1d1d",
          rgb: [189, 29, 29],
          cmyk: [0, 85, 85, 26],
          hsb: [0, 85, 74],
          hsl: [0, 73, 43],
          lab: [41, 60, 43],
        },
      ],
    },
    {
      name: "Signature",
      number: 17,
      offset: 2,
      colArr: [
        {
          name: "Yale Blue",
          hex: "#01499a",
          rgb: [1, 73, 154],
          cmyk: [99, 53, 0, 40],
          hsb: [212, 99, 60],
          hsl: [212, 99, 30],
          lab: [32, 14, -49],
        },
        {
          name: "White",
          hex: "#ffffff",
          rgb: [255, 255, 255],
          cmyk: [0, 0, 0, 0],
          hsb: [0, 0, 100],
          hsl: [0, 0, 100],
          lab: [100, 0, 0],
        },
        {
          name: "Medium Candy Apple Red",
          hex: "#e40234",
          rgb: [228, 2, 52],
          cmyk: [0, 99, 77, 11],
          hsb: [347, 99, 89],
          hsl: [347, 98, 45],
          lab: [48, 74, 40],
        },
      ],
    },
    {
      name: "In flames ",
      offset: 2,
      number: 18,
      colArr: [
        {
          name: "Barn Red",
          hex: "#741409",
          rgb: [116, 20, 9],
          cmyk: [0, 83, 92, 55],
          hsb: [6, 92, 45],
          hsl: [6, 86, 25],
          lab: [24, 40, 32],
        },
        {
          name: "Honey Yellow",
          hex: "#f8aa02",
          rgb: [248, 170, 2],
          cmyk: [0, 31, 99, 3],
          hsb: [41, 99, 97],
          hsl: [41, 98, 49],
          lab: [75, 18, 79],
        },
        {
          name: "Middle Blue Green",
          hex: "#89cccc",
          rgb: [137, 204, 204],
          cmyk: [33, 0, 0, 20],
          hsb: [180, 33, 80],
          hsl: [180, 40, 67],
          lab: [78, -21, -7],
        },
        {
          name: "Silver Chalice",
          hex: "#b2b2b2",
          rgb: [178, 178, 178],
          cmyk: [0, 0, 0, 30],
          hsb: [0, 0, 70],
          hsl: [0, 0, 70],
          lab: [73, 0, 0],
        },
        {
          name: "Phthalo Green",
          hex: "#11301e",
          rgb: [17, 48, 30],
          cmyk: [65, 0, 37, 81],
          hsb: [145, 65, 19],
          hsl: [145, 48, 13],
          lab: [17, -17, 8],
        },
        {
          name: "Mardi Gras",
          hex: "#951b81",
          rgb: [149, 27, 129],
          cmyk: [0, 82, 13, 42],
          hsb: [310, 82, 58],
          hsl: [310, 69, 35],
          lab: [36, 58, -28],
        },
      ],
    },
  ];
