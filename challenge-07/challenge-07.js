/*
Crie um array com 5 items (tipos variados).
*/
var grupo = [ 'Serrones', 1, ['null', 'full' ], { bola: 'redonda'}, function() {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(some) {
    grupo.push(some);
    return grupo
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem( [ 'ananas', 'pineaple', 'abacaxi' ] ) );
console.log('----------------------------------------------')

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/


console.log( 'O segundo elemento do segundo array é ', grupo[5][1] );
console.log('----------------------------------------------')

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( "O primeiro array tem ", grupo.length , " itens." );
console.log('----------------------------------------------')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( "O segundo array tem ", grupo[5].length ," itens." );
console.log('----------------------------------------------')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('----------------------------------------------')
console.log( 'Números pares entre 10 e 20:' );

var num = 10;

while ( num <= 20 ) {
    console.log(num);
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('----------------------------------------------')
console.log( 'Números ímpares entre 10 e 20:' );

var num = 11;

while (num <= 19) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('----------------------------------------------')
console.log( 'Números pares entre 100 e 120:' );
for (var num = 100; num <= 120; num++) {
    if ( num % 2 == 0 ) {
        console.log(num);
    }
}



console.log('----------------------------------------------')
console.log( 'Números ímpares entre 111 e 125:' );
for (var num = 100; num <= 120; num++) {
    if ( num % 2 == 1 ) {
        console.log(num);
    }
}
