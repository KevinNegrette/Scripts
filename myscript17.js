//Ejercicios del DOM
// 1 onchange

function upperCase(){
    const text = document.getElementById("fname");
    text.value = text.value.toUpperCase();
};


//Mouse Over - Out
function moveOver(obj){
    obj.innerHTML = "Hola, muevete afuera";
};

function moveOut(obj){
    obj.innerHTML = "Mouse over me";
};

//Mouse Down - Up
function mDown(obj){
    obj.style.backgroundColor = '#1ec5e5';
    obj.innerHTML = "Sueltame gorila";

};
function mUp(obj){
    obj.style.backgroundColor = 'rgb(26, 88, 12)';
    obj.innerHTML = "Gracias humano";
};

//Escuchador de eventos, Botón Inténtalo

document.getElementById('myBtn').addEventListener("click", ()=>{
    alert("Buena por intentar, por eso lo lograrás.");
});

//

var accion = document.getElementById("otherBtn");
accion.addEventListener("mouseover", meCubres);
accion.addEventListener("click", mePresionas);
accion.addEventListener("mouseout", meLiberas);

function meCubres(){
    document.getElementById("demo17.0").innerHTML += "Tu Mouse me cubre!! <br> ";
};
function mePresionas(){
    document.getElementById("demo17.0").innerHTML += "Mem siemto omprimido :( <br>";
};
function meLiberas(){
    document.getElementById("demo17.0").innerHTML += "Gracias por liberarme, humano :D <br>";
};
