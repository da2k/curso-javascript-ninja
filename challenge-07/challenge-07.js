/*
Crie um array com 5 items (tipos variados).
*/
var firstArray = [150, 'value', null, [1, 1], { prop: 'value' }];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    firstArray.push(item);
    return firstArray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var secondArray = [ 'a', 'b', 'c' ];
addItem(secondArray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + secondArray[1] + '.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + firstArray.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + secondArray.length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var i = 10;
while(i <= 20) {
    i % 2 === 0 ? console.log(i++) : i++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var n = 10;
while(n <= 20) {
    n % 2 !== 0 ? console.log(n++) : n++; 
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var t = 100; t <= 120; t++) {
    t % 2 === 0 ? console.log(t++) : t++;
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var e = 111; e <= 125; e++) {
    e % 2 !== 0 ? console.log(e++) : e++; 
}