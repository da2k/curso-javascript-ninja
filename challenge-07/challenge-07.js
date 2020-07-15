/*
Crie um array com 5 items (tipos variados).
*/
var myArray = [true, 'Maicon', [{a: 2}], 235, x => x]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (novoArray){
    myArray.push(novoArray)
    return myArray
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([NaN, undefined, null]))

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é o ${myArray[myArray.length -1][1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[myArray.length -1].length} itens`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var cont = 10
var max = 20
while(cont <= max){
    cont % 2 === 0 ? console.log(`${cont} é par`) : console.log('---')
    cont++
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var cont2 = 10
var max2 = 20
while(cont2 <= max2){
    cont2 % 2 === 0 ? console.log('---'): console.log(`${cont2} é impar`)
    cont2++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var a = 100, b = 120; a <= b; a++){
    if (a % 2 === 0){
        console.log(`Agora com for: ${a} é par`)
    }
}
// ?
console.log('---------------------------')
for (var a = 111, b = 125; a <= b; a++){
    if (a % 2 !== 0){
        console.log(`Agora com for: ${a} é impar`)
    }
}
// 