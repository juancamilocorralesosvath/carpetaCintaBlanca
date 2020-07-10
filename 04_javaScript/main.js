// alert("Hola Mundo en JS!");
//variables
var numero = 10;
var string = "soy un texto";
var array = [12, 25, "Osvaldo", "ricardo"];
var object = {

    nombre: "Osvaldo", 
    edad: 21,
    profesion: "frontend developer"
}

console.log(numero);
var nombre = "Juan Camilo";
var edad = 18;
var numeroTelefonico = 12345678;

console.log(nombre);
console.log(edad);
console.log(numeroTelefonico);

var todoJuntito = "Hola! mi nombre es " + nombre + ", tengo " + edad + " y mi numero de telefono es " + numeroTelefonico;

console.log(todoJuntito);
console.log(typeof(todoJuntito));

var err1 = "4";
var err2 = "8";
 var sumaErronea = err1 + err2;
 console.log(sumaErronea);

 var errCorregido1 = Number(err1);
 var errCorregido2 = Number(err2);
 var sumaCorrecta = errCorregido1 + errCorregido2;
 console.log(sumaCorrecta);

 var userName = prompt("cual es tu nombre?");

 var animo = prompt("como estas?");
var pizza = prompt("la pizza con o sin pina?");

console.log(userName);