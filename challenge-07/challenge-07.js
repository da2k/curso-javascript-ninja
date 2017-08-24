/*
Crie um array com 5 items (tipos variados).
*/
var items = [

    true,
    function() {console.log('hi')},
    [1, 'string', 2 * 10],
    {prop1: 'azul', prop2: 45, prop3: true},
    'a string'
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(array, item) {

    array.push(item);
    return array;
}

/*
function addItem(item) {

    items.push(item);
    return items;
}
*/

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(items, [

    function() {console.log('hi!')},
    {prop1: 'test', prop2: 56, prop3: 'string'},
    true
    ]
));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + items[5][1].prop2 + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + items.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + items[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var counter = 10;

while(counter <= 20) {

    counter % 2 === 0 ? console.log(counter) : '';
    counter++;
}

/*
while(counter <= 20) {

    var even = counter % 2 === 0;

    even ? console.log(counter) : '';
    counter++;
}
*/

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var counter = 10;

while(counter < 20) {

    counter % 2 !== 0 ? console.log(counter) : '';
    counter++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(var i = 100; i <= 120; i++) {

    i % 2 === 0 ? console.log(i) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );

for(var counter = 111; counter <= 125; counter++) {

    if (counter % 2 !== 0) {

        console.log(counter);
    }
}
