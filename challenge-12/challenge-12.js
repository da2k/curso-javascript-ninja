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
		name: 'Allef',
		lastname: 'Silva',
		age: 22
	};

	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys( person ) );

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
	
	books.push( { name: 'O Código Da Vinci', pages: 540 } );
	books.push( { name: 'A Cabana', pages: 272 } );
	books.push( { name: 'A Menina que Roubava Livros', pages: 592 } );


	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/
	for ( var prop in books ) {
		console.log( books[ prop ].name );
	}

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	var lastBook = books.pop().name;
	console.log( lastBook );


	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	for ( var prop in books ) {
		console.log( books[ prop ].name );
	}

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/	
	JSON.stringify( books );

	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( books[0]['name'] );
	console.log( books[1]['name'] );
	/*
	Converta os livros novamente para objeto.
	*/
	JSON.parse( books );
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for ( var prop in books ) {
		console.log( ''+ prop +': '+books[ prop ]+'' ); 
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['A', 'l', 'l', 'e', 'f','B', 'r', 'u', 'n', 'o','d', 'a', 'S', 'i', 'l', 'v','a','f', 'r', 'e', 'i', 't', 'a', 's'];
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	
	myName.join(' ');

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	myName.reverse();

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	myName.sort();
})();