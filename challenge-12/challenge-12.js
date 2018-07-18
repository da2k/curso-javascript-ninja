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
			name:'Emillyn',
			lastname: 'Silva',
			age: 21
		};
		console.log( 'Propriedades de "person":' );


		/*
		Mostre no console, em um array, todas as propriedades do objeto acima.
		Não use nenhuma estrutura de repetição, nem crie o array manualmente.
		*/
		console.log(Object.keys(person));

		/*
		Crie um array vazio chamado `books`.
		*/
		var book = [];

		/*
		Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
		seguintes propriedades:
		`name`: String
		`pages`: Number
		*/
		// ?
		console.log( '\nLista de livros:' );
		book[0] = {
			name: 'Antes de Você',
			pages: 256
		};

		book[1] = {
			name: 'Depois de Você',
			pages: 381
		};

		book[2] = {
			name: 'Ainda sou eu',
			pages: 254
		};

		/*
		Mostre no console todos os livros.
		*/
		console.log(book)

		console.log( '\nLivro que está sendo removido:' );
		/*
		Remova o último livro, e mostre-o no console.
		*/
		var removido  = book.pop();
		console.log(removido);

		console.log( '\nAgora sobraram somente os livros:' );
		/*
		Mostre no console os livros restantes.
		*/
		console.log(book)

		/*
		Converta os objetos que ficaram em `books` para strings.
		*/
		var book = JSON.stringify(book)
		console.log( '\nLivros em formato string:' );

		/*
		Mostre os livros nesse formato no console:
		*/
		console.log(book);

		/*
		Converta os livros novamente para objeto.
		*/
		book = JSON.parse(book);
		console.log( '\nAgora os livros são objetos novamente:' );

		/*
		Mostre no console todas as propriedades e valores de todos os livros,
		no formato abaixo:
		    "[PROPRIEDADE]: [VALOR]"
		*/
		for(var i = 0; i < book.length;i++){
			for(var prop in book[i]){
				console.log(prop+':'+book[i][prop]);
			}
		}

		/*
		Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
		seu nome. Adicione seu nome completo no array.
		*/
		var myName = ['E', 'M', 'I', 'L', 'L', 'Y', 'N'];
		console.log( '\nMeu nome é:' );

		/*
		Juntando todos os itens do array, mostre no console seu nome.
		*/
		console.log(myName.join( '' ));
		console.log( '\nMeu nome invertido é:' );

		/*
		Ainda usando o objeto acima, mostre no console seu nome invertido.
		*/
		console.log(myName.reverse().join( '' ));

		console.log( '\nAgora em ordem alfabética:' );
		/*
		Mostre todos os itens do array acima, odenados alfabéticamente.
		*/
		console.log(myName.sort());

})();