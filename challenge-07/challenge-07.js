/*
Crie um array com 5 items (tipos variados).
*/
var arrayVariado = ["DA2K", 3.1415, {maiorDeTodos: "VASCO"}, undefined, NaN];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(value){
    arrayVariado.push(value);
    return arrayVariado;
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( ["Javascript", 0, true] );
console.log( arrayVariado );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( arrayVariado[5][1] );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( "O primeiro array tem " + arrayVariado.length + " itens." );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( "O segundo array tem " + arrayVariado[5].length + " itens." );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var counter = 0;
while( counter<= 10 ) {
    counter % 2 === 0 ? console.log(10 + counter) : '';
    counter++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
counter = 0;
while( counter<=10 ) {
    counter % 2 !== 0 ? console.log(10 + counter) : '';
    counter++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for( var contador = 0 ; contador<=20 ; contador++ ){
    contador % 2 === 0 ? console.log(100 + contador) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for( var contador = 0 ; contador<=15 ; contador++) {
    contador % 2 !== 0 ? console.log(110 + contador) : '';
}
