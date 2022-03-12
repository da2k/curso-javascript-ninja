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
for(i = 0; i < books.length; i++) {
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

})()
