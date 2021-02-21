'use strict'

const range = (document.querySelector("#range") as HTMLFormElement)
const valoracionbtn = (document.querySelector("#valoracionbtn") as HTMLFormElement)
const mostarcuenta = (document.querySelector("#cuentabtn") as HTMLFormElement)
const cuenta = (document.querySelector("#cuenta") as HTMLFormElement)
const dia = (document.querySelector("#diabtn") as HTMLFormElement)
const fecha1 = (document.querySelector("#fecha") as HTMLFormElement)

    valoracionbtn.addEventListener("click",()=>{
        alert(`Has valorado con ${range.value} puntos`)
    })

    mostarcuenta.addEventListener("click",()=>{
            alert(`le informamos que su numero de cuenta bancaria es: ${cuenta.value}`)
    })

    dia.addEventListener("click",()=>{
        alert(`este es la fecha de envio ${fecha1.value} `)
    })
