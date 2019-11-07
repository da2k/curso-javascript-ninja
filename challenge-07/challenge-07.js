/*
Crie um array com 5 items (tipos variados).
*/
let myArr = [[1, 2, 3], { nome: 'henrique' }, true, undefined, 'opa']

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
let addItem = (arr) => {
    myArr.push(arr)
    return myArr
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let newArr = [{ id: 1 }, 'teste', true, false]
addItem(newArr)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${newArr[1]}`) // O segundo elemento do segundo array é teste

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArr.length} itens.`) // O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${newArr.length} itens.`) // O segundo array tem 4 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
let counter = 10
while (counter <= 20) {
    counter % 2 === 0 ? console.log(counter) : ''
    counter++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
let counter1 = 10
while (counter1 <= 20) {
    counter1 % 2 === 1 ? console.log(counter1) : ''
    counter1++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
for (let i = 100; i <= 120; i++) {
    i % 2 === 0 ? console.log(i) : ''
}

console.log('Números ímpares entre 111 e 125:');
for (let i = 100; i <= 120; i++) {
    i % 2 === 1 ? console.log(i) : ''
}