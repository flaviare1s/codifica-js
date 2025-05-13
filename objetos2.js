let filme = {
  titulo: "High School Musical",
  anoLancamento: 2006,
  diretor: "Rob Schneider",
  atores: ["Jenna Usga", "Cameron Boyce", "Alyson Hannigan", "Zac Efron"],
  genero: "musical",

  mostrarCaracteristicas: function () {
    return `${this.titulo} é um filme muito divertido!`
  }
}

console.log(filme.mostrarCaracteristicas())

// For In
for(let key in filme) {
  console.log(key)
}
