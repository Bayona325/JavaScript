//Ejercicio 1
function suma(a, b) {
    console.log(suma(a, b));
    return a + b;
}

//Ejercicio 2
let numeroMayor = (1, 2, 3, 4, 5, 6, 7, 8, 9);
buscarMayor = numeroMayor;

//Ejercicio 3
let contiene500Anios = textos.includes("500");
console.log(`Si contiene?: ${contiene500Anios ? "SI" : "NO"}`);

//Ejercicio 4
let nick = "@adrian";
let validarNick = nick.startsWith("@");
let respuesta = validarNick ? "SI" : "NO";

console.log(`El nick del usuario es valido?: ${respuesta}`);

//Ejercicio 5
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(numero));

//Ejercicio 6
let texto1 = "Oracion 1";
let texto2 = "Oracion 2";

//Ejercicio 7
let numeros = "1,2,3,4,5,6,7,8,9";

//Ejercicio 8
let cuadrados = "2,3,4,5,6,7,8,9,10";

//Ejercicio 9
let inverso = "Todas estas palabras estaran a la inversa la a estaran palabras estas todas";
