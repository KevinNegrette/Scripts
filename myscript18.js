//POO - Paradigma de programación orientada a objetos:
// Clases Es la plantilla con la que creo objetos

class Animal{
    constructor(especie, edad, color ){
        this.especie = especie;
        this.edad = edad; 
        this.color = color;
        
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    };
    
    verInfo(){
        document.getElementById("demo18.4").innerHTML += this.info + "<br>";
    };
    //Polimorfismo
    
    ladrar(){
        if (this.especie == 'perro') {
            document.getElementById("demo18.6").innerHTML = "¡Guau, Guau! <br>";
        } else {
            document.getElementById("demo18.6").innerHTML = "No puedo ladrar porque no soy un perro, soy un "+this.especie + "<br>";
            
        };
    };
};

// let perro = new Animal();
// perro.especie = 'Perro';
// perro.edad = 5; 
// perro.color = 'chocolate';

//console.log(perro);

let perro = new Animal("perro", 5, "chocolate");
let gato = new Animal("gato", 7, "verde");
let elefante = new Animal("elefante", 10, "rosado");
let loro = new Animal("loro", 3, "gris");

document.getElementById("demo18.0").innerHTML = perro.info;
console.log(perro);
document.getElementById("demo18.1").innerHTML = gato.info;
document.getElementById("demo18.2").innerHTML = elefante.info;
document.getElementById("demo18.3").innerHTML = loro.info;

elefante.verInfo();
gato.verInfo();
loro.verInfo();

document.getElementById("demo18.5").innerHTML = 'Perro: '+ perro.info;

gato.ladrar();
perro.ladrar();

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    };

    // modificarRaza(){
    //     this.raza = 'Mongrel';
    // };

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }

    //Método estático

    static ladrar(){
        document.getElementById("demo18.8").innerHTML = "Este es un ladrido desde el método estático ¡¡Grrr!!. <br>"
    };
    
};

Perro.ladrar();


let perrito = new Perro ("perro", 1, "Blue Merlé", "Criollo")
document.getElementById("demo18.7").innerHTML = perrito.color;

// perrito.modificarRaza();
// document.getElementById("demo18.9").innerHTML = perrito.raza;

perrito.setRaza = 'Akita';
document.getElementById("demo18.10").innerHTML = perrito.raza;
document.getElementById("demo18.11").innerHTML = perrito.getRaza;