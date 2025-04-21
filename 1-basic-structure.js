// // let giria = 'Mané';

// // console.log("Hello World!")
// // console.log(`A gíria ${giria} é muito utilizada em português!`)
// // console.log('A gíria "Mané" é muito utilizada em português!')

// // console.log(typeof("Olá, mundo!"))
// // console.log(typeof(1))

// // Variáveis
// let name = 'Jaques'
// console.log(name)

// var anotherName = 'Hyago'
// console.log(anotherName)

// const CITY = 'Fortaleza'
// console.log(CITY)

// idade = 15 // JS assume que a variável foi criada no escopo global (var)
// console.log(idade)

// let teste
// console.log(teste) // undefined
// teste = '10'
// console.log(teste)

// let titulosDoInter = null
// console.log(titulosDoInter)

// // Operações matemáticas
// let num1 = 2
// let num2 = 3
// let num3 = '20'

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 ** num2)

// console.log(Number(num3) + num2)

// let counter = 1

// console.log(counter++)
// console.log(++counter)

// let step = 5

// counter += step
// counter += step
// console.log(counter)

// Operadores relacionais
// console.log(1 > 2)

// Operadores lógicos
// console.log(!(10 < 5) && (10 > 5))

// let usuario = 'flavia'
// let senha = '123456'

// let autenticacao = usuario === 'flavia' && senha === '123456'
// console.log(autenticacao)

// Exercício 1 - Verificar se é par ou ímpar

let num = 23

if(num % 2 === 0) {
  console.log("PAR!")
} else if (num === 0) {
  console.log("É zero!")
} else {
  console.log("ÍMPAR!")
}

// Exercício 2 - Encontrar o maior entre 3 números

let num1 = 44
let num2 = 8
let num3 = 16
let maior

if(num1 > num2) {
  maior = num1
} else {
  maior = num2
}

if(num3 > maior) {
  maior = num3
}

console.log(maior)
