/*
Crie um array com 5 items (tipos variados).
*/
// ?
let arrayTiposVariados = [1 ,{ nome: 'Gilmara'}, function(){ return console.log('Funcao')}, null, 'Matrix' ]


/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

function addItem(item){

    console.log('item para adicionar no array',item)
    arrayTiposVariados.push(item)

    return arrayTiposVariados
};

console.log(addItem([1, 'teste', null]))
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
console.log(addItem([{ideia: 'genial'}, 'teste' , 866]))
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log('O segundo elemento do segundo array é ' + arrayTiposVariados[1].nome )
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log('O primeiro array tem ' +  arrayTiposVariados.length + ' itens.')
/*

Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log('O segundo array tem ' +  arrayTiposVariados[5].length + ' itens.')
console.log('O segundo array tem uma ideia ' +  arrayTiposVariados[6][0].ideia )
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

let num = 10;
while(num <=20){
    if(num % 2 === 0){
        console.log(num);
    }
   
    num++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

let impar = 10;
while(impar <=20){
    if(impar % 2 !== 0){
        console.log(impar);
    }
   
    impar++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

for(let pares = 100; pares <=120; pares++){

    if(pares % 2 === 0){
        console.log(pares)
    }
    
}


console.log( 'Números ímpares entre 111 e 125:' );
// ?

for (let impares = 111; impares <=125; impares++){

    if(impares % 2 != 0){

        console.log(impares);
    }
 
}