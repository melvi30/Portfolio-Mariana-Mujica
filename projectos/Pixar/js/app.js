"use strict";
// Cuando hago click en "fas fab-bar" añado ver a "menu" - version pc //
var fas = document.querySelector(".fas");
var menu = document.querySelector(".menu");
var li = document.querySelector(".li");
fas.addEventListener("click", function () {
    menu.classList.toggle("ver");
});
