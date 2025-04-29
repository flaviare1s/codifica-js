const prompt = require("prompt-sync")()
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const int = Number(prompt("Digite um número inteiro: "))
if (int === 0) {
  console.log(`${int} é ZERO!`)
} else if (int % 2 === 0) {
  console.log(`${int} é PAR!`)
} else {
  console.log(`${int} é ÍMPAR!`)
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
let idade = Number(prompt("Qual a sua idade? "))

if (idade < 12) {
  console.log("Criança")
} else if (idade >= 12 && idade < 18) {
  console.log("Adolescente")
} else if (idade >= 18 && idade < 60) {
  console.log("Adulto")
} else {
  console.log("Idoso")
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota= Number(prompt("Qual a sua nota? "))

if (nota < 5) {
  console.log("REPROVADO")
} else if (nota >= 5 && nota < 7) {
  console.log("RECUPERAÇÃO")
} else {
  console.log("APROVADO")
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log("Menu:")
console.log("A - Cadastro")
console.log("B - Login")
console.log("C - Alterar Senha")
let opcao = prompt("Escolha uma opção: ")
opcao = opcao.toUpperCase()

switch (opcao) {
  case "A":
    console.log("Você escolheu a opção de cadastro")
    break;
  case "B":
    console.log("Você escolheu a opção de login")
    break;
  case "C":
    console.log("Você escolheu a opção de alterar senha")
    break;
  default:
    console.log("Escolha uma opção válida")
    break;
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
let peso = Number(prompt("Digite o seu peso: "))
let altura = Number(prompt("Digite a sua altura (em m): "))
let IMC = (peso / altura ** 2).toFixed(2)

if (IMC < 18.5) {
  console.log(`Seu IMC é ${IMC} e você está com baixo peso.`)
} else if (IMC >= 18.5 && IMC < 25) {
  console.log(`Seu IMC é ${IMC} e você está com o peso normal.`)
} else if (IMC >= 25 && IMC < 30) {
  console.log(`Seu IMC é ${IMC} e você está com sobrepeso.`)
} else {
  console.log(`Seu IMC é ${IMC} e você está com obesidade.`)
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
let ladoA = Number(prompt("Digite o valor do lado A: "))
let ladoB = Number(prompt("Digite o valor do lado B: "))
let ladoC = Number(prompt("Digite o valor do lado C: "))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("É um triângulo equilátero.")
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("É um triângulo isósceles.")
  } else {
    console.log("É um triângulo escaleno.")
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo.")
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
const numeroMacas = Number(prompt("Quantas maçãs foram compradas? "))

if (numeroMacas < 12) {
  console.log(`O valor total da compra é R$ ${numeroMacas * 0.3}`)
} else {
  console.log(`O valor total da compra é R$ ${numeroMacas * 0.25}`)
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

if (num1 > num2) {
  console.log(num2, num1)
} else {
  console.log(num1, num2)
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
for (let i = 10; i > 0; i--) {
  console.log(i)
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let num = Number(prompt("Digite um número: "))
for (let i = 0; i < 10; i++) {
  console.log(num)
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
let soma = 0
for (let i = 0; i < 5; i++) {
  let num = Number(prompt("Digite um número: "))
  soma += num
}
console.log(soma)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let tabuada = Number(prompt("Qual número você quer saber a tabuada? "))
for (let i = 0; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let total = 0
let quantidade = 0
let numero

do {
  numero = Number(prompt("Digite um número decimal (0 para sair): "))

  if (numero !== 0) {
    total += numero
    quantidade++
  }
} while (numero !== 0)

if (quantidade > 0) {
  let media = total / quantidade;
  console.log(
    `A média aritmética dos números digitados é: ${media.toFixed(2)}`
  );
} else {
  console.log("Nenhum número foi digitado.")
}

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
const A = Number(prompt("Digite um número: "))
let fatorial = 1

for (let i = A; i > 1; i--) {
  fatorial *= i
}

console.log(`${A}! = ${fatorial}`)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
let a = 0
let b = 1

console.log("Sequência de Fibonacci:")
console.log(a)
console.log(b)

for (let i = 2; i < 10; i++) {
  let proximo = a + b
  console.log(proximo)
  a = b
  b = proximo
}
