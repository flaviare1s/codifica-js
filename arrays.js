let listaFrutas = Array()

listaFrutas[0] = 'maçã'
listaFrutas[1] = "morango"
listaFrutas['adocicadas'] = 'pera'

console.table(listaFrutas)

for(let i = 0; i < listaFrutas.length; i++) {
  console.log(listaFrutas[i])
}

// Adicionando um elemento ao final do array
listaFrutas.push('banana')

// Adicionando um elemento ao inicio do array
listaFrutas.unshift('laranja')

console.table(listaFrutas)

// Removendo o ultimo elemento do array
listaFrutas.pop()

console.table(listaFrutas)

// Removendo o primeiro elemento do array
listaFrutas.shift()

console.table(listaFrutas)
