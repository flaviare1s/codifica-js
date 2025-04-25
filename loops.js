const prompt = require("prompt-sync")()

// let tabuada = Number(prompt('Qual número você quer saber a tabuada? '))
// let i = 0

// while(i <= 10) {
//   console.log(`${tabuada} x ${i} = ${tabuada * i}`)
//   i++
// }

let contador = 0
let resposta = 0
let soma = 0

do {
  resposta = Number(
    prompt("Informe os valores para calcular a média (ao final, digite 0): ")
  );
  soma += resposta
  contador++
} while (resposta != 0)

let mediaFinal = (soma / (contador - 1)).toFixed(2)

console.log(`A média final é ${mediaFinal}`)
