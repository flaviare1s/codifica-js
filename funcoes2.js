// let nome = 'Amizade e paz'

// console.log(nome.length)

// console.log(nome.charAt(0))

// console.log(nome.indexOf('z'))

// console.log(nome.replace('paz', 'amor'))

// console.log(nome.substr(0, 7))

// console.log('    Carro')
// console.log('     Carro'.trim())

// console.log(nome.split(''))

// // Faça uma função que inverta uma string:

// function inverter(string) {
//   return string.split('').reverse().join('')
// }

// console.log(inverter(nome))

// function inverter2(str) {
//   let reversed = ''
//   for(let i = str.length -1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed;
// }

// console.log(inverter2('batata'))

// // Encontre o numero de vogais em uma string

// function contarVogais(string) {
//   const vogais = string.match(/[aeiouáéíóúâêôãõàèìòùäëïöü]/gi)
//   return vogais ? vogais.length : 0
// }

// console.log(contarVogais('Aniversário'))

// // Math
// console.log(Math.random() * 100)
// console.log(Math.floor(100.2))
// console.log(Math.ceil(100.2))
// console.log(Math.round(100.2))

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// console.log(Math.pow(2, 3))
// console.log(Math.sqrt(9))
// console.log(Math.abs(-10))
// console.log(Math.abs(10))

// // Gere um número aleatório entre 3 e 10:
// let max = 11
// let min = 6
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Datas

let date = new Date()
console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.toString())

let date1 = new Date(2015, 7, 7)
let date2 = new Date(2024, 7, 7)

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
console.log(milissegundosEntreDatas)

let milissegundosPorDia = 1000 * 60 * 60 * 24
console.log(`A diferença entre as datas em dias é de ${milissegundosEntreDatas / milissegundosPorDia} dias`)

function formatarData(data) {
  let dia = String(data.getDate()).padStart(2, "0");
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

console.log(formatarData(date1))

// Função para somar duas matrizes:

function somarMatrizes(matrizA, matrizB) {
  let matrizC = []
  for(let i = 0; i < matrizA.length; i++) {
    matrizC[i] = []
    for(let j = 0; j < matrizA[i].length; j++) {
      matrizC[i][j] = matrizA[i][j] + matrizB[i][j]
    }
  }
  return matrizC
}

let matrizA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let matrizB = [[10, 11, 12], [13, 14, 15], [16, 17, 18]]
console.table(somarMatrizes(matrizA, matrizB))
