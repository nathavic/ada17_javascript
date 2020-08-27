// toUpperCase() toLowerCase()
// variable.toUpperCase() - se usa así

let nombreMayusculas = "ana"

console.log(nombreMayusculas.toUpperCase())

let nombreMinusculas = "JOSE"

console.log(nombreMinusculas.toLowerCase())

// ejemplo :: controlar lo que iscribe el usuario para lowercase

/*let confirma = prompt("desea comprar?")

if (confirma.toLowerCase() == "si") {
    alert("Confimada tu compra")
}
*/
// ejemplo 2 :: Hola, Pepo. :: charAt (contar apartir del 0) letra*

let nombreOrganizado = "PEPO"

console.log(nombreOrganizado.charAt(0)) // P

// o
let primeraLetraDeNombre = nombreOrganizado.charAt(0)
let primeraLetraEnMayuscula = primeraLetraDeNombre.toUpperCase()

console.log(primeraLetraEnMayuscula) // P

// slice :: primer numero es inclusivo y el segundo no!

let nombreCortada = "macarena"

console.log(nombreCortada.length) // 8 

console.log(nombreCortada.slice(1, 7)) // acaren

console.log(nombreCortada.slice(3, 6)) // are

// seleccionar el resto del nombre: (longitud)
console.log(nombreCortada.slice(1, nombreCortada.length)) // acarena


// concatenar la primeira letra (mayus) + resto

let nombre = "pEPO"

const normalizarNombre = (nombre) => {
    let nombreSinEspacios = nombre.trim()
    const primeraLetra = nombre.charAt(0)
    const primeraEnMayus = primeraLetra.toUpperCase()
    const restoDelNombre = nombre.slice(1, nombre.length)
    const restoEnMinus = restoDelNombre.toLowerCase()
    const nombreNormalizado = primeraEnMayus.concat(restoEnMinus)
    return nombreNormalizado
}

// console.log("Hola " + nombreNormalizado)

console.log(normalizarNombre(nombre))
console.log(normalizarNombre(" sanTi "))
console.log(normalizarNombre("aNA"))
console.log(normalizarNombre("jOao"))


// Trim :: cortar espacios


let nombre1 = "  Santi  "
let nombre2 = " Santi    Con   Spacio"

console.log(nombre1.trim())
console.log(nombre2.trim())


// :: metodo string (no usar con numeros)

// indexOf :: localizar letra 

const nombre3 = "Carla"

console.log(nombre3.indexOf("a")) // 1

const nombre4 = "Carla"

console.log(nombre4.indexOf("p")) // - 1


// includes :: buscar si tiene ese caracteres

const nombre5 = "Funciona includes con palabras?"

console.log(nombre5.includes("Funciona")) // true


// replace :: retornar un string en donde el primer parametro 
// se reemplaza por el segundo

const ejemplo = "Lu, no dejes Ada por favor"

console.log(ejemplo.replace("Lu", "Maria"))

// 1 solo se reemplaza la primera aparicion 
// 2 distingue entre mayus y minus
// Puede recibir expresiones regulares (regex)
// ri(b|v)er / River Riber

const mensaje = "Mi gato es dulce. Mi gato es lindo"

console.log(mensaje.replace(/gato/g, "perro"))

// o usando el i = para ignorar mayus : minus

const burlarse1 = 'programar es dificil PROGRAMAR es dificil 1'

console.log(burlarse1.replace(/programar/gi, "prigimir"))


// burlarse(str)

const burlarse = (string) => {
    let reemplazarLaA = string.replace(/a/g, "i")
    let reemplazarLaE = reemplazarLaA.replace(/e/g, "i")
    return reemplazarLaE
}

console.log(burlarse("programar es dificil"))
console.log(burlarse("las mujeres no sirven para las computadoras"))


// o 

const burlarse2 = (string1) => {
    let burla;
    burla = string1.replace(/e/g, "a")
    burla = burla.replace(/o/g, "u")
    return burla
}

console.log(burlarse2("programar es dificil (burla)"))
console.log(burlarse2("las mujeres no sirven para las computadoras"))

// o

const burlarse3 = (string2) => {
    let burla1;
    if (string2.includes("a")) {
        burla1 = string2.replace(/a/g, "i")
    }
    if (string2.includes("e")) {
        burla1 = string2.replace(/e/g, "i")
    }
    return burla1
}

console.log(burlarse3("programar es dificil (burla)"))
console.log(burlarse3("las mujeres no sirven para las computadoras"))

// o con [cualquiera de esas letras]

const burlarse4 = (string3) => {
    let burla2 = string3.replace(/[aeiu]/g, "o")
    return burla2
}

console.log(burlarse4("programar es dificil (burla)"))
console.log(burlarse4("las mujeres no sirven para las computadoras"))