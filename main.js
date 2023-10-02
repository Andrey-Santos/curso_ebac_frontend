// Exemplo de uso do método filter
var alunos = [
    {
        nome: "João",
        nota: 8.5
    },
    {
        nome: "Maria",
        nota: 9.0
    },
    {
        nome: "Pedro",
        nota: 7.0
    },
    {
        nome: "Ana",
        nota: 5.5
    }
];

function buscaAlunosAprovados(aluno){
    return alunos.filter(alunos => (alunos.nota >= 6));

}

// Imprime o resultado no console
console.log(buscaAlunosAprovados);
