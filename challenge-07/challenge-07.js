/*
Crie um array com 5 items (tipos variados).
*/
// ?
primeiroArr = ['Anderson', 41, segundoArr = [20, 21, 22], objetoDetro = { linguagen: 'java Script', framework: 'Angular'}, function (){ console.log(' Ola mundo')}]
console.log(primeiroArr)
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function additem(item) {
    primeiroArr.push(item)
    console.log(primeiroArr)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
additem(terceiroArr = ['novo arrai', 3, quartoArr = [1, 'esse arrai é o quarto ele esta dentro do terceiro', 
function (){ return 'arrai dentro de dentro'}], objetoZ = {curso: 'JsNinja', professor: 'Fernando', sobrenome: 'daciuk'}])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
//Obs fiz varios pois eu criei mais arrays um dentro do aoutro
console.log(`O segundo elemento do segundo array é: ${primeiroArr[2][1]}`)  //  21 
console.log(`O segundo elemento do terceiro array é: ${primeiroArr[5][1]}`)   //  3
console.log(`O segundo elemento do quarto array é: ${primeiroArr[5][2][1]}`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log('O primeiro array tem: ' + primeiroArr.length + ' itens')
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log('O segundo array tem: ' + segundoArr.length + ' itens')
console.log('O terceiro array tem: ' + terceiroArr.length + ' itens ')
console.log('O quarto array tem: ' + quartoArr.length + ' itens ')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var numerosPares = 10
console.log( '\nNúmeros pares entre 10 e 20:');
while(numerosPares <= 20){
    
    if(numerosPares%2==0){
        console.log(numerosPares++)
    }   
    ++numerosPares
}

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
//console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
//console.log( 'Números pares entre 100 e 120:' );
// ?

//console.log( 'Números ímpares entre 111 e 125:' );
// ?
