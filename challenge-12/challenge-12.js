(function envolveGeral(){


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
	
	person = {
		name: 'Vigarildo',
		lastname: 'Aquino',
		age: 136
	}

	console.log( 'Propriedades de "person": ', person );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	Object.keys(person);

	/*
	Crie um array vazio chamado `books`.
	*/
	books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books.push(livroUm = {name: 'A Dama', pages: 109});
	books.push(livroDois = {name: 'O Senhorito', pages: 121});
	books.push(livroTres = {name: 'A Noitada', pages: 69});
		

	/*
	Mostre no console todos os livros.
	*/
	console.log( '\nLista de livros: ', books  );

	
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log( '\nLivro que está sendo removido:' );
	console.log ( books.pop() );

	
	/*
	Mostre no console os livros restantes.
	*/
	console.log( '\nAgora sobraram somente os livros:', books );

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	JSON.stringify(books);
	console.log( '\nLivros em formato string:', books );

	/*
	Mostre os livros nesse formato no console:
	*/
	//Livros em formato string: [{"name":"A Dama","pages":109},{"name":"O Senhorito","pages":121}]

	/*
	Converta os livros novamente para objeto.
	*/
	JSON.parse(books);

	console.log( '\nAgora os livros são objetos novamente:', books );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for ( var i=0; i < books.length; i++ ) {
		for( var prop in books[i] ){
			console.log( prop +': ' +books[i][prop] );
		}
		
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = [ 'P', 'a', 't', 'r', 'i', 'c', 'k'];
	

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log( '\nMeu nome é:' );
	console.log( myName.join(''));


	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log ( myName.reverse().join('') );

	
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( '\nAgora em ordem alfabética:' );
	console.log (myName.sort());

}())
