// função que soma todos os elementos do vetor
function sum(vetor) {
    return vetor.reduce((total, num) => total + num, 0);
}

// função que soma apenas os números ímpares
function sumOdds(vetor) {
    return vetor.filter(num => num % 2 !== 0).reduce((total, num) => total + num, 0);
}

// função que multiplica todos os elementos do vetor
function product(vetor) {
    return vetor.reduce((total, num) => total * num, 1);
}

// testando com os exemplos da tabela
const vetor1 = [1, 2, 3];
const vetor2 = [2, 2, 2];
const vetor3 = [1, 2, 3, 4, 5, 6];

console.log(`sum(vetor1): ${sum(vetor1)}`); // 6
console.log(`sum(vetor2): ${sum(vetor2)}`); // 6
console.log(`sum(vetor3): ${sum(vetor3)}`); // 21

console.log(`sumOdds(vetor1): ${sumOdds(vetor1)}`); // 4
console.log(`sumOdds(vetor2): ${sumOdds(vetor2)}`); // 0
console.log(`sumOdds(vetor3): ${sumOdds(vetor3)}`); // 9

console.log(`product(vetor1): ${product(vetor1)}`); // 6
console.log(`product(vetor2): ${product(vetor2)}`); // 8
console.log(`product(vetor3): ${product(vetor3)}`); // 720
