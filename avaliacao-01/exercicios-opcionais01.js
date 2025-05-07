const prompt = require('prompt-sync')();
// ? 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// ? Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// ? Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// ? vida um fumante perderá e exiba o total em dias.

// const cigarrosDia = Number(prompt('Quantos cigarros voce fuma por dia? '))
// const anosFumando = Number(prompt('Há quantos anos voce fuma? '))
// const totalCigarros = cigarrosDia * anosFumando * 365
// const minutosPerdidos = totalCigarros * 10
// const diasPerdidos = (minutosPerdidos / 1440).toFixed(2);

// console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida.`)

// ? 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h,
// ? exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// ? multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// const velocidadeMaxima = 80
// const velocidade = Number(prompt('Informe a velocidade: '))
// let excessoVelocidade = velocidade - velocidadeMaxima
// let multa = 0

// if(velocidade > velocidadeMaxima) {
//   let multa = excessoVelocidade * 5
//   console.log(`Você excedeu a velocidade em ${excessoVelocidade}km e foi multado em $${multa},00 reais!`)
// } else {
//   console.log('Velocidade dentro do limite permitido!')
// }

// ? 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// ? Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// ? R$ 0.45 para viagens mais longas.

// const distancia = Number(prompt('Informe a distância a ser percorrida (em km): '))

// if(distancia <= 200) {
//   console.log(`A passagem custa ${distancia * 0.5}`)
// } else {
//   console.log(`A passagem custa ${distancia * 0.45}`);
// }

// ? 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// ? comprimentos e diga se é possível formar um triângulo com essas retas.
// ? Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// ? lado deve ser menor que a soma dos outros dois.

// const ladoA = Number(prompt('Digite o valor do lado A: '))
// const ladoB = Number(prompt('Digite o valor do lado B: '))
// const ladoC = Number(prompt('Digite o valor do lado C: '))

// if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
//   console.log('É possível formar um triângulo com esses valores!')
// } else {
//   console.log("Não é possível formar um triângulo com esses valores!");
// }

// ? 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

// const opcoes = ['pedra', 'papel', 'tesoura']
// const jogadaUsuario = prompt('Escolha: pedra, papel ou tesoura? ').toLowerCase()
// const sorteio = Math.floor(Math.random() * opcoes.length)
// const jogadaPC = opcoes[sorteio]

// if (jogadaUsuario === jogadaPC) {
//   console.log('Empate!')
// } else if (
//   (jogadaUsuario === 'pedra' && jogadaPC === 'tesoura') ||
//   (jogadaUsuario === 'tesoura' && jogadaPC === 'papel') ||
//   (jogadaUsuario === 'papel' && jogadaPC === 'pedra')
// ) {
//   console.log('Você venceu!')
// } else {
//   console.log("Você perdeu!")
// }

// ? 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// ? tentar descobrir qual foi o valor sorteado.

// const numeroSorteado = Math.floor(Math.random() * 5) + 1
// const numeroJogador = Number(prompt('Escolha um número de 1 a 5: '))

// if(numeroSorteado === numeroJogador) {
//   console.log(`Número sorteado: ${numeroSorteado}. Parabéns, você venceu!`)
// } else {
//   console.log(`Número sorteado: ${numeroSorteado}. Não foi dessa vez!`)
// }

// ? 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// ? carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// ? cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// ? (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// ? mostre o preço a ser pago de acordo com os dados a seguir:
// ? Carros populares
// ? - Até 100 Km percorridos: R$ 0,20 por Km
// ? - Acima de 100 Km percorridos: R$ 0,10 por Km
// ? Carros de luxo
// ? - Até 200 Km percorridos: R$ 0,30 por Km
// ? - Acima de 200 Km percorridos: R$ 0,25 por Km

// ? 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// ? podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// ? sistema funciona assim:
// ? - até 10 h de atividade no mês: ganha 2 pontos por hora
// ? - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// ? - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// ? - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// ? Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// ? Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

// ? 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// ? mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// ? perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// ? funcionário.

// ? 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// ? cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// ? a) O somatório entre todos os valores;
// ? b) Qual foi o menor valor digitado;
// ? c) A média entre todos os valores;
// ? d) Quantos valores são pares.
