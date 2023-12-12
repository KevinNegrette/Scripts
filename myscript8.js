//Estructuras de decisión lógica

/* Hacer un algoritmo que, dados dos valores numéricos, escriba un mensaje diciendo si A es mayor, menor o igual a B.*/

function CompararNumero (a, b) {

    if (a > b) {

        document.getElementById("demo8.0").innerHTML = "A es mayor que B"
        
    } else {
        if (a < b) {
            document.getElementById("demo8.0").innerHTML = `${a} es menor que ${b}`;
        } else {
            if (a === b) {
                document.getElementById("demo8.0").innerHTML = `${a} es igual que ${b}`;
                
            } else {
                document.getElementById("demo8.0").innerHTML = "Coloque datos apropiados"
            }
        }
    }

}
