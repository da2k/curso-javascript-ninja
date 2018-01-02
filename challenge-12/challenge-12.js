/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function (){

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	// ?
	var person {
		name: 'Gustavo',
		lastname: 'Rodrigues',
		age: 30
	}

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( 'Propriedades de "person":'+ person );

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
	books.push({
    	name: 'Harry Potter',
    	pages: 147
  	});

  	books.push({
    	name: 'Senhor dos Anéis',
    	pages: 300
  	});

	books.push({
	    name: 'Eloquente Javascript',
	    pages: 500
	});
	console.log( '\nLista de livros:' + books);

	/*
	Mostre no console todos os livros.
	*/
	console.log(books);
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log( '\nLivro que está sendo removido:' );

	console.log(books.pop());

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	console.log(books);
	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	var bookJson = JSON.stringify(books);
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books);
	/*
	Converta os livros novamente para objeto.
	*/
	// ?
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	
	for (var i = 0; i < books.length; i++) {

	    for (var prop in books[i]) {
	      console.log(prop + ': ' + books[i][prop]);
	    }

	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	// ?
	var myName = ['G','u', 's', 't', 'a', 'v', 'o'];
	console.log( '\nMeu nome é:' + '' + myName );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	// ?
	console.log(myName.join(''));
	console.log( '\nMeu nome invertido é:' + '' + myName );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	// ?
	console.log(myName.reverse().join(''));
	console.log( '\nAgora em ordem alfabética:' + '' + myName );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	// ?

}());