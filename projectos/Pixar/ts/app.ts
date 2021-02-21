"use strict"

// Cuando hago click en "fas fab-bar" añado ver a "menu" - version pc //

const fas = document.querySelector(".fas")
const menu = document.querySelector(".menu")
const li = document.querySelector(".li")

fas.addEventListener("click",function() {
    menu.classList.toggle("ver")
})


