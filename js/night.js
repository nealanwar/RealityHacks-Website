"use strict";

var button = document.getElementById("night_toggle");
var logo = document.getElementById("logodog");

var stars = document.getElementById("stars");
var stars2 = document.getElementById("stars2");
var stars3 = document.getElementById("stars3");

var spore = document.getElementById("loading");

var day = true;
document.body.style.setProperty('--primaryColor',"themeColor");

spore.style.zIndex="-1"

// function onclick() {
stars.style.display = stars.style.display == "none" ? "block" : "none";
stars2.style.display = stars2.style.display == "none" ? "block" : "none";
stars3.style.display = stars3.style.display == "none" ? "block" : "none";
logo.src = day ? "./img/ar_outline.png" : "./img/ar_mint.png";
console.log(header.style.background);
header.style = day ? "background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);" : "background: linear-gradient(180deg, #00838F, #00E5FF 60%, #FFF);";
var themeColor = day ? "#00BCD4" : "#551A8B";
console.log(themeColor);
document.body.style.setProperty('--primaryColor',"themeColor");
// day = !day;
// };

button.onclick = onclick;
