/*
Crie um array com 5 items (tipos variados).
*/
var umaLista = ['Flamengo', 90, 'líder', null, 75];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem() {
  umaLista.push({ game: 'Divinity Original Sin'});
  return umaLista;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
umaLista.push(['a' , 'b', 7, function(){}]);
console.log(umaLista);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+umaLista[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem "+umaLista.length+" itens");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem "+umaLista[6].length+" itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
num = 10;
while(num <= 20){
  num % 2 === 0 ? console.log( 'Números pares entre 10 e 20: '+num ) : console.log("Erro");
  num++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
while(num <= 20){
  num % 2 !== 0 ? console.log( 'Números ímpares entre 10 e 20: '+num ) : console.log("Erro");
  num++;
}
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(number=100; number <= 120; number++){
  if(number % 2 === 0){
    console.log( 'Números pares entre 100 e 120: ' +number);
  }
}
// ?
for(number2=111; number2 <= 125; number2++){
  if(number2 % 2 !== 0){
    console.log( 'Números ímpares entre 111 e 125: ' +number2);
  }
}

// ?
