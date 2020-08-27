// Metodos de Strings

// concatenacion:
// console.log("natha" + "vic")

// en algunos metodos nombreDelMetodo(parametro)
// variable.nombreDelMetodo(parametro)

// concat() 

// variable.nombreDelMetodo (parametro)
let nombre = "Joao "
let apellido = "Maria"

console.log(nombre) // Joao

let nombreConcat = (nombre.concat(apellido, " sumar mais", " strings"))
console.log(nombreConcat)
    //o 
console.log(nombre.concat(apellido, " sumar mais", " strings"))

// lo mismo que:
// const concatCasero = (str1, str2) => {
//     return str1 + str2
// }

// Number y parseFloat son equivalentes - decimales
// parseInt -- convierte a enteros

const edad = prompt("Decime tu edad") // 8
console.log(edad + 80) // 880

edadComoNumero = Number = ("79.9")
console.log(edadComoNumero) // mismo que float

edadComoNumero1 = parseInt("79") // convertir a entero
console.log(edadComoNumero1)

edadComoNumeroE = parseInt("79.9") // aredonda para bajo (79)
console.log(edadComoNumeroE)

edadComoNumero2 = parseFloat("79.9") // convertir decimal
console.log(edadComoNumero2)


// isNaN :: si el numero en NaN o no  : boolean 

console.log(isNaN(77)) // false
console.log(isNaN(isNaN)) // true

// ejemplo:

const telefono = prompt("Decime tu telefono")

let telefonoComoNumero = parseInt(telefono)
if (isNaN(telefonoComoNumero)) {
    alert("Decime un numero")
}
// lo mismo que: 
const telefono1 = prompt("Decime tu telefono")

if (isNaN(parseInt(telefono1))) {
    alert("Decime un numero 1")
}