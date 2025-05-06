let matriz = []
let somaDiagonal = 0

for(let i = 0; i < 3; i++) {
  matriz[i] = []

  for(let j = 0; j < 3; j++) {
    matriz[i][j] = 10
    if(i == j) {
      somaDiagonal += matriz[i][j]
    }
  }
}

console.table(matriz)
console.log(somaDiagonal)


// let mercado = []
// mercado['frutas'] = ['maçã', 'abacaxi', 'uva']
// mercado['bebidas'] = ['água', 'suco', 'chá']
// console.table(mercado)
