(function(){

    /*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );

    let arr = [1,3,5,6,8,9]

    console.log(arr.toString())

/*
Crie 2 arrays `norte` e `nordeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
    let norte = ['Acre', 'Amazonas', 'Rondônia',  'Amapá', 'Pará']
    let nordeste = ['Alagoas', 'Bahia', 'Pernambuco', 'Paraíba', 'Ceará']


/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
let brasil = norte.concat(nordeste)
console.log(brasil)

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );

norte.unshift('Roraima')
console.log(norte)

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );

console.log(brasil.shift())

/*
Crie um novo array chamado `newNorte`, que receba somente os estados do norte,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

let newNorte = brasil.slice(0,4)



/*
Mostre no console os estados que estão em `newNorte`.
*/
console.log('\nEstados do norte do Brasil:' );
console.log(newNorte)

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil)

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste)

/*
Remova de `brasil` os estados do `nordeste`, colocando-os em uma variável
chamada `newNordeste`.
*/
    let newNordeste = brasil.splice(4,5)

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/

    brasil.concat(newNordeste)

/*
Mostre no console os estados em `newNordeste`.
*/
console.log( '\nEstados em newNordeste:' );

console.log(newNordeste)

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );

console.log(brasil)

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
    let newBrasil = [];

    brasil.forEach(function(item, indice){
        newBrasil.push({id: indice, estado: item})
    })

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );

console.log(newBrasil)

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );

let every7letters = brasil.every(function(estado){
    return estado.length > 7
})

if(every7letters){
    console.log('Sim, todos os estados tem mais de 7 letras!')
}else{
    console.log('Nem todos os estados tem mais de 7 letras')
}


/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );

let cearaPresent = brasil.some(function(estado){
    return estado == 'Ceará'
})

if(cearaPresent){
    console.log('Ceará está incluído!')
}else{
    console.log('Ceará não foi incluído')
}

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/

console.log(newBrasil)
novoArrayBrasil = newBrasil.map(function(item){
        return ({id: item.id += 1, estado: item.estado+' pertence ao Brasil'})
}) 



/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );

console.log(novoArrayBrasil)

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
let filter = novoArrayBrasil.filter(function(item){
    return item.id % 2 == 0
})

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );

    console.log(filter)


})()