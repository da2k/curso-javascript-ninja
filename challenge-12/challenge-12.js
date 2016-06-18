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
		name: "Cleyson",
		lastname: "Leal",
		age: 23
	}

	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	
	console.log(Object.keys(person));

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
	
	books[0] = {
		name: 'AngularJS',
		pages: 142
	};

	books[1] = {
		name: 'NodeJS',
		pages: 252
	};

	books[2] = {
		name: 'MongoDB',
		pages: 322
	};

	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/

	console.log(books);

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log(books.pop());

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	
	console.log(books);

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	// ?
	console.log( '\nLivros em formato string:' );

	var str = JSON.stringify(books);

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(str);

	/*
	Converta os livros novamente para objeto.
	*/
	// ?

	console.log( '\nAgora os livros são objetos novamente:' );

	console.log(books);



	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for(var prop in books){
		console.log(books[prop]);
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	// ?
	console.log( '\nMeu nome é:' );

	var myName = ['C', 'l', 'e', 'y', 's', 'o', 'n'];

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log(myName.join(''));

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log(myName.reverse());

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log(myName.sort());

}())