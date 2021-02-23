"use strict"

// Cuando hago click en "fas" le añado "ver" a "nav"

const fas = document.querySelector(".fas")
const menu = document.querySelector(".nav")

    fas.addEventListener("click",function(){
        menu.classList.toggle("ver")
    })

    // Cuando hago click en "menu" le Quito "ver" a "nav"

    menu.addEventListener("click", function(){
        menu.classList.remove("ver")
    })