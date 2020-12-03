/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [
	10,
	'string',
	true,
	undefined,
	null
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray( par ) {
	return par;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( returnArray( arr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myFunction = function( par1, par2 ) {
	return par1[ par2 ];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [
	1,
	'false',
	true,
	{  },
	null
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction( arr2, 0 ) );
console.log( myFunction( arr2, 1 ) );
console.log( myFunction( arr2, 2 ) );
console.log( myFunction( arr2, 3 ) );
console.log( myFunction( arr2, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
	var obj = {
		'Livro 1': {
			quantidadeDePaginas: 540,
			autor: 'Michael Jobson',
			editora: 'Nova Editora',
		},
		'Livro 2': {
			quantidadeDePaginas: 110,
			autor: 'Eduardo Silva',
			editora: 'Editora Bueno',
		},
		'Livro 3': {
			quantidadeDePaginas: 78,
			autor: 'Paulo Souza',
			editora: 'Gol Editora',
		},
	};

	return bookName ? obj[ bookName ] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Livro 1';
console.log( 'O livro ' + bookName + ' tem ' + book( bookName ).quantidadeDePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName2 = 'Livro 2';
console.log( 'O autor do livro ' + bookName2 + ' é ' + book( bookName2 ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName3 = 'Livro 3';
console.log( 'O livro ' + bookName3 + ' foi publicado pela editora ' + book( bookName3 ).editora + '.' );
