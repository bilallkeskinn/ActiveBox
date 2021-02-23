"use strict";

var counter = 0;
var back = document.querySelector('.back');
var next = document.querySelector('.next');
var slider = document.querySelector('.slider');
var sliderContainer = document.querySelector('.slider-container');
var max = document.querySelectorAll('.slide').length - 1;

function sliderFunc() {
  if (counter < max) {
    counter++;
    slider.style.left = '-' + 1900 * counter + 'px';
  } else {
    counter = 0;
    slider.style.left = '-' + 1900 * counter + 'px';
  }
}

var timer = setInterval(sliderFunc, 3000);
sliderContainer.addEventListener('mouseover', function () {
  clearInterval(timer);
});
sliderContainer.addEventListener('mouseout', function () {
  timer = setInterval(sliderFunc, 3000);
});
next.addEventListener('click', sliderFunc);
back.addEventListener('click', function () {
  if (counter >= 0) {
    counter--;
    slider.style.left = '-' + 1900 * counter + 'px';
  }
});