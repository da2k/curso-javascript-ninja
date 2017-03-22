/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1, false, undefined, 'array', true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arrayRecebida ){
	return arrayRecebida;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction(arr)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function twoParameters( array, index ){
	return array [ index ];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [ 1, 'string', false, undefined, [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParameters(array, 0));
console.log(twoParameters(array, 1));
console.log(twoParameters(array, 2));
console.log(twoParameters(array, 3));
console.log(twoParameters(array, 4));

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
function book( bookName ){
	var books = {
		'LíderEmpreendedor': {
			quantidadePaginas: 300,
			autor: 'Dave Ramsey',
			editora: 'Editora1'
		},
		'The Lean Startup': {
			quantidadePaginas: 350;
			autor: 'Eric Ries',
			editora: 'Editora2'
		},
		Steve Jobs:{
			quantidadePaginas: 900,
			autor: 'Vida',
			editora: 'Editora3'
		}
	};
	return !bookName ? books : books [ bookName ]
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
console.log( 'O livro The Lean Startup tem ' + book( 'The Lean Startup' ).quantidadePaginas + 'páginas' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro The Lean Startup é ' + book( 'The Lean Startup' ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro The Lean Startup foi publicado pela editora ' + book( 'The Lean Startup' ).editora + '.' );