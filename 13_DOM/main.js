let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let boton = document.getElementById("btn");
let saludo = document.getElementById("saludo");
let formaAntiguaNohacerjeje = document.getElementById("forma-antigua");
let pregunta = document.getElementById("pregunta");
let respuesta = document.getElementById("respuesta");
console.log(titulo);

const cambiar = () => { 
    respuesta.innerHTML = pregunta.value
    titulo.innerHTML = "Me cambie desde la terminal";
    subtitulo.innerHTML = "Me cambie x2";
}

const saludar = () => { 
    alert("Hola mundo!");
}

boton.addEventListener("click", cambiar);
saludo.addEventListener("click", saludar);



