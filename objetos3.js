// Calculem as médias das notas da turma:

let professor = {
  nome: 'Stark Parker',
  materia: 'Física',
  notas: {
    aluno1: [5, 2],
    aluno2: [3, 7]
  }
}

let somaNotas = 0
let numeroAlunos = 0

for(let aluno in professor.notas) {
  somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

  numeroAlunos++
}

let media = somaNotas / numeroAlunos

if(media >= 6) {
  console.log(`A média é ${media} e está acima do padrão!`)
} else {
  console.log(`A média é ${media} e está abaixo do padrão!`)
}
