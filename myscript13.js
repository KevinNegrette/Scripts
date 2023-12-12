//CallBack

function IntentoModificar(array, callback){
    //Lo que tengo que hacer
    array.push(' Maria');
    //Lo que hago después de hacer algo...
    setTimeout( ()=>{
        callback(array);
    }, 3000);

};

const names = ["Heriberto", " Valentina", " Marisol"];

IntentoModificar(names, function(array){
    document.getElementById("demo13.0").innerHTML = `modificado el arreglo y ahora es de ${array}`;
});

