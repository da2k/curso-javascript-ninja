(function (){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
var person = {
  name: 'Anderson ',
  lastname: 'Pereira de Oliveira Santos',
  age: 41
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log( Object.keys( person ))
/*
Crie um array vazio chamado `books`.
*/
// ?
var books = []
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
books.push({
    name: 'Biblia',
    pages: 2000
})
books.push({
    name: 'JavaScript Ninja',
    pages: 1000
})
books.push({
    name: 'HTML Ninja',
    pages: 1400
})


/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:', books);


/*
Remova o último livro, e mostre-o no console.
*/
var objRemovido = books.pop()

console.log( '\nLivro que está sendo removido:', objRemovido);
/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
var bookConvertido = JSON.stringify( books )
/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:', bookConvertido);
/*
Converta os livros novamente para objeto.
*/
var bookDesconvertido = JSON.parse( bookConvertido )
console.log( '\nAgora os livros são objetos novamente:', bookDesconvertido );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log('\n')
for(let i = 0; i < books.length; i++) {
  for ( var propriedade in bookDesconvertido[i] ) {
    console.log(propriedade + ': ' + books[i][propriedade] )
  }
}
console.log('\nUsando ForEach')
books.forEach(function( index, item) {
  console.log(item, index)
})

console.log('\nUsando for normal')
for(i=0; i<books.length; i++) {
  console.log( i, books[i])
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['A','n','d','e','r','s','o','n']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join(""), "Pereira de Oliveira");
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', myName.reverse().join("") );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myName.sort());


//Daqui pra baixo é um previa do desavio 13 que sera feito logo mais muito importante

var arrProdutos = [10, 35, 20, 5, 70]
arrProdutos.push(10)
var totalaPagar = 0

arrProdutos.forEach(function( item ) {
  totalaPagar += item
})

console.log(totalaPagar)

//everi todos tem que ser true
console.log('\nEvery pra ver se tem numero impar.')
var arrDePares = [ 2, 4, 6, 8]
var numPar = arrDePares.every(function(itemPar) {
  console.log(itemPar)
  return itemPar % 2 === 0
})
console.log('Exemplo do every')
console.log( numPar )

//some pelo menos um tem que ser true
var arr = [1, 2, 3, 4, 5, 6]
var some = arr.some(function(items) {
  return items % 2 === 0
})
console.log('Exemplo do same')
console.log(some)

//map percorre e cria outro fazendo alguma coisa se quiser nesse caso pedi pra somar = 1 em cada item
var arrm = [2, 4, 6, 8, 10]
var map = arrm.map(function(item, index, arraym) {
  //return item + 1
  return { index: index, item: item, arraym: arraym}
})
console.log('usando map')
console.log(arrm, map)

//o map ja cria um novo array pra gente
//enquanto o usando o forEach pra percorrer eu teria que criar uma novo array
var newArray = []
arrm.forEach(function(itemf, indexf, arrayf) {
  newArray.push({indexf: indexf, itemf: itemf})
})
console.log('newArray usando forEach: ')
console.log(newArray)

//ja o filter filtra e coloca apenas o que vc quer em um novo array
var varfilter = arrm.filter(function (itemft, indexft, arrayft) {
  return itemft >= 6
})
console.log('Usando o filter ')
console.log((varfilter))

//Nesse exemplo to usando os dois juntos
var arrjunto = [1, 2, 3, 4, 5]
 var mapjunto = arrjunto.map(function(itemjunto) {
   return itemjunto + 10
 }).filter(function ( itemjunto ) {
   return itemjunto > 13
 })

 console.log('Exemplo usando encadeado map e filter\n Onde o map fez a adicao do item + 10\n E o filter filtrou apenas os maiores que 13 ')
 console.log(mapjunto)

})()


