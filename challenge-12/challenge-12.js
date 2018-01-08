(function() {
	"use strict"

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
	var person = Object.create({
		name: "Edilson",
		lastname: "Cichon",
		age: 12
	});
	console.log( 'Propriedades de "person": ', person.__proto__ );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( 'Array de "person": ', Object.keys(person.__proto__) );

	/*
	Crie um array vazio chamado `books`.
	*/

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	var book1 = {name: "Guerra nas estrelas", pages: 200};
	var book2 = {name: "O Senhor dos anéis", pages: 100};
	var book3 = {name: "Pequeno Livro", pages: 10};
	var books = [book1, book2, book3];

	console.log( '\nLista de livros: ', books);

	/*
	Mostre no console todos os livros.
	*/
	books.forEach(function(item){
		console.log(item)
	});

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log(books.pop())

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	books.forEach(function(item){
		console.log(item)
	});

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	books = JSON.stringify(books)
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( books )

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books);
	console.log( '\nAgora os livros são objetos novamente:', books );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	books.forEach(function(item) {
		console.log("[NAME]: ["+ item.name +"]")
		console.log("[PAGES]: ["+ item.pages +"]")
	});

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['E', 'd', 'i', 'l', 's', 'o', 'n', 'C', 'i', 'c', 'h', 'o', 'n'];
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log(myName.join(''));

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log(myName.reverse().join(''));

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log(myName.sort().join(''));

})();
