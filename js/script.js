var elForm = document.querySelector(".header-form");
var elName = elForm.querySelector(".name-form");
var elBall = elForm.querySelector(".ball-form");

var elResultConvert = document.querySelector(".result-convert");

var EMPTY = "";
var MINUS_BALL = 0;
var MIN_BALL = 40;
var MIDDLE_BALL = 70;
var MAX_BALL = 100;

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (elBall.value <= EMPTY) {
       elResultConvert.textContent = "Iltimos balingizni kiriting"
    } else if (elBall.value < MINUS_BALL) {
       elResultConvert.textContent = "Iltimos manfiy son kiritmang";
    } else if (elBall.value < MIN_BALL) {
        elResultConvert.textContent = "Kechirasz siz imtixondan o'ta olmadingiz";
    } else if (elBall.value < MIDDLE_BALL) {
       elResultConvert.textContent = "Tabriklaymiz siz super kontraktga kirdingiz";
    } else if (elBall.value < MAX_BALL) {
        elResultConvert.textContent = "Tabrilaymiz siz kontraktga kirdingiz";
    } else if (elBall.value >= MAX_BALL) {
        elResultConvert.textContent = "Tabrilaymiz siz grantga kirdingiz";
    }
});