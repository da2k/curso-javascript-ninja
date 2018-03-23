/*
Crie um array com 5 items (tipos variados).
*/
var array = ['ricardo',19,'vasconcelos','maceió',1.70];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    array.push(item);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(adiciona = ['unit',2018,'ComputerScience']);
//["ricardo", 19, "vasconcelos", "maceió", 1.7, Array(3)]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+adiciona[1]);
//O segundo elemento do segundo array é 2018

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+array.length+' itens.');
//O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+adiciona.length+' itens.');
//O primeiro array tem 3 itens.
/*

Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
while(numero <= 20){
    if(numero % 2 === 0){
        console.log(numero);
    } 
  numero++; 
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
while(numero <= 20){
    if(numero % 2 === 1){
        console.log(numero);
    } numero++; 
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var i = 100; i <= 120; i++){
    if( n % 2 === 0){
        console.log(n);
        
    }
    n++;
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var i = 111; i <= 125; i++){
    if( n % 2 === 1){
        console.log(n);
        
    }
    n++;
}
