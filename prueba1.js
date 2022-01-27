const readline = require("readline-sync");

//Imput para introducir numeros
const lowerNumber = parseInt(readline.question("Ingrese un numero entero:"))
const higherNumber = parseInt(readline.question("Ingrese un numero entero:"))

console.log(`Los numeros primos entre ${lowerNumber} y ${higherNumber} son:`)

// Bucle de número inferior a número superior
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // Recorriendo 2 hasta el número que ingreso el usuario
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // Si el número es mayor que 1 y no es divisible por otros números
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}