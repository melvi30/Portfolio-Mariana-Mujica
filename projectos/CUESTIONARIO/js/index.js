'use strict';
var range = document.querySelector("#range");
var valoracionbtn = document.querySelector("#valoracionbtn");
var mostarcuenta = document.querySelector("#cuentabtn");
var cuenta = document.querySelector("#cuenta");
var dia = document.querySelector("#diabtn");
var fecha1 = document.querySelector("#fecha");
valoracionbtn.addEventListener("click", function () {
    alert("Has valorado con " + range.value + " puntos");
});
mostarcuenta.addEventListener("click", function () {
    alert("le informamos que su numero de cuenta bancaria es: " + cuenta.value);
});
dia.addEventListener("click", function () {
    alert("este es la fecha de envio " + fecha1.value + " ");
});
