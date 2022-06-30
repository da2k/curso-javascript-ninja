/*
Crie um array com 5 items (tipos variados).
*/

precoFrutas = [['Banana','Prata', 'São Paulo', 2022, 2.75]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem (newItem) {
    precoFrutas.push (newItem);

    return precoFrutas;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem (['Melão','Amarelo', 'Rio Grande do Norte', 2022, 4.19]);

console.log (precoFrutas);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log ("O segundo elemento do segundo array é " + precoFrutas[1][2] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log ("O primeiro array tem " + precoFrutas[0].length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log ("O segundo array tem " + precoFrutas[1].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var num = 10;

while (num <= 20) {
    num % 2 == 0 ? console.log('Números pares entre 10 e 20 são:' + num ) : '';

    num ++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var num = 10;

while (num <= 20) {
    num % 2 == 1 ? console.log('Números ímpares entre 10 e 20 são:' + num ) : '';

    num ++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (let c = 100; c <= 120; c++) {
    c % 2 == 0 ? console.log( 'Números pares entre 100 e 120: ' + c ): '';
};

for (let c = 111; c <= 125; c++) {
    c % 2 == 1 ? console.log( 'Números ímpares entre 111 e 125: ' + c ) : '';
};

