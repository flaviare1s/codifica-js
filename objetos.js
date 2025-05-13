let livro = {
  nome: 'Um Sonho de Liberdade',
  anoLancamento: 2024,
  autor: 'Will Smith',
  nrPaginas: 344,
  genero: 'comédia',
  atores: ['José', 'João', 'Maria'],

  mostrarCaracteristicas: function() {
    return `${this.nome} é um livro muito divertido!`
  }
}

console.log(livro.mostrarCaracteristicas())

// Clonando objetos:

let livro2 = livro // Passa a referência
let livro3 = {...livro} // Passa o conteúdo

livro2.preco = 20

console.log(livro)
console.log(livro2)
console.log(livro3)
