//SCOPE (Ámbito)
/*
El alcance determina la accesibilidad (visibilidad) de las variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
*/

// Function Scope

function comer(){
    var fruta = 'manzana';
    document.getElementById("demo14.0").innerHTML = 'comiendo '+fruta;
};

function lavar(){
    var fruta = 'banana';
    document.getElementById("demo14.1").innerHTML = 'Lavando '+fruta;
};

comer();
lavar();

//Global Scope

var frutaGlobal = 'Piña';

function picar(){
    var otraFruta = 'Pera';
    document.getElementById("demo14.2").innerHTML = 'Picando '+otraFruta;
}

picar();

//Block Scope

function cultivar (){
    var frutaSembrada = "Papaya";
    if(true){
        var frutaCosechada = "Lulo";
    }
    document.getElementById("demo14.3").innerHTML = 'Sembrando '+ frutaSembrada;
    document.getElementById("demo14.4").innerHTML = 'Cosechando '+ frutaCosechada;

};

cultivar();

//Un bloque en JA es todo lo que está encerrado entre {}, if, else, while, for, cambiar el var de frutaCosechada por un let o const, me sacaría error.

var frutaTraida = 'Mangostino';

function almacenar(){
    var frutaGuardada = 'Granada';

    function sacarFruta (){
        document.getElementById("demo14.5").innerHTML = 'Sacando '+frutaTraida; 
    }

    sacarFruta();

    document.getElementById("demo14.6").innerHTML = 'Guardando '+ frutaGuardada;
};

almacenar();

// OCULTAMIENTO DE VARIABLES (Variable Shadowing)

/*
Cuando una variable está en un scope mas reducido tiene el mismo 
nombre que otra que esta en un scope superior, siguiendo la cadena
de scopes 
*/

var miFruta = 'Durazno';

function buscarMiFruta (){
    var miFruta = 'Maracuya';
    function encontrarMiFruta(){
        document.getElementById("demo14.7").innerHTML = 'Encontrando '+ miFruta;
    };

    encontrarMiFruta();
    document.getElementById("demo14.8").innerHTML = 'Buscando ' + miFruta;
};

buscarMiFruta();