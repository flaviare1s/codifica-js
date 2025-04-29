const prompt = require("prompt-sync")();
// 1. Escreva um algoritmo que leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit.

const C = Number(prompt("Informe a temperatua em Celsius: "))
const F = C * 1.8 + 32
console.log(`A temperatura em Fahrenheit é ${F.toFixed(2)}ºF`)

// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos.
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
const numeroEleitores = Number(prompt('Informe o número de eleitores: '))
const votosBrancos = Number(prompt('Informe o número de votos brancos: '))
const votosNulos = Number(prompt('Informe o número de votos nulos: '))
const votosValidos = Number(prompt("Informe o número de votos válidos: "))

const percentualBrancos = (votosBrancos / numeroEleitores) * 100
const percentualNulos = (votosNulos / numeroEleitores) * 100
const percentualValidos = (votosValidos / numeroEleitores) * 100

console.log(
  `Resultado da eleição: ${percentualBrancos.toFixed(2)}% de votos brancos, ${percentualNulos.toFixed(2)}% de votos nulos e ${percentualValidos.toFixed(2)}% de votos válidos.`
);

// 3. A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
const alunosTurmaC = 60
const alunosTurmaD = 20
const porcentagemReprovadosTurmaC = Number(prompt('Qual a porcentagem de alunos reprovados na turma C? '))
const porcentagemAprovadosTurmaD = Number(prompt("Qual a porcentagem de alunos aprovados na turma D? "))

const reprovadosTurmaC = (porcentagemReprovadosTurmaC / 100) * alunosTurmaC
const reprovadosTurmaD = ((100 - porcentagemAprovadosTurmaD) / 100) * alunosTurmaD
const percentualReprovados = ((reprovadosTurmaC + reprovadosTurmaD) / (alunosTurmaC + alunosTurmaD)) * 100

console.log(`O número de alunos reprovados na turma C é ${reprovadosTurmaC}, na turma D é ${reprovadosTurmaD} e no total é ${percentualReprovados}% de reprovados.`)

// 5. Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.
const dia = prompt('Qual o dia da semana? ')

switch (dia) {
  case "Sabado":
  case "Domingo":
    console.log("Final de semana")
    break
  default:
    console.log("Dia útil")
    break
}

// 6. Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
let numero

do {
  let numero = Number(prompt("Digite um número (para finalizar, digite 0): "))
  if (numero > 0) {
    console.log('Positivo!')
  } else if (numero == 0) {
    break
  } else {
    console.log('Negativo!')
  }

} while (numero !== 0)

console.log("Zero digitado, finalizando.")

// 7. Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.
let senha = '2807'
let senhaDigitada

do {
  senhaDigitada = prompt('Digite a senha: ')

  if (senha != senhaDigitada) {
    console.log('Senha inválida!')
  } else {
    console.log("Acesso permitido!")

  }

} while (senha != senhaDigitada)
