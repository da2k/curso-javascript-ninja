/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, "Camila", { fruta: "Laranja" }, true, function() {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newItem) {
    arr.push(newItem);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/ 
console.log(addItem([2, "Chewbacca", { animal: "Gato"}]));
/*
  [1,
  'Camila',
  { fruta: 'Laranja' },
  true,
  [Function],
  [ 2, 'Chewbacca', { animal: 'Gato' } ] 
*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr[5][1] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;

console.log( 'Números pares entre 10 e 20:');

while (num <= 20) {
    num % 2 === 0 ? console.log(num) : "";
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var num = 10;

while (num <= 20) {
    num % 2 !== 0 ? console.log(num) : "";
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for (var i = 100; i <= 120; i++) {
    i % 2 === 0 ? console.log(i) : "";
}

console.log( 'Números ímpares entre 111 e 125:' );

for (var i = 111; i <= 125; i++) {
    i % 2 !== 0 ? console.log(i) : "";
}
