let livraria = [
  {
    titulo: "1984",
    autor: "George Orwell",
    anoLancamento: 2001,
  },
  {
    titulo: "O Profeta",
    autor: "Khalil Gibran",
    anoLancamento: 2003,
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoLancamento: 1605,
  },
  {
    titulo: "O Senhor dos Aneis",
    autor: "JRR Tolkien",
    anoLancamento: 1954,
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupery",
    anoLancamento: 1943,
  },
]

// ? Quais os livros publicados antes do ano 2000?

// for(let livro of livraria) {
//   if(livro.anoLancamento < 2000) {
//     console.log(livro)
//   }
// }

let filmes = [
  {titulo: "Star Wars", genero: "ficção"},
  {titulo: "O Senhor dos Aneis", genero: "fantasia"},
  {titulo: "O Pequeno Príncipe", genero: "desenho"},
  {titulo: "O Hobbit", genero: "fantasia"},
  {titulo: "Silent Hill", genero: "terror"},
  {titulo: "O Exorcista", genero: "terror"},
  {titulo: "O Exorcista 2", genero: "terror"},
  {titulo: "Indiana Jones", genero: "aventura"},
  {titulo: "Indiana Jones 2", genero: "aventura"},
  {titulo: "Esqueceram de mim", genero: "comédia"},
  {titulo: "Meu Primeiro Amor", genero: "drama"}
]

// Listem a quantidade de filmes de cada gênero

let contagem = {}

filmes.forEach((filme) => {
  if(contagem[filme.genero]) {
    contagem[filme.genero] ++
  } else {
    contagem[filme.genero] = 1
  }
})

console.table(contagem)

for(let genero in contagem) {
  console.log(`Estão presentes na lista ${contagem[genero]} filmes do gênero ${genero}.`)
}
