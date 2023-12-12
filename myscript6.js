//Funciones - Para crearlas, existen tres formas diferentes. 

// Forma 1 declarativa - Se identifica porque lleva la palabra function al declarar la función

let numero1 = "Kevin";
//Para nombrar la función es recomendable utilizar el PascalCase, es decir, nombrar la función con inicial en cada palabra desde el inicio.
function HacerSuma(numero1, numero2){
    let suma = numero1 + numero2;

    return suma
};

document.getElementById("demo6.0").innerHTML = HacerSuma(4,7);

// document.getElementById("demo6.1").innerHTML = suma;

//Forma 2 Por expresión - Se identifica debido que se declara una variable que contiene la función.

let HacerResta = function(numero1, numero2){
    let resta = numero1 - numero2;

    return resta
};

document.getElementById("demo6.2").innerHTML = HacerResta(9, 3);
document.getElementById("demo6.3").innerHTML = HacerResta(-9, -23);

//Forma 3 Expresión por flecha o también "Arrow function", en esta ocasión se declara la función creando una variable y después de los parámetros, se indica con la flecha como su nombre lo indica, "=>". como el ejemplo siguiente.

const HacerMultiplicacion = (numero1, numero2) =>{
    let multiplicar = numero1 * numero2;

    return multiplicar
};

document.getElementById("demo6.4").innerHTML = HacerMultiplicacion(25, 4);

//Funciones anónimas

// function(){

// };

// () => {

// }