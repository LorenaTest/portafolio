// Cambiar tema
const botonTema = document.getElementById("btn-tema");
const cuerpoPagina = document.body;

function alternarTema(){

    cuerpoPagina.classList.toggle("dark-mode");

}

botonTema.addEventListener("click", alternarTema);

// Mensaje boton contacto
const contactButton = document.querySelector(".main-btn")

contactButton.addEventListener("click", function () {

    alert("Gracias por visitar mi portfolio. ¡Podemos hablar sobre QA Automation!")

})

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.07)"
        card.style.backgroundColor = "#d4efdf"

    })

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)"
        card.style.backgroundColor = "white"

    })

})

const buttons = document.querySelectorAll("button")

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.12)"
        btn.style.backgroundColor = "#1abc9c"

    })

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)"
        btn.style.backgroundColor = ""

    })

})

// MENÚ NAVEGACIÓN SCROLL SUAVE

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        })

    })

})

document.querySelectorAll("Div button").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        })

    })

})
