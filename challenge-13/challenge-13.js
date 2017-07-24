/*
Envolva todo o código desse desafio em uma IIFE.
*/

(function(){

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );

var arrString = [ 'luciano', 'barauna', 'lourenco' ];

console.log( arrString.join(' ') );


/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/

var sul = [ 'Santa Cataria', 'Paraná', 'Rio Grande do Sul' ];
var sudeste = [ 'Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo' ];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );

var brasil;

brasil = sudeste.concat( sul );

console.log( brasil );

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );

brasil.unshift( 'Amazonas', 'Acre', 'Roraima', 'Amapá', 'Pará', 'Tocantins', 'Rondônia' );

console.log( brasil )

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );

var firstState = brasil.shift();

console.log( firstState );

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
<<<<<<< HEAD
var newSul = brasil.slice(10,13);
=======
var newSul = brasil.filter( function (item, index, array){
  console.log('item', item);
  console.log('index', index);
  console.log('array', array);
  return sul[index];
})
>>>>>>> df1d7617c63c95891a063bc5eec52839a44326df

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
<<<<<<< HEAD
console.log(newSul);
=======
console.log( 'opa sul', newSul );
>>>>>>> df1d7617c63c95891a063bc5eec52839a44326df

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil);

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
<<<<<<< HEAD
var nordeste = ['Alagoas', 'Bahia', 'Ceara', 'Maranhão', 'Paraíba', 'Pernambuco', 'Pauí', 'Rio Grande do Norte', 'Sergipe'];
=======
var nordeste = ['Alagoas', 'Bahia', 'Ceára', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí',  'Sergipe'];
>>>>>>> df1d7617c63c95891a063bc5eec52839a44326df

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste);

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
<<<<<<< HEAD
var newSudeste = brasil.splice(6,4);
=======
var newSudeste = sudeste;
>>>>>>> df1d7617c63c95891a063bc5eec52839a44326df

console.log('teste', newSudeste);
/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

nordeste.forEach(function(item){
  brasil.push(item);
});

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(brasil);

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = [];

brasil.forEach(function(item, index){
  newBrasil.push({ id: index, estado: item });
})

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
console.log(newBrasil);

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/

function checkSizeWords(item, index, value){
  console.log(item.length);
  if(item.length > 7 ) {
    console.log("Sim, todos os estados tem mais de 7 letras!");
    return;
  }
    console.log("Nem todos os estados tem mais de 7 letras!");
  return;

}

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );


console.log( ['Sergipe'].every(checkSizeWords) );

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?

})();
