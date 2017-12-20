/*
Crie um array com 5 items (tipos variados).
*/
let myarray = ['Diogo', {categoria: 'Veiculos'}, 1, null, nomes = ['Josevaldo', 'Lindolfo', 'Claudemir']];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(item) {
    myarray.push(item);
    return myarray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let newArray = ['Belo Horizonte', undefined, 1000]
addItem(newArray)
console.log(myarray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O Segundo elemento do segundo array é ' + myarray[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O Primeiro Array tem ' + myarray[4].length+ ' itens');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O Primeiro Array tem ' + myarray[5].length+ ' itens');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var indice = 10;

while(indice !== 20) 
{
    var resultado = indice % 2 !== 0 ? 'Impar':'Par';

    if(resultado === 'Impar')
    {
        console.log(indice);
    }

    indice ++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

console.log( 'Números pares entre 100 e 120:' );

for(indice2 = 100; indice2 <= 120; indice2 ++)
{
    var resultado = indice2 % 2 !== 0 ? 'Par':'Impar';

    if(resultado === 'Impar')
    {
        console.log(indice2);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for(indice3 = 111; indice3 <= 125; indice3 ++)
{
    var resultado = indice3 % 2 !== 0 ? 'Impar':'Par';

    if(resultado === 'Impar')
    {
        console.log(indice3);
    }
}