(function() {

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
		nome: 'Thiago',
		lastname: 'Ferreira',
		age: 32 
	};

	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys(person) );

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
	
	var book1 = {
		name: 'Book One',
		pages: 50
	};

	var book2 = {
		name: 'Book Two',
		pages: 100
	};

	var book3 = {
		name: 'Book Three',
		pages: 150
	};

	books.push(book1);
	books.push(book2);
	books.push(book3);

	console.log( '\nLista de livros:' );

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

	books[0] = JSON.stringify(books[0]);
	books[1] = JSON.stringify(books[1]);

	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( books );

	/*
	Converta os livros novamente para objeto.
	*/

	books[0] = JSON.parse(books[0]);
	books[1] = JSON.parse(books[1]);

	console.log( '\nAgora os livros são objetos novamente:' );

	console.log( books );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	
	for (var i = 0; i < books.length; i++) {
		var book = books[i];
		for (var prop in book) {
			console.log( prop + ':' + book[prop] );
		}
	}

	for (var i = 0; i < books.length; i++) {
		var book = books[i];
		var props = Object.keys(book);
		for (var j = 0; j < props.length; j++) {
			console.log( props[j] + ':' + book[props[j]]);
		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['T','H','I','A','G','O'];
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log( myName.join('') );

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( myName.reverse().join('') );

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( myName.sort() );
})();