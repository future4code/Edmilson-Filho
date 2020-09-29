// Exercicio 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// Imprimira a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// Imprimira b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// Imprimira c. true

console.log("e. ", typeof resultado)
// Imprimira e. boolean

// Exercicio 2

let array
console.log('a. ', array)
// Imprimira a. undefined

array = null
console.log('b. ', array)
// Imprimira b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Imprimira c. 11

let i = 0
console.log('d. ', array[i])
// Imprimira d. 3

array[i+1] = 19
console.log('e. ', array)
// Imprimira e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// Imprimira f. 10