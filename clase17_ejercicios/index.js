// tienenMismaLongitud(a, b)
// Crear una función tienenMismaLongitud que tome como 
// argumentos dos strings a y b y devuelva true si tienen 
// la misma longitud o false de lo contrario

// igualLongitud('javascript', 'java') // false
// igualLongitud('manzana', 'cerveza') // true

const tienenMismaLongitud = (a, b) => {
    if (a.length != b.length) {
        return false
    } else {
        return true
    }
}


console.log(tienenMismaLongitud('javascript', 'java')) // false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true
console.log(tienenMismaLongitud('mesa', 'vaso')) // true 
console.log(tienenMismaLongitud('maceta', 'plantas')) // false


// esUltimoCaracter(palabra, caracter)
// Crear una función igualLongitud que tome como argumentos
// una palabra y un caracter y devuelva true si la palabra 
// termina con el caracter o false de lo contrario

// igualLongitud('lovelace', 'e') // true
// igualLongitud('lovelace', 'f') // false

const igualLongitud = (c, d) => {
    if (c.slice(-1).includes(d)) {
        return true
    } else {
        return false
    }
}

console.log(igualLongitud('lovelace', 'e')) // true
console.log(igualLongitud('lovelace', 'f')) // false
console.log(igualLongitud('lovelace', 'w')) // false


// aHackerSpeak(str)
// Crear una función aHackerSpeak que tome como 
// argumento un string str y el mismo string convertido a H4CK3R 5P3AK, 
// siguiendo las siguientes reglas:

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0
// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

const aHackerSpeak = (str) => {

    let reglas = str.replace(/i/gi, "1")
    let reglas1 = reglas.replace(/e/gi, "3")
    let reglas2 = reglas1.replace(/a/gi, "4")
    let reglas3 = reglas2.replace(/s/gi, "5")
    let reglas4 = reglas3.replace(/o/gi, "0")
    return reglas4

}

console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')) // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) // '4D4 L0V3L4C3'


// ocultarContrasenia(contrasenia)
// Crear una función ocultarContraseña que tome como argumento 
// una contrasenia de solo numeros y devuelva un string con dicha 
// contraseña ocultada con astericos *, es decir, un string con 
// la misma longitud donde todos sus caracteres son astericos

// ocultarContrasenia(123456) // '******'
// ocultarContrasenia(111222333) // '*********'


const ocultarContrasenia = (string) => {
    return string.replace(/[1234567890]/g, '*')
}

console.log(ocultarContrasenia("123456")) // '******'
console.log(ocultarContrasenia("111222333")) // '*********'
console.log(ocultarContrasenia("75639273549494947494946494944")) // '*********'