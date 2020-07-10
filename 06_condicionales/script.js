// var number = prompt("por favor ingresa un numero");
// console.log(typeof(number));
// var corrected = Number(number);
// console.log(typeof(corrected));
// if(corrected % 2 === 0){ 
    
//     console.log("el numero es par!");
// }else if(corrected%2 ===1){ 
//     console.log("el numero es impar");
// }else{ 
//     console.error("error al ingresar numeros");
// }

// operadores logicos

// var pregunta = prompt("cual es tu edad?");
// var edad = Number(pregunta);
// if(edad >= 18 && edad <= 80){ 
//     console.log("puedes conducir");
// }else if(edad === 17 || edad === 16){ 
//     console.log("puedes sacar el permiso para conducir");
// }else if(edad < 16 || edad > 80){ 
//     console.warn("no puedes conducir!");
// }else{ 
//     console.error("ingresaste mal tu edad");
// }

//challenge easy peasy
// var piedra = 1;
// var papel = 2;
// var tijeras = 3;

// var pregunta1 = prompt("jugador 1 ingrese su eleccion: \n(1)piedra\n(2)papel\n(3)tijeras");

// var pregunta2 = prompt("jugador 2 ingrese su eleccion: \n (1)piedra\n(2)papel\n(3)tijeras");

// var playerOne = Number(pregunta1);
// var playerTwo = Number(pregunta2);

// if(playerOne === piedra && playerTwo === piedra || playerOne === papel && playerTwo === papel || playerOne === tijeras && playerTwo === tijeras){ 
//     console.log("EMPATE!!");
// }else if(playerOne === piedra && playerTwo === tijeras || playerOne === papel && playerTwo === piedra || playerOne === tijeras && playerTwo === papel){ 
//   console.log("GANA EL JUGADOR 1");
// }else if(playerTwo === piedra && playerOne === tijeras || playerTwo === papel && playerOne === piedra || playerTwo === tijeras && playerOne === papel){ 
//   console.log("GANA EL JUGADOR 2");
// }else{ 
//     console.log("introduce una opcion valida, imbecil");
// }

//challenge con la computadora-----
var userAnswer  =prompt("escoge piedra papel o tijera");
var pcAnswer = "";
//Math es para acceder a funciones matematicas en javaScript
//.floor() regresa nueros enteros
var options = Math.floor((Math.random() *3)+1);

//piedra = 1
//papel = 2
//tijera = 3

if(options ===1){ pcAnswer = "piedra"};
if(options ===2){ pcAnswer = "papel"};
if(options === 3){ pcAnswer = "tijera"};

if(userAnswer === pcAnswer){ 
  console.log("es un empate");
}else if(userAnswer === "papel" && pcAnswer === "piedra" || userAnswer === "tijera" && pcAnswer === "papel" || userAnswer === "piedra" && pcAnswer === "tijera"){ 
  console.log("gana usuario porque "+ userAnswer + " vence a " + pcAnswer);
}else if(pcAnswer === "papel" && userAnswer === "piedra" || pcAnswer === "tijera" && userAnswer === "papel" || pcAnswer === "piedra" && userAnswer === "tijera"){ 
  console.log("gana la computadora porque "+ pcAnswer + " vence  a "+ userAnswer);
}else{ 
  console.log("ingresaste mal los datos");
}
