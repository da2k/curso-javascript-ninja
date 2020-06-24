(function(){
/*
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
var person = {
	name: 'Willians',
	lastname: 'Marcono',
	age: 35
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":', Object.keys(person) );

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
books.push({name: 'Joao e Maria', pages: 215});
books.push({name: 'Chapeuzinho Vermelho', pages: 101});
books.push({name: 'Os tres porquinhos', pages: 139});

/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:', books );

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:', books.pop(2) );

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
var book = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/

console.log( '\nLivros em formato string:', book);

/*
Converta os livros novamente para objeto.
*/

console.log( '\nAgora os livros são objetos novamente:', JSON.parse(book));

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var cont; cont < books.length; cont++){
	for( var prop in books[cont]){
		console.log( prop+' : '+books[cont][prop]);
	}
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['W', 'I', 'L', 'L', 'I', 'A', 'N', 'S'];
console.log( '\nMeu nome é:', myName);

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
name = myName.join(''); 
console.log( '\nMeu nome é:', name);

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
var nameRev = myName.reverse();
console.log( '\nMeu nome invertido é:', nameRev.join('') );

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
var ordemAlf = myName.sort();
console.log( '\nAgora em ordem alfabética:', ordemAlf );

})();