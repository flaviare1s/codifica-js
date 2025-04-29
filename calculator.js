const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let operador = prompt("Digite o operador: ")

switch (operador) {
  case "+":
    console.log(num1 + num2)
    break
  case "-":
    console.log(num1 - num2)
    break
  case "*":
    console.log(num1 * num2)
    break
  case "/":
    if (num2 === 0) {
      console.log("Erro: divisão por zero não é permitida")
    } else {
      console.log(num1 / num2)
    }
    break
  default:
    console.log("Operador inválido")
    break
}
