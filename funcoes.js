function parOuImpar(valor) {
  let resultado

  if(valor % 2 === 0) {
    resultado = 'PAR'
  } else {
    resultado = 'ÍMPAR'
  }
  return resultado
}

console.log(parOuImpar(3))

function calcularArea(altura, largura) {
  return altura * largura
}

console.log(calcularArea(10, 10))

// Função que retorna um array ordenado:
let numeros = [8, 3, 102, 44, 20, -5, 92]
function ordenarArray(array) {
  return array.sort((a, b) => a - b)
}

console.log(ordenarArray(numeros))

// Exemplo:

let erro = function() {
  console.log('Erro na requisição!')
}

function requisicao(sucesso, erro) {
  if(true) {
    sucesso('Sucesso na requisição!')
  } else {
    erro()
  }
}

requisicao((msg) => console.log(msg), erro)

// Função que soma elementos de um array:

let resultado
function somarValores(array) {
  resultado = array.reduce((acc, numero) => {
    return acc += numero
  }, 0)
  return resultado
}

console.log(somarValores(numeros))

// Função que retorna o maior número em um array:

function maiorNumero(array) {
  let maior = array[0]

  for(let i = 0; i < array.length; i++) {
    if(array[i] > maior) {
      maior = array[i]
    }
  }

  return maior
}

console.log(maiorNumero(numeros))
