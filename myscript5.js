// Ejercicios de objetos

var carro = {
    //Atributos
    tipo: "Renault",
    modelo: "Twingo",
    color: "Negro nebulosa",

    //Métodos
    nombreCompleto: function(){
        return this.tipo + " " +this.modelo;
    }, 

    //Se plantea una forma diferente de llamar a los atributos del objeto, ya sea con el "this" o con el nombre de la variable

    nombreColor: function(){
        return carro.tipo + " - " + carro.color
    }

}

document.getElementById("demo5.0").innerHTML = "El carro es un "+carro.tipo;
document.getElementById("demo5.1").innerHTML = "El color es "+carro["color"];
document.getElementById("demo5.2").innerHTML = carro.nombreCompleto(); //Para poder mostrar el resultado, se debe llamar al método, en este caso "nombreCompleto".
document.getElementById("demo5.3").innerHTML = carro.nombreColor();
