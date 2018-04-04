/*
Crie um array com 5 items (tipos variados).
*/

var array = [ 'a', 2, 3, 5, { cor: 'azul' }]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(i) {
    
    array += i
    return array
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem(list= [2,3,4])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log( 'O segundo elemento do segundo array é '+list[1]+'.' )

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log("O primeiro array tem ["+array.length+"] itens." )

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log("O primeiro array tem ["+list.length+"] itens." )

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

a = 10;
while (a <= 20 ) {
    a % 2 === 0 ? console.log(a) : '';
    a++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

a = 10;
while (a <= 20 ) {
    a % 2 === 1 ? console.log(a) : '';
    a++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for( var n = 99 ; n <= 121 ; n++ ){
    console.log(n % 2 === 0 ? console.log(n) : '')
}

for( var n = 110 ; n <= 126 ; n++ ){
    console.log(n % 2 === 1 ? console.log(n) : '')
}
