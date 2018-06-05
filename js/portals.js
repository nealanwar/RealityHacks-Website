//enum for different dimensions
var Dimension = {
  SPACE: 0,
  CYBERPUNK: 1,
  WESTERN: 2
}

//var to track current dimension
var currentDimension = Dimension.SPACE;
var dimensionAssets = ["space", "cyberpunk", "western", "4", "5"];
var dimensionBackgrounds = [
  "background-image: radial-gradient(ellipse at bottom, rgb({}, {}, {}) 0%, rgb({}, {}, {}) 100%);",
  "background-image: radial-gradient(ellipse at bottom, rgb({}, {}, {}) 0%, rgb({}, {}, {}) 100%);",
  "background-image: radial-gradient(180deg, "
  // "background-image: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);",
  // "background-image: radial-gradient(180deg, #00838F, #00E5FF 60%, #FFF);",
  // "background-image: radial-gradient(180deg, #0A89AF, #00AAAF 60%, #FFF);"
];
var currentAssets = document.getElementById("space");
var previousAssets = null;
var rgbStart = [27,39,53];
var rgbStop = [9,10,15];
var dimensionRgbs = [[[27,39,53],[9,10,15]],
[[0,131,143],[0,229,255]]];

var button = document.getElementById("night_toggle");

//fix button colors
document.body.style.setProperty('--primaryColor',"themeColor");

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function change() {
  console.log(document.getElementById("space") + " " + currentDimension);
  previousAssets = currentAssets;
  previousAssets.style.display = "none";
  previousAssets.style.opacity = 0;
  // previousAssets.style.width = "0%";
  // previousAssets.style.height = "0%";
  currentAssets = document.getElementById(dimensionAssets[currentDimension]);
  currentAssets.style.display = "block";
  currentAssets.style.opacity = 1;
  // appear(currentAssets);
  console.log(previousAssets + " " + currentAssets);
  console.log(currentDimension + " " + dimensionRgbs[currentDimension][0]);
  transition(dimensionRgbs[currentDimension][0], dimensionRgbs[currentDimension][1]);

  //header.style = currentBackground;
  // switch (currentDimension) {
  //   case Dimension.SPACE:
  //   header.style = ;
  //   load();
  //   break;
  // }
}

function alternate() {
  currentDimension += 1;
  currentDimension %= 2;
  change();
}

async function appear(assets) {
  for(i = 0; i < 100; i++) {
    assets.style = "width: " + ((i + 1)) + "%;";
    console.log(assets.style + " " + (i + 1));
    await sleep(10);
  }
}

async function transition(newStart, newStop) {
  var oldStart = rgbStart;
  var oldStop = rgbStop;
  var step = 0;
  console.log(oldStart + " " + oldStop + " " + newStart + " AND " + newStop);
  while(step < 1 /*&& (!arrayEquals(rgbStart, newStart) || !arrayEquals(rgbStop, newStop))*/) {
    for(i = 0; i < rgbStart.length; i++) {
      rgbStart[i] = oldStart[i] + Math.floor((newStart[i] - oldStart[i]) * step);
    }
    for(i = 0; i < rgbStop.length; i++) {
      rgbStop[i] = oldStop[i] + Math.floor((newStop[i] - oldStop[i]) * step);
    }
    // for(i = 0; i < rgbStart.length; i++) {
    //   if(rgbStart[i] != newStart[i])
    //     rgbStart[i] = rgbStart[i] > newStart[i]? rgbStart[i] - 1 : rgbStart[i] + 1;
    // }
    // for(i = 0; i < rgbStop.length; i++) {
    //   if(rgbStop[i] != newStop[i])
    //     rgbStop[i] = rgbStop[i] > newStop[i]? rgbStop[i] - 1 : rgbStop[i] + 1;
    // }
    step += 0.01;
    console.log("STEP " + step + ": " + rgbStart + " " + newStart + "," + rgbStop + " " + newStop);
    header.style = dimensionBackgrounds[currentDimension].format(rgbStart[0], rgbStart[1], rgbStart[2], rgbStop[0], rgbStop[1], rgbStop[2]);
    console.log(dimensionBackgrounds[currentDimension].format(rgbStart[0], rgbStart[1], rgbStart[2], rgbStop[0], rgbStop[1], rgbStop[2]));
    await sleep(20);
  }
}

function arrayEquals(a1, a2) {
  console.log(a1.sort().toString() + " " + a2.sort().toString());
  return a1.sort().toString() == a2.sort().toString();
}

button.onclick = alternate;
