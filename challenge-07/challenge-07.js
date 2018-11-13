/*
Crie um array com 5 items (tipos variados).
*/
var array = ["String", 26, null, undefined, function(val){return val}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(novoItem) {
    array.push(novoItem);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([1,"um",null]);
(6) ["String", 26, null, undefined, ƒ, Array(3)]

array[5];
(3) [1, "um", null]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+ array[5][1] +".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var array = ["String", 26, null, undefined, function(val){return val}];
console.log("O primeiro array tem "+array.length+" itens.");
O primeiro array tem 5 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
addItem([1,"um",null]);
console.log("O primeiro array tem "+array.length+" itens.");
O primeiro array tem 6 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
num = 10;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
while (num < 20) {
    num % 2 !== 0 ? console.log(num) : '';
    num++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (let index = 100; index <= 120; index++) {
    index % 2 === 0 ? console.log(index) : ''; 
}

for (let index = 111; index <= 125; index++) {
    index % 2 !== 0 ? console.log(index) : ''; 
}
// ? 