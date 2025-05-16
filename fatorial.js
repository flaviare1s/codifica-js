// function fatorial(numero) {
// let fatorial = 1;

//   for(let i = 1; i <= numero; i++) {
//     fatorial = fatorial * i
//   }
//   console.log(fatorial)
// }

// fatorial(5)

function fatorial(n) {
  if(n === 0) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))
