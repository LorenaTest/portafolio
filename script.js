
const botonProyectos = document.getElementById("ver-proyectos");
function mostrarProyectos() {
    const proyectosSection = document.getElementById("proyectos");
    proyectosSection.scrollIntoView({ behavior: "smooth" });
}
botonProyectos.addEventListener("click", mostrarProyectos);
 
 
// Cambiar tema
const botonTema = document.getElementById("btn-tema");
const cuerpoPagina = document.body;
function alternarTema() {
    if(cuerpoPagina.style.backgroundColor === "black") {
        cuerpoPagina.style.backgroundColor = "white";
        cuerpoPagina.style.color = "black"; //cambio del texto a negro
    }else{
        //si NO ES negro, lo cambiamos a tema negro
        cuerpoPagina.style.backgroundColor = "black";
        cuerpoPagina.style.color = "white"; //cambio del texto a blanco
    }
   
}
botonTema.addEventListener("click", alternarTema);
 
// ejemplo: alerta al hacer clic de un proyecto
 
const todasLasTarjetas = document.querySelectorAll(".card");
 
todasLasTarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function() {
        const nombreProyecto = tarjeta.querySelector("h3").innerText;
        alert("Haz hecho clic en el proyecto: " + nombreProyecto);
    });
});
 

// ejemplo: alerta al hacer clic de un proyecto
 
const todasPestanas = document.querySelectorAll(".tabs");
 
todasPestanas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function() {
        const nombreProyecto = tarjeta.querySelector("button").innerText;
        alert("Haz hecho clic en el proyecto: " + nombreProyecto);
    });
});
 

///variables: let (que puede cambiar)  - const (es fijo que no cambia)
const nombreDev= "Pedro Roda"; // fijo  no cambia
let proyectosCompletados = 4; // puede aumentar o disminuir  o variar en el tiempo  dependiendo del scope
 
// tipos primitivos
let esInstructor = true; // boolean
let edad = 34;  //number
let saludo = "Hola soy Pedro Roda" //string
 
// tipos de datos complejos
let habilidades = ["JavaScript", "HTML", "CSS"];
let experiencia = {
    años: 10,
    empresas: ["Google", "Facebook", "Amazon"]
};
 
const proyectoNuevo = {
    nombre: "Portafolio Personal",
    descripcion: "Un sitio web para mostrar mis proyectos y habilidades.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    completado: false
};

/// modularidad
// controlador de interfaz
 
const UI = {
    cuerpo: document.body,
 
    alternarColor: function() {
        const esOscuro = this.cuerpo.style.backgroundColor === "white";
        this.cuerpo.style.backgroundColor = esOscuro ? "black" : "white";
        this.cuerpo.style.color = esOscuro ? "white" : "black";
    },
    irAseccion: function(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" }); }
 
};
botonTema.addEventListener("click", () => UI.alternarColor());

// delegacion  de  eventos: un solo listener para todo el contenedor de proyectos
const contenedor = document.getElementById("content");
 
contenedor.addEventListener("click", function(evento){
 // .target el elemento que fue clikeado .closest busca el padre mas cercano que coincida con el selector dado
    const tarjeta = evento.target.closest(".card");
    if(tarjeta){
        alert ("Haz hecho clic en un proyecto: " + tarjeta.querySelector("h3").innerText);
    }
 
});
 