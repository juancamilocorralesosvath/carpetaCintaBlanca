
// ECMA5 introdujo nuevas formas de declarar las variables: en lugar de solo tener var, tenemos let y const, let es como var, y const se usa mas que todo para almacenar funciones, porque como son estaticas (por asi decirlo) no quiero que cambien en mi codigo.
// let num1 = 10;

// const constante = 30;

// const suma = (x, y) => { 
//   console.log("la suma de "+x+" con "+y+" es: "+(x+y));
// }

// suma(2,2);

const areaCuadrado = () => { 
    let x = prompt("ingresa el valor del lado del cuadrado")
    let area = x * x;
    return area;

}

console.log(areaCuadrado());

const areaRectangulo = () =>{ 
    let x = prompt("ingresa el valor de la base del rectangulo");
    let y = prompt("ingresa el valor de la altura del rectangulo");
    let area = x * y;
    return area;
}
console.log(areaRectangulo());

const areaTriangulo = () =>{ 
    let x = prompt("ingresa el valor de la base del triangulo");
    let y = prompt("ingresa el valor de la altura del triangulo");
    let area = (x * y) / 2;
    return area;
}

console.log(areaTriangulo());


