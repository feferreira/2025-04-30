class Exam {
    constructor(answer, weight) {
        this.weight = weight;
        this.answer = answer;
        this.exams = []; // guarda as respostas enviadas pelo aluno
    }

    adicionarResposta(respostaAluno) {
        this.exams.push(respostaAluno); // adiciona a resposta do aluno para essa questão
    }

    calcularMedia() {
        // verifica quantas respostas estão corretas e soma os pesos das que foram acertadas
        if (this.exams.length === 0) return 0;

        let pesoTotal = 0;
        let respostasCertas = 0;

        for (let i = 0; i < this.exams.length; i++) {
            if (this.exams[i] === this.answer) {
                pesoTotal += this.weight; // soma o peso dessa questão na nota final
                respostasCertas++;
            }
        }

        return respostasCertas > 0 ? pesoTotal / respostasCertas : 0;
    }

    minimo(quantidade = 1) {
        return this.exams.slice(0, quantidade); // pega as primeiras respostas registradas
    }

    maximo(quantidade = 1) {
        return this.exams.slice(-quantidade); // pega as últimas respostas registradas
    }

    menorQue(limite) {
        return this.exams.filter(resposta => resposta < limite); // retorna respostas menores que o valor informado
    }

    maiorQue(limite) {
        return this.exams.filter(resposta => resposta > limite); // retorna respostas maiores que o valor informado
    }
}

// criando cada questão da prova com a resposta correta e peso correspondente
const questao1 = new Exam('a', 2);
const questao2 = new Exam('b', 2);
const questao3 = new Exam('a', 2);
const questao4 = new Exam('c', 2);
const questao5 = new Exam('d', 2);

// adicionando as respostas do aluno na prova
questao1.adicionarResposta('a'); 
questao2.adicionarResposta('b'); 
questao3.adicionarResposta('b'); // resposta errada
questao4.adicionarResposta('b'); // resposta errada
questao5.adicionarResposta('b'); // resposta errada

// somando as médias das questões para calcular a nota final do aluno
const notaFinal = questao1.calcularMedia() + questao2.calcularMedia() + questao3.calcularMedia() + questao4.calcularMedia() + questao5.calcularMedia();

console.log(`a nota final do aluno é: ${notaFinal.toFixed(1)}`);