const prompt = require("prompt-sync")()

// ! Seção 1: Estruturas de Controle Avançadas
// ? 1. Validação de Datas
// ? Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// ? formarem uma data real (meses de 28–31 dias, ano bissexto para
// ? fevereiro) e false caso contrário.

// function ehBissexto(ano) {
//   return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
// }

// function ehDataValida(dia, mes, ano) {
//   const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//   if (mes < 1 || mes > 12) {
//     return false
//   }

//   if(ehBissexto(ano)) {
//     diasPorMes[1] = 29
//   }

//   return dia >= 1 && dia <= diasPorMes[mes - 1]
// }

// console.log(ehDataValida(30, 4, 2024))

// ? 2. Jogo de Adivinhação
// ? Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// ? usuário, para adivinhar. Use while para repetir até acertar, contando
// ? tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

// const numeroAleatorio = Math.floor(Math.random() * 100) + 1
// let palpiteUsuario = 0
// let tentativas = 0

// while (palpiteUsuario !== numeroAleatorio) {
//   palpiteUsuario = Number(prompt("Escolha um número de 1 a 100: "))
//   tentativas++

//   if(palpiteUsuario < numeroAleatorio) {
//     console.log('Mais alto!')
//   } else if(palpiteUsuario > numeroAleatorio) {
//     console.log('Mais baixo')
//   } else {
//     console.log(`Parabéns, você acertou o número com ${tentativas} tentativas!`)
//   }
// }

// ? 3. Palavras Únicas
// ? Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// ? todas as palavras únicas e exibi-las em um array.

// let str = "olá olá mundo mundo novo"
// let array = str.split(' ')
// let contagem = {}

// array.forEach((item) => {
//   if(!contagem[item]) {
//     contagem[item] = 1
//   } else {
//     contagem[item] += 1
//   }
// })

// let unicas = []

// for(let palavra in contagem) {
//   if(contagem[palavra] === 1) {
//     unicas.push(palavra)
//   }
// }

// console.log(unicas)

// ! Seção 2: Funções e Recursão
// ? 4. Fatorial Recursivo
// ? Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// ? um Error, e n === 0 retornando 1.

// function fatorial(n) {
//   if(n < 0) {
//     throw new Error("Número negativo não é válido para fatorial")
//   } else if (n === 0) {
//     return 1
//   } else {
//     return n * fatorial(n - 1)
//   }
// }

// console.log(fatorial(5))

// ? 5. Debounce
// ? Crie function debounce(fn, delay) que receba uma função fn e um delay
// ? em ms, retornando uma nova função que só executa fn se não for
// ? chamada novamente dentro do intervalo.

// function debounce(fn, delay) {
//   let timer

//   return function (...args) {
//     if(timer) {
//       clearTimeout(timer)
//     }

//     timer = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }

// function saudacao(nome) {
//   console.log(`Oi, ${nome}!`)
// }

// const saudacaoDebounced = debounce(saudacao, 2000)

// saudacaoDebounced('Jacques')

// ? 6. Memoization
// ? Implemente function memoize(fn) que armazene em cache chamadas
// ? anteriores de fn (por argumentos), retornando resultados instantâneos em
// ? repetidas invocações.

// function memoize(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn.apply(this, args);
//     cache.set(key, result);

//     return result;
//   };
// }

// const fastFib = memoize(function fibonacci(n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });

// console.log(fastFib(10));

// ! Seção 3: Arrays e Objetos Complexos
// ? 7. Mapeamento e Ordenação
// ? Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// ? retorne um novo array apenas com os nomes, ordenados por preço
// ? crescente, usando map, sort.

// ? 8. Agrupamento por Propriedade
// ? Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// ? cada chave é um cliente e o valor é a soma de todos os seus total.

// ? 9. Conversão Entre Formatos
// ? Escreva duas funções:
// ? ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// ? valor], ... ] e retorna o objeto equivalente.
// ? ○ objetoParaPares(obj) faz o inverso, retornando um array de
// ? pares.
