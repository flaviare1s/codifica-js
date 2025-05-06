// Crie um array chamado 'números' contendo 10 valores numéricos à sua escolha:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Array original: ${numeros}`);

// Use métodos de array para calcular:

// A soma de todos os elementos.
let soma = numeros.reduce((acc, numero) => {
  return acc += numero
}, 0)

console.log(`Soma: ${soma}`);

// A média dos elementos.
let media = soma / numeros.length

console.log(`Média: ${media}`);

// Gere um novo array chamado pares que contenha apenas os números pares de numeros.
let pares = numeros.filter(numero => numero % 2 === 0)

console.log(`Array de pares: ${pares}`);

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares

// Crie um array desordenado e ordene em ordem crescente:

let valores = [3, 9, 2, 22, 35, 44, 5, 12, 123, 1]

valores.sort((a, b) => a - b)

console.log(valores)

// Outra forma de resolver:
// let n = valores.length

// for (let i = 0; i < n; i++) {
//   for(let j = 0; j < n - i - 1; j++) {
//     if(valores[j] > valores[j + 1]) {
//       let temp = valores[j]
//       valores[j] = valores[j + 1]
//       valores[j + 1] = temp
//     }
//   }
// }
// console.log(valores)
