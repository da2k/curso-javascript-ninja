/*
Crie um array com 5 items (tipos variados).
*/
// ?
var lista = ["gui", 21, true, "test", 9]
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function addItem(item){
    lista.push(item)
    return lista
}
function imprimirLista(lista){
    for( var i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
console.log(addItem([1, 'oi', 20]))
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(`O segundo elemento do segundo array é ${lista[1]}.`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array tem ${lista.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem ${lista[5]} itens.`)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?
var i = 10
while(i > 9 && i < 21){
    if(i%2 == 0){
        console.log(i)
        i++
    }else{
        i++
    }
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?
i = 10
while(i > 9 && i < 21){
    if(i%2 != 0){
        console.log(i)
        i++
    }else{
        i++
    }
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

for(var x = 100; x <= 120; x++){
    x % 2 == 0 ? (console.log(x)) : "";
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var x = 111; x <= 125; x++){
    x % 2 != 0 ? (console.log(x)) : "";
}
// ?