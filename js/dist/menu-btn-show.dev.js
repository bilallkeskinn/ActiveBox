"use strict";

var navShow = function navShow() {
  var burger = document.querySelector('#kontrol');
  var nav = document.querySelector('.nav-links');
  burger.addEventListener('click', function () {
    navClassList.toggle('#kontrol');
  });
};

navShow();