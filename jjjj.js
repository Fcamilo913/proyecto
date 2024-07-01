// Digitar n cantidad de numeros y saber cuantos son pares y cuantos son impares

print("Ingrese la cantidad de numeros: ")

let cantidad = parseInt(readline.question())

let pares = 0

let impares = 0

for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(readline.question(`Ingrese el numero ${i + 1}: `))
    
    if (numero % 2 == 0) {
        pares++
    } else {
        impares++
    }
    document.log(`El numero ${numero} ${numero % 2 == 0 ? 'es par' : 'es impar'}`)
}