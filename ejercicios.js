// Ejercicio 1: Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b;
}

// Ejercicio 2: Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayor(numeros) {
    if (numeros.length === 0) return undefined;
    return Math.max(...numeros);
}

// Ejercicio 3: Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
    const vocales = texto.match(/[aeiouáéíóúü]/gi);
    return vocales ? vocales.length : 0;
}

// Ejercicio 4: Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(arrayStrings) {
    return arrayStrings.map(str => str.toUpperCase());
}

// Ejercicio 5: Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

// Ejercicio 6: Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    return array1.filter(item => array2.includes(item));
}

// Ejercicio 7: Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(numeros) {
    return numeros.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// Ejercicio 8: Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(numeros) {
    return numeros.map(num => num * num);
}

// Ejercicio 9: Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
    return texto.split(' ').reverse().join(' ');
}

// Ejemplos de uso para probar en consola
console.log("=== EJERCICIOS JAVASCRIPT ===");
console.log("1. suma(5, 3):", suma(5, 3));
console.log("2. encontrarMayor([3, 7, 2, 9, 5]):", encontrarMayor([3, 7, 2, 9, 5]));
console.log("3. contarVocales('JavaScript es genial'):", contarVocales('JavaScript es genial'));
console.log("4. convertirAMayusculas(['hola', 'mundo', 'js']):", convertirAMayusculas(['hola', 'mundo', 'js']));
console.log("5. esPrimo(17):", esPrimo(17), "- esPrimo(15):", esPrimo(15));
console.log("6. elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]):", elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("7. sumaPares([1, 2, 3, 4, 5, 6]):", sumaPares([1, 2, 3, 4, 5, 6]));
console.log("8. elevarAlCuadrado([1, 2, 3, 4, 5]):", elevarAlCuadrado([1, 2, 3, 4, 5]));
console.log("9. invertirPalabras('JavaScript es divertido'):", invertirPalabras('JavaScript es divertido'));

// Hacer que las funciones estén disponibles globalmente para poder probarlas desde la consola
window.suma = suma;
window.encontrarMayor = encontrarMayor;
window.contarVocales = contarVocales;
window.convertirAMayusculas = convertirAMayusculas;
window.esPrimo = esPrimo;
window.elementosComunes = elementosComunes;
window.sumaPares = sumaPares;
window.elevarAlCuadrado = elevarAlCuadrado;
window.invertirPalabras = invertirPalabras;

console.log("\nTodas las funciones están disponibles para usar en la consola:");
console.log("- suma(a, b)");
console.log("- encontrarMayor(numeros)");
console.log("- contarVocales(texto)");
console.log("- convertirAMayusculas(arrayStrings)");
console.log("- esPrimo(numero)");
console.log("- elementosComunes(array1, array2)");
console.log("- sumaPares(numeros)");
console.log("- elevarAlCuadrado(numeros)");
console.log("- invertirPalabras(texto)");