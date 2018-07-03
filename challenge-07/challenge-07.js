/*
Crie um array com 5 items (tipos variados).
*/
var arr = ["olá", "tudo bem?", 12, {}, function(){}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(add) {
    arr.push(add);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(["liziane", "felix", 26]);

console.log(arr[5][0]);
console.log(arr[5][1]);
console.log(arr[5][2]);

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

var numberWhilePar = "",
    contador = 10;

while (contador <= 20) {
   
    if(contador%2==0){
        numberWhilePar += contador + " ";
    }
    contador++;
}

console.log( 'Números pares entre 10 e 20: ' + numberWhilePar);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var numberWhileImpar = "",
    contador = 10;

while (contador < 20) {
   
    if(contador%2!=0){
        numberWhileImpar += contador + " ";
    }
    contador++;
}

console.log( 'Números ímpares entre 10 e 20: ' + numberWhileImpar);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

var loopFor = "";
for (var contador = 100; contador <= 120; contador++) {
    if (contador%2==0) {
        loopFor += contador + " ";
    }
}
console.log( 'Números pares entre 100 e 120: ', loopFor);

var loopForImpar = "";
for (var contador = 111; contador <= 125; contador++) {
    if (contador%2!=0) {
        loopForImpar += contador + " ";
    }
}

console.log( 'Números ímpares entre 111 e 125: ', loopForImpar);
// ?