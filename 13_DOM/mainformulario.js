let name = document.getElementById("name");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phone-number");
let pineapple = document.getElementById("pineapple");

let name2 = document.getElementById("name2");
let address2 = document.getElementById("address2");
let phoneNumber2 = document.getElementById("phone-number2");
let pineapple2 = document.getElementById("pineapple2");

let btn = document.getElementById("btn");
let image = document.getElementById("img");
let contenedor = document.getElementById("contenedor");

const cambiar = () => { 
  name2.innerHTML = "name: " + name.value;
  address2.innerHTML = "address: " + address.value
  phoneNumber2.innerHTML = "Phone Number: " + phoneNumber.value
  pineapple2.innerHTML = "with pineapple?: " + pineapple.value

contenedor.style.display = "block";

let realPineapple = pineapple.value.toLowerCase();

  if(realPineapple === "with"){ 
   image.src = "./assets/pizza-hawaiana.jpg"
}else if(realPineapple === "without"){ 
    image.src = "./assets/respuestanegativa.jpg"
}else{ 
  image.src = "http://controlescolar.educacion.durango.gob.mx/error.gif"
}

}



btn.addEventListener("click", cambiar);

