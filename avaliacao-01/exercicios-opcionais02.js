const prompt = require("prompt-sync")();
// ? 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// ? Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// ? valores da sequência.

// function pa(primeiroTermo, razao) {
//   let soma = 0;
//   for (let i = 0; i < 10; i++) {
//     let termo = primeiroTermo + i * razao;
//     console.log(termo);
//     soma += termo;
//   }

//   console.log(`A soma dos termos é ${soma}.`);
// }

// pa(1, 3);

// ? 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// ? Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

// function fibonacci() {
//   let a = 0
//   let b = 1
//   let temp

//   console.log(a)
//   console.log(b)

//   for(let i = 3; i <= 10; i++) {
//     temp = a + b
//     console.log(temp)
//     a = b
//     b = temp
//   }
// }

// fibonacci()

// ? 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// ? atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// ? da sequência de Fibonacci.

// ? 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// ? mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// ? que eles foram informados.

// ? 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// ? final, mostre quais são os números pares que foram digitados e em que posições eles
// ? estão armazenados.

// ? 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// ? (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// ? depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

// ? 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// ? dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// ? os dados das pessoas menores de idade.

// ? 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// ? um funcionário e ao final escreva o conteúdo do registro.

// ? 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// ? repetição. Escrever cada um deles no formato HH.MM.SS.

// ? 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// ? no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// ? salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// ? tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ? Matrícula:
// ? Nome:
// ? Salário bruto:
// ? Dedução INSS:
// ? Salário líquido:
// ? (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// ? INSS).
