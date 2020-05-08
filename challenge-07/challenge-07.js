/*
Crie um array com 5 items (tipos variados).
*/
// 
let array = ['batata', 0, true, 1<0, function Teste(){console.log('teste')}];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
//
function addItem(item){
    array.push(item);
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// 
let array2= ['farofa', null, 97];
addItem(array2);
console.log(array) 
/*
[ 'batata',
  0,
  true,
  false,
  [Function: Teste],
  [ 'farofa', null, 97 ] ]
*/
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// 
console.log(`O segundo elemento do segundo array é ${array2[1]}.`); // O segundo elemento do segundo array é null.
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
//
console.log(`O primeiro array tem ${array.length} itens.`); //O primeiro array tem 6 itens.
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// 
console.log(`O segundo array tem ${array2.length} itens`); //O segundo array tem 3 itens.
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
//
function pares(inicio,fim){
    let num = inicio;
    let array = [];
    while(num <= fim){
        num%2===0 && array.push(num);
        num++;
    }
    console.log(array);
}
pares(10,20); // [ 10, 12, 14, 16, 18, 20 ]

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// 
function impares(inicio,fim){
    let num = inicio;
    let array = [];
    while(num <= fim){
        num%2!==0 && array.push(num);
        num++;
    }
    console.log(array);
}
impares(10,20); //[ 11, 13, 15, 17, 19 ]
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
//
function pares2(inicio,fim){
    let num = inicio;
    let array = [];
    
    for(let i=inicio; i<=fim;i++){
        num%2===0 && array.push(num);
        num++;
    }
    console.log(array);
}
pares(100,120); //[ 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120 ]

console.log( 'Números ímpares entre 111 e 125:' );
// 
function impares2(inicio,fim){
    let num = inicio;
    let array = [];
    console.log(`Números ímpares entre ${inicio} e ${fim}:`);
    for(let i=inicio; i<=fim;i++){
        num%2!==0 && array.push(num);
        num++;
    }
    console.log(array);
}
impares2(111,125); //[ 111, 113, 115, 117, 119, 121, 123, 125 ]
