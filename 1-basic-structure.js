const prompt = require("prompt-sync")();

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

// Exercício 3 - Verificar se um número é positivo, negativo ou zero
let valor = 2

if (valor > 0) {
  console.log(`O número ${valor} é positivo!`)
} else if (valor < 0) {
  console.log(`O número ${valor} é negativo!`);
} else {
  console.log('É zero!')
}

// Exercício 4 - Verificar se um ano é bissexto
let ano = 2020

if (ano % 400 === 0) {
  console.log(`${ano} é bissexto`);
} else if (ano % 100 === 0) {
  console.log(`${ano} não é bissexto`);
} else if (ano % 4 === 0) {
  console.log(`${ano} é bissexto`);
} else {
  console.log(`${ano} não é bissexto`);
}

//Exercício 5 -  Definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária
let idade = Number(prompt('Qual a sua idade? '))

switch (true) {
  case idade < 12:
    console.log("Criança");
    break;
  case idade < 18:
    console.log("Adolescente");
    break;
  case idade < 60:
    console.log("Adulto");
    break;
  case idade >= 60:
    console.log("Idoso");
    break;
}
