/*
Crie um array com 5 items (tipos variados).
*/

var arr = [1, true, 'Fernando', {animal: 'dog'}, [1, 3, 4]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    arr.push(item);

    return arr;
}   
console.log(arr);

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o result no console.
*/
console.log(addItem([1, 'Reis', {}]));
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arr[5][1] + '.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens'); 
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
var arrayResp = [];

//.push -> adicionando elementos no array.
while (num <= 20) {
    if(num % 2 ===  0){
        arrayResp.push(' ' + num);
    }
    num++; 
    i++;
}

console.log( 'Números pares entre 10 e 20:' +  arrayResp);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10;
var arrayResp = [];

//.push -> adicionando elementos no array.
while (num <= 20) {
    if(num % 2 ===  1){
        arrayResp.push(' ' + num);
    }
    num++; 
    i++;
}

console.log( '\n Números ímpares entre 10 e 20:' + arrayResp);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var recivValue = [];

for (var i = 100; i <= 120 ; i++) {
    i % 2 === 0 ? recivValue.push(' ' + i) : ' ';
}

console.log( '\nNúmeros pares entre 100 e 120:' + recivValue);
// ?

for (var i = 111; i <= 125 ; i++) {
    i % 2 === 1 ? recivValue.push(' ' + i) : ' ';
}

console.log( '\nNúmeros ímpares entre 111 e 125:' + recivValue);
// ?