//Concatenación con +
persona = "Kevin ";
saludo = "aprendiendo Java Script"
fraseCompleta = persona + saludo;

document.getElementById("demo2.0").innerHTML = persona;
document.getElementById("demo2.1").innerHTML = saludo;
document.getElementById("demo2.2").innerHTML = fraseCompleta;

//Concatenación con engaño 524
numeroImpar = 5;
numeroPar = 24;
numeroSeguido = "" +numeroImpar + numeroPar; //Al ubicar las comillas al inicio de la concatenación, el contenido de las variables se interpreta como un texto

document.getElementById("demo2.3").innerHTML = numeroSeguido;

//Concatenación con concat()

animal = "Perro ";
sonido = "Guauu ";
accion = "Correr ";

animalHabla = animal.concat( sonido, accion);

document.getElementById("demo2.4").innerHTML = animalHabla;

//Concatenación ${}

forma = "con estos simbolos ${}";

conclusion = `La siguiente forma de concatenar es ${forma}, porque puedo poner una frase y llamar variables`;

document.getElementById("demo2.5").innerHTML = conclusion;
