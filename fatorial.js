function fatorial(numero) {
let fatorial = 1;

  for(let i = 1; i <= numero; i++) {
    fatorial = fatorial * i
  }
  console.log(fatorial)
}

fatorial(5)
