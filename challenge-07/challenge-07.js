/*
Crie um array com 5 items (tipos variados).
*/
var array = [null, 1, 'array', [], {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newItem) {
    array.push(newItem);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([undefined, function(){}, 'igorwm9']));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento array é ' + array[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var count1 = 0;
while(count1 <= 20){
    if (count1 % 2 === 0) {
        console.log( 'Números pares entre 10 e 20: ' + count1 );
    }
    count1++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var count2 = 0;
while(count2 <= 20){
    if (count2 % 2 !== 0) {
        console.log( 'Números ímpares entre 10 e 20: ' + count2 );
    }
    count2++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var index = 100; index <= 120; index++) {
    if (index % 2 === 0) {
        console.log('Números pares entre 100 e 120: ' + index);
    }    
}

for (var index = 111; index <= 125; index++) {
    if (index % 2 !== 0) {
        console.log('Números ímpares entre 111 e 125: ' + index);
    }    
}
