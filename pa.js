function pa(primeiroTermo, razao) {
  let soma = 0
  for(let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao
    console.log(termo)
    soma += termo
  }

  console.log(`A soma dos termos é ${soma}.`)
} 

pa(1, 3)
