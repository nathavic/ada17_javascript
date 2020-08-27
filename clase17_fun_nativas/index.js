// Funciones Nativos de JS (metodos)

//numeros, string, booleanos

const contrasenia = prompt("Ingrese su contraseña")

console.log(contrasenia.length) // longitude es un numero
console.log("hola".length) // 4

// mas de 5 caracteres

if (contrasenia.length >= 5) {
    alert("Valido")
} else {
    alert("Muy corto")
}

// .lenght -- nro que dice la longitud del string

const nombreNumeros1 = (nombre) => {
    return `Mi nombre tiene ${nombre.length} letras`
}

console.log(nombreNumeros1("Nathalia"))

const nombreNumeros2 = (nombre, apellido) => {
    return `Tu nombre tiene ${nombre.length} letras y tu apellido tiene ${apellido.length} `
}

console.log(nombreNumeros2("Ada", "Lovelace"))