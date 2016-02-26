(function(){
/*
Envolva todo o contéudo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
	'name': 'Danilo Agostinho',
	'lastname': 'Silva',
	'age': 24
};
console.log( 'Propriedades de "person":', person);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys( person ));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({'name': 'O bem e o mau', 'pages': '289'});
books.push({'name': 'Segredos ocultos', 'pages': '400'});
books.push({'name': 'A origem das especies', 'pages': '289'});
console.log( '\nLista de livros:');

/*
Mostre no console todos os livros.
*/
console.log( books );

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log( books.pop() );

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log( books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
var booksStr = JSON.stringify(books);
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log( booksStr );

/*
Converta os livros novamente para objeto.
*/
var converObj = JSON.parse( booksStr );
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < books.length; i++) {
 	for (var prop in books[i]){
 	 	console.log( prop + ': ' + books[i][prop] );
 	}
 }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['D','a','n','i','l','o'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
myName.join();

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
});
