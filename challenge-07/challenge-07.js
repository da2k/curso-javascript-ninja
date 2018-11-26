/*
Crie um array com 5 items (tipos variados).
*/
var arr1 = [1, "oi", { bola: "azul" }, null, function (x, y) { return x * y }];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addITem(x) {
    arr1.push(x);
    return arr1;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

arr1.push([undefined, true, { nome: "Rodrigo" }])
console.log(arr1);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr1[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr1.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr1[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
var par = [];
while (num <= 20) {
    if (num % 2 === 0) {
        par.push(num);
    }
    num += 1
}
console.log('Números pares entre 10 e 20: ' + par);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10;
var impar = [];
while (num <= 20) {
    if (num % 2 !== 0) {
        impar.push(num);
    }
    num += 1
}
console.log('Números ímpares entre 10 e 20: ' + impar);


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var par = [];
for (var i = 100; i <= 120; i++) {
    if (i % 2 === 0) {
        par.push(i);
    }
}
console.log('Números pares entre 100 e 120: ' + par);

var impar = [];
for (var i = 111; i <= 125; i++) {
    if (i % 2 !== 0) {
        impar.push(i);
    }
}
console.log('Números ímpares entre 111 e 125: ' + impar);
// ?
