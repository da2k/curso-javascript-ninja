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
		name: 'Cinthia',
		lastname: 'Campos',
		age: 24
	};


	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( 'Propriedades de "person" : ' + Object.keys(person) );

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
		'name': 'Underground Railroad',
		'pages': 330
	};
	var book2 = {
		'name': 'Me Chame Pelo Seu Nome',
		'pages': 280
	};
	var book3 = {
		'name': 'A Culpa é Das Estrelas',
		'pages': 200
	};

	books.push(book1, book2, book3);

	/*
	Mostre no console todos os livros.
	*/
	console.log( '\nLista de livros:');

	for(var i in books)
		console.log(books[i]['name']);

	/*
	Remova o último livro, e mostre-o no console.
	*/
	
	console.log( '\nLivro que está sendo removido:' );

	var removed = books.pop();

	console.log(removed['name']);	

	/*
	Mostre no console os livros restantes.
	*/
	console.log( '\nAgora sobraram somente os livros:' );
	for(var i in books)
		console.log(books[i]['name']);


	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	
	console.log( '\nLivros em formato string:' );

	var books_str = JSON.stringify(books);

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books_str);

	/*
	Converta os livros novamente para objeto.
	*/
	
	console.log( '\nAgora os livros são objetos novamente:' );
	console.log(JSON.parse(books_str));
	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for (var i in books) {

		for (var prop in books[i]) {

			console.log('[' + prop + ']: [' + books[i][prop] + ']');

		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = [ 'C', 'I', 'N', 'T', 'H', 'I', 'A' ];
	

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log( '\nMeu nome é: ' + myName.join(''));


	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( '\nMeu nome invertido é: ' + myName.reverse().join(''));


	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( '\nAgora em ordem alfabética: ' + myName.sort().join(''));

}());
