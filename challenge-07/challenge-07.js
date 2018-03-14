/*
Crie um array com 5 items (tipos variados).
*/
 var arr = ['teste',22, NaN, {Carro: 'vermelho'},undefined ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
 function addItem(arg){ 
 arr.push(arg); 
 return 'O array possui '+ arr.length + ' elementos e os seus elementos são: '+arr;   
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['false',true,null]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemendo do segundo array é o elemento: "+ arr[5][2]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro arrya tem"+ arr.length+ " Itens");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem "+ arr[5].length + " Itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var par = 10;
console.log( 'Números pares entre 10 e 20:' );
while(par <= 20){ 
console.log( par % 2 === 0 ? par : ''); 
par++; 
}  

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var impar = 10;
console.log( 'Números ímpares entre 10 e 20:' );
while(impar <= 20){ 
console.log( impar % 2 !== 0 ? impar : ''); 
impar++; 
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(par=100;par<=120; par++){ 
console.log( par%2 === 0 ? par : ''); 
}

console.log( 'Números ímpares entre 111 e 125:' );
for(impar=111;impar<=125;impar++){ 
console.log(impar%2 ? impar : ''); 
}