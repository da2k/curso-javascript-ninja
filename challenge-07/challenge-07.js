/*
Crie um array com 5 items (tipos variados).
*/
var arrOne = [
    'marcelo',
    35,
    true,
    [13, 12, 1982],
    {programando: 'sim'}
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arr, item) {
    arr.push(item);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var arrTwo = addItem(arrOne, ['javascript', 2017, { desafio: 'challenge-07' }]);
console.log( arrTwo );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + arrTwo[1] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arrOne.length + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem ' + arrTwo.length + ' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var evenNum = 10;
while(evenNum <= 20) {
    evenNum % 2 === 0 ? console.log(evenNum) : '';
    evenNum += 2;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var oddNum = 10;
while(oddNum <= 20) {
    oddNum % 2 !== 0 ? console.log(oddNum) : '';
    oddNum += 1;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var num = 100; num <= 120; num++) {
    num % 2 === 0 ? console.log(num) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var num = 111; num <= 125; num++) {
    num % 2 !==0 ? console.log(num) : '';
}