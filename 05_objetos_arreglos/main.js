alert("funciona!");

var colores = ["azul", "rojo", "rosado", "morado", "purple"];

var consolas = ["xboxOne", "ps5", "xbox 360", "ps2", "GameBoy advanced"];

console.log(colores);
console.log(colores[2]);
console.log(consolas);
console.log(consolas[0]);

consolas.push("Switch");

console.log(consolas);

consolas.pop();

console.log(consolas);

colores.splice(1,2);

console.log(colores);

// objetos

var persona = { 
    nombre: "Ricardo",
    direccion: "CDMX",
    telefono: "1234",
    // es de buenas practicas dejar el telefono como dato de tipo String porque no vamos a hacer operaciones con el
    edad: 22,
    // con edad si podemos hacer operaciones por lo que es mejor ponerlo como dato numerico
    musica: { 
        metal: ["metallica", "Megadeth",],
        pop: ["k-pop", "hduehdeu"],
        blues: ["lightning hopkins", "BB King", "Albert King"],
        jazz: ["wes montgomery", "charlie parker", ]
    },
    peliculas: { 
        comedia: { 
            adamSandler:["una luna de miel en familia", "click perdiendo el control"],
            benStiller: ["zoolander", "zoolander2"]

        },
        drama: { 
            investigacion: "sherlock Holmes",
            disparos: "dimelo"
        }
    }

};
console.log(persona.peliculas.comedia.adamSandler[0]);