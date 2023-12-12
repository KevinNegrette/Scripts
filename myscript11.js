// MAP

//Crear un Map con new
const celulares = new Map([
    ["Sumsang", 500],
    ["PineApple", 300],
    ["Hawai", 250],
    ["NoGuia", 100]
]);

document.getElementById("demo11.0").innerHTML = celulares.get("Hawai");

const taladros = new Map ();

taladros.set("Buker", 450);
taladros.set("Uberman", 150);
taladros.set("Delwalt", 350);
taladros.set("Hilti", 650);


document.getElementById("demo11.1").innerHTML = taladros.get("Hilti");
document.getElementById("demo11.2").innerHTML = taladros.delete("Delwalt");
document.getElementById("demo11.2").innerHTML = taladros.size;

for(let [key, value] of taladros){
    console.log(key + " = " + value);
};
