//Estructuras Repetitivas
// While - Mientras 

let numero = 0;
let cajaNumero = [];

while (numero <= 100) {

    cajaNumero.push(numero);

    numero = numero + 1;
    //numero++;
    
};

//console.log(cajaNumero);

document.getElementById("demo10.0").innerHTML = cajaNumero;

//Do while - Haga mientras

// let contador = 0;

// do {
//     document.write("Hola ")
//     contador = contador +1;
// } while (contador < 3);

// For - Para

let arregloPara = [];

for (let i = 0; i <= 20; i++) {

    if ( i == 17) {
        
        continue;

    } else {
        
    }
    
    arregloPara.push(i);
};

document.getElementById("demo10.1").innerHTML = arregloPara;

//For in vs For of

let animales = [ "gato", "perro", "elefante", "Dodo"];
let textIn = "";

for (let animal in animales){
    textIn = textIn + animal + "<br>";
    //textIn += animal + "<br>";
}

document.getElementById("demo10.2").innerHTML = textIn;

let textOf = "";

for (let animal of animales){
    textOf = textOf + animal + "<br>";
}

document.getElementById("demo10.3").innerHTML = textOf;

const usuarioCliente = {
    name: "Federico",
    lastName: "Gomez",
    age: 33
};

let textObj = "";

for (let key in usuarioCliente){
    textObj = textObj + usuarioCliente[key] + "<br>";
}

document.getElementById("demo10.4").innerHTML = textObj; 

//ForEach

let estudiantes = [ "Manuel", "Leyner", "Maria Angel", "Vivero "];
let textEach = "";

estudiantes.forEach(miSalida);

document.getElementById("demo10.5").innerHTML = textEach;

function miSalida(item, index){
    textEach = textEach + index + " = " + item + "<br>";
};