// Soma dos numeros de 1 até n

// function soma(n) {
//   if(n === 1) {
//     return 1
//   } else {
//     return n + soma(n - 1);
//   }
// }

// console.log(soma(5))

// Fibonacci

// function fibonacci(n) {
//   if(n === 0) {
//     return 0
//   } else if(n === 1) {
//     return 1
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2)
//   }
// }

// console.log(fibonacci(10))

let categorias = [
  {
    id: 1,
    nome: "Eletrônicos",
    filhos: [
      { id: 2, nome: "Celulares", filhos: [] },
      { id: 3, nome: "Computadores", filhos: [
        {id: 4, nome: "Tablets", filhos: []}
      ] },
    ],
  },
  {
    id: 5,
    nome: "Louças",
    filhos: []
  }
];

function imprimirCategorias(lista, nivel = 0) {
  for(let categoria of lista) {
    console.log(" ".repeat(nivel * 2) + categoria.nome)
    if(categoria.filhos.length > 0) {
      imprimirCategorias(categoria.filhos, nivel + 1)
    }
  }
}

imprimirCategorias(categorias)
