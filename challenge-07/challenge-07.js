/*
Crie um array com 5 items (tipos variados).
*/
var arr = ["hello", 12, null, true, undefined];

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
var newArr = [{ nome: "gabriel" }, "12", function () {}];
arr.push(newArr);
console.log(arr.flat());

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${newArr[1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var qtd = arr.length;
console.log(`O primeiro array tem ${qtd} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
var qtd2 = newArr.length;
console.log(`O segundo array tem ${qtd2} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var i = 10;
var par = [];
while(i <= 20) {
  if(i % 2 === 0){
    par.push(i)
  }
  i++
}
console.log(`Números pares entre 10 e 20: ${par}`);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var contador = 10;
var impar = [];
while(contador <= 20) {
  if(contador % 2 === 1){
    impar.push(contador)
  }
  contador++
}
console.log(`Números ímpares entre 10 e 20: ${impar}`);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var cont = 100, pares = []; cont <= 120; cont++) {
  if(cont % 2 === 0) {
    pares.push(cont);
  }
}
console.log(`Números pares entre 100 e 120: ${pares}`);

for (var contImpar = 111, impares = []; contImpar <= 125; contImpar++) {
  if(contImpar % 2 === 1) {
    impares.push(contImpar);
  }
}
console.log(`Números ímpares entre 111 e 125: ${impares}`);
