(function() {
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log( 'O array em formato de string é:', arry.toString() );

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ['Paraná, Santa Catarina, Rio Grande do Sul'];
var sudeste = ['Espirito Santos', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = sul.concat(sudeste);
console.log( '\nAlguns Estados do Brasil:', brasil );
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
brasil.shift(['Acre']);
brasil.shift(['Amapa']);
brasil.shift(['Amazonas']);
console.log( '\nMais estados adicionados:', barasil );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
brasil.unshift();
console.log( '\nEstado removido:', brasil );
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.slice(2,5);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:', newSul );


/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:', brasil );
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Bahia', 'Pernambuco', 'Ceará', 'Maranhão', 'Rio Grande do Norte', 'Paraíba', 'Piauí', 'Alagoas', 'Sergipe']

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:', nordeste );
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.splice(5,8);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(newSudeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:', newSudeste );
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:', brasil );
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = [];
brasil.forEach(function(item, index) {
  newBrasil.push({ id: index, estado: item });
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:', newBrasil );
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
var temMaisDe7Letras = brasil.every(function(item){
  return item.length > 7;
})

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?',
  temMaisDe7Letras
  ? 'Sim, todos os estados tem mais de 7 letras!'
  : 'Nem todos os estados tem mais de 7 letras!' );

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
var cearaInclude = brasil.every(function(item){
  return item.includes('Ceará');
})

console.log( '\nCeará está incluído em `brasil`?',
  cearaInclude
  ? 'Ceará está incluído!'
  : 'Ceará não foi incluído :(' );

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var arrayBrasil = newBrasil.map(function(item) {
  return { id: item.id + 1, estado: item + ' pertence ao Brasil'}
});
/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:', newBrasil );

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var filter = arrayBrasil.filter(function(item) {
  return item.id % 2 === 0;
});
/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:', filter );
// ?
})();
