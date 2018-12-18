/*
Crie um array com 5 items (tipos variados).
*/
var array1 = [ 'Gustavo', 599, true, function() {}, { sobrenome: 'koch', idade: 28 } ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( newItem ) {
    array1.push( newItem );
    return array1;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem([ 100, 'Djefeline', false ]) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é '+ array1[5][1] +'.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem '+ array1.length +' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem '+ array1[5].length +' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var count = 10;
while( count <= 20 ) {
    if( count % 2 === 0 ) {
        console.log( count );
    }
    count++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var count = 10;
while( count <= 20 ) {
    if( count % 2 === 1 ) {
        console.log( count );
    }
    count++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for( var count = 100; count <= 120; count++ ) {
    if( count % 2 === 0 ) {
        console.log( count );
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for( var count = 111; count <= 125; count++ ) {
    if( count % 2 === 1 ) {
        console.log( count );
    }
}