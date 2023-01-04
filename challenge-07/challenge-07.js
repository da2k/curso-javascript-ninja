/*
Crie um array com 5 items (tipos variados).
*/
var lista = ['mercado', true , 2022, [1, 2, 3], {ano: 2023} ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
  lista.push( item );
  return lista;

}  

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log(addItem(['escola', 3 , true]));
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + lista[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + lista.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + lista[5].length + " itens.");


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var par = 10;
while(par <= 20){
 par % 2 === 0 ? console.log(par) : '';
 par++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var impar = 10;
while(impar < 20){
  impar++ % 2 === 0 ? console.log(impar) : '';
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var numPares = 100; numPares <= 120 ; numPares++){
  numPares % 2 === 0 ? console.log(numPares): '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var numImpares = 111; numImpares <= 125 ; numImpares++){
  numImpares % 2 !== 0 ? console.log(numImpares) : '';
}