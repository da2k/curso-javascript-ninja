/*
Crie um array com 5 items (tipos variados).
*/
var arr1 = ['fabio', 1, true, {game: 'pc'}, null ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newArrayitem) {
    arr1.push(newArrayitem);
    return arr1;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( [function(){}, ['banana','laranja','maça'], false ] );
console.log(arr1);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+arr1[5][1]+'.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+arr1.length+' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+arr1[5].length+' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var counter10to20 = 10;
    while (counter10to20 <= 20){
        counter10to20 % 2 === 0 ? console.log(counter10to20) : '';
        counter10to20++;
    };

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var counter10to20 = 10;
    while (counter10to20 <= 20){
        counter10to20 % 2 !== 0 ? console.log(counter10to20) : '';
        counter10to20++;
    };

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var counterto120 = 100; counterto120 <=120; counterto120++){
    counterto120 % 2 === 0 ? console.log(counterto120) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var counterto125 = 111; counterto125 <=125; counterto125++){
    counterto125 % 2 !== 0 ? console.log(counterto125) : '';
}
