/*
Crie um array com 5 items (tipos variados).
*/
// ?

var arr = [1, null, undefined, {tenis: 'adidas', cor: 'branco'}, ['Lu', 58, false]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

//function addItem(arr) {
//    return console.log(arr);
//}

function addItem(item) {
    arr.push(item);
    return arr;
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

//addItem(arr.push( [13, 'La', true]) );

console.log(addItem([13, 'La', true]));


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log("O segundo elemento do segundo array é " + arr[5][1] + " .")

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

addItem( "O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

addItem( "O segundo array tem " + arr[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

console.log( 'Números pares entre 10 e 20:');
            
var numbersEven = 10;

while(numbersEven <= 20) {
    (numbersEven) % 2 === 0 ? console.log(numbersEven) : ' ';
    numbersEven++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

console.log( 'Números ímpares entre 10 e 20:'); 
            
var numbersOdd = 10;

while(numbersOdd < 20) {
    (numbersOdd) % 2 !== 0 ? console.log(numbersOdd) : ' ';
    numbersOdd++;
}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/


console.log( 'Números pares entre 100 e 120:');

for(var numbersEven2 = 100; numbersEven2 <= 120; numbersEven2++) {
    (numbersEven2) % 2 === 0 ? console.log(numbersEven2) : ' ';
}

console.log( 'Números ímpares entre 111 e 125:' );

for(var numbersOdd2 = 111; numbersOdd2 <= 125; numbersOdd2++) {
    (numbersOdd2) % 2 !== 0 ? console.log(numbersOdd2) : ' ';
}