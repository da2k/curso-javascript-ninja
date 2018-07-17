/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'Paulo', [1, 2, 3, 4, 5], function soma(num1, num2) { return num1 + num2; }, true];

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
console.log(addItem());

console.log(addItem([1, 'a', false]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('\nO segundo elemento do segundo array é = ' + arr[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('\nO primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O segundo array tem ' + arr[6].length + ' itens.\n');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var numPar = 10;
while (numPar <= 20) {

    if (numPar % 2 === 0) {
        console.log('Números pares entre 10 e 20: ' + numPar);
    }

    numPar++;
}

console.log('\n');

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var numImpar = 10;
while (numImpar <= 20) {

    if (numImpar % 2 !== 0) {
        console.log('Números Impares entre 10 e 20: ' + numImpar);
    }

    numImpar++;
}
console.log('\n');
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var par = 100; par <= 120; par++) {

    par % 2 === 0 ? console.log('Números pares entre 100 e 120: ' + par) : '';
}

console.log('\n');

for (var impar = 111; par <= 125; par++) {

    impar % 2 !== 0 ? console.log('Números pares entre 111 e 125: ' + impar) : '';
}

