( function() {/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var arrStr = [1, 2, 3, 4, 5, 6]
var arrayModificado = arrStr.toString();
console.log( 'O array em formato de string é:', arrayModificado );
/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var arrSul = [], arrSudeste = []
arrSul.push('PR', 'SC', 'RS')
arrSudeste.push('SP', 'RJ', 'MG')
/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
/// concatenar usando desestructure
var brasilDesestru = [...arrSudeste, ...arrSul]
console.log( '\nAlguns Estados do Brasil usando desestructure:', brasilDesestru );

/// concatenar usando concat
var brasilConcat = arrSudeste.concat(arrSul)
console.log(`\nAlguns estados do Brasil Usando concat`, brasilConcat)
/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
brasilConcat.unshift('AC', 'PI', 'AM')
console.log( '\nMais estados adicionados:', brasilConcat);
/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

//Aqui fiz um push pro dar True la em baixo quando eu uso o metodo some pra ver se tem Ceara "CE"
brasilConcat.push("CE")
//dessa forma ele remove e mostra o array sem o  elemento que foi removido
brasilConcat.shift()
console.log( '\nEstado removido:', brasilConcat);
// ? dessa forma ele remove e mostra apenas o estado removido
console.log( '\nEstado removido:', brasilConcat.shift());
/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasilConcat.slice(4)
//O array continua principal brasilConcat continua aqui
/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:', newSul );
console.log('Aqui vemos que o arrai principal continua aqui: ', brasilConcat)
/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:', brasilConcat );
/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var arrNordeste = ['PE', 'BH', 'MA']

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:', arrNordeste );
/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasilConcat.splice(1, 3)
/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasilConcat.push(...arrNordeste)
/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:', newSudeste );
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:', brasilConcat );
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = []
brasilConcat.forEach( function (item, index) {
  //console.log('id: ', index, '- estado: ', item)
   newBrasil.push({
     id: index,
     estado: item
    })
})

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:', newBrasil );
/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
var seTodosTemMaisde7 = brasilConcat.every(function (item) {
  return item.length < 7
})

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?', seTodosTemMaisde7 ? " -> Sim, todos os estados tem mais de 7 letras!" :
"-> Nem todos os estados tem mais de 7 letras!")
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/


var seTemCeara = brasilConcat.some(function(item) {
    return item === "CE"
})
console.log( '\nCeará está incluído em `brasil`?', seTemCeara ? "-> Ceará está incluído!" :
"Ceará não foi incluído :("
 );
/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var somaId = newBrasil.map(function(item, index) { // aqui usei os dois mas poderia usar apenas o parametro item
  return {
    id: index + 1,  // poderia ser tbm item + 1 só nao entendi a diferenca
    estado: item.estado + " pertence ao Brasil."
  }
})

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:', somaId );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var itemsPar = somaId.filter( function(item, index) { // aqui nao precisei do paremetro index
    return item.id % 2 === 0 // eu coloquei o index % 2 !== 0 tbm deu certo nao entendi por que
})
/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:', itemsPar );

//mais uma de some pra treinar
var nomes = ['Anderson', 'Andrew', 'Fabiana', 'Sueli']

var selectNome = nomes.some(function(item) {
    return item === 'Anderson'
})

console.log(selectNome)

})()
