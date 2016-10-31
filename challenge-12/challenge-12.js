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
	'name': 'Leandro',
	'lastname': 'Silva',
	'age': 30
	}
	console.log( 'Propriedades de "person":');

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys(person));

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
	books.push({name: 'O vendedor de sonhos', pages: 280})
	books.push({name: 'JS Ninja', pages: 310})
	books.push({name: 'HTML5', pages: 170})
	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/
	//Fiquei em duvida de como mostrar as propriedades
	for(allbooks in books){
		console.log( books[allbooks]);
	}

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	var lstbook = books.pop();
	console.log( lstbook );

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	console.log( books );

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	var strbook = JSON.stringify(books);
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(strbook);

	/*
	Converta os livros novamente para objeto.
	*/
	JSON.parse(strbook);
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	JSON.stringify(books);

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['l', 'e', 'a', 'n', 'd', 'r', 'o'];
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	var name = myName.join("");
	console.log(name);

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	var revName = myName.reverse();
	var invName = revName.join("");
	console.log(invName);

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	var sortName = myName.sort();
	var ordName = sortName.join("");
	console.log(ordName);
}())
