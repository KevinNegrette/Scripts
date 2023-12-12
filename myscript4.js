//Arreglos y objetos

// Arreglos

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19]; //Este es un arreglo.

document.getElementById("demo4.0").innerHTML = numerosPrimos;

document.getElementById("demo4.1").innerHTML = numerosPrimos[3]; //Al ubicar el número 3 en los corchetes, me muestra el valor que está en la tercera pocisón del arreglo, recordar que, el arreglo cuenta desde la posición 0.

document.getElementById("demo4.2").innerHTML = numerosPrimos.length; //el elemento "length" cuenta los elementos que componen el arreglo.

//Datos de los arreglos

datosRecibidos = [8767, 98.9, "Violeta", null, undefined, [1, "talla", false], {marca: "Lenovo", ram: 8}];

document.getElementById("demo4.3").innerHTML = datosRecibidos; //De esta forma accedo a toda la información dentro del arreglo. 
document.getElementById("demo4.4").innerHTML = datosRecibidos [5][1];// De esta forma accedo a la información específica que está dentro del sub arreglo. 

//Formas de crear un arreglo 

var misMaterias = []; //Este es un arreglo vacío

const misVideoJuegos = new Array(
"Mario Bross",
"Metin2",
"Smite",
"Point Blank"
); // Otra forma de crear un arreglo.

profesiones = [
    "Ingeniería",
    "Medicina",
    "Diselo",
    "Economía",
    "Docencia"
];

document.getElementById("demo4.5").innerHTML = profesiones;
profesiones.pop();

document.getElementById("demo4.6").innerHTML = profesiones;

//Objetos

let pc1 = {
    nombre: "Kevin",
    marca: "Acer",
    procesador: "Ryzen 5",
    ram: "8GB",
    disco: "1TB",
    cantidad: 1
}; //Este es un objeto, dentro, encontramos los atributos del objeto, la información que lo compone. 

document.getElementById("demo4.7").innerHTML = pc1 ["marca"]; //Aquí solamente se muestra uno de los atributos del objeto, en este caso la "marca".

document.getElementById("demo4.8").innerHTML = pc1.disco;//Aquí al igual que el anterior, se muestra solo un elemento y se accede a él a través del "."

fraseSalida = `Esta est mi computadora, su nombre es: ${pc1["nombre"]}, <br>su marca es ${pc1["marca"]},<br> con un procesador ${pc1["procesador"]}, <br> con una ram de ${pc1["ram"]}, <br> y un disco duro de ${pc1["disco"]}<br>`;

document.getElementById("demo4.9").innerHTML = fraseSalida;