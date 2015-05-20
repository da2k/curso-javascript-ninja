/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayCinco = [
	98, 
	'vasco da gama', 
	true, 
	null, 
	'wordpress'
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcaoArray( arg ){
	return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( funcaoArray( arrayCinco )[1] ); // vasco da gama

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function funcaoDois( arg, x ){
	return arg[x];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayCinco2 = [
	2015,
	'javascript ninja',
	null,
	true,
	12.5
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( funcaoDois( arrayCinco2, 0 ) ); // 2015
console.log( funcaoDois( arrayCinco2, 1 ) ); // "javascript ninja"
console.log( funcaoDois( arrayCinco2, 2 ) ); // null
console.log( funcaoDois( arrayCinco2, 3 ) ); // true
console.log( funcaoDois( arrayCinco2, 4 ) ); // 12.5

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

function book( tituloLivro ){
	
	var livros = {
		'Como ser um programador melhor': {
		quantidadePaginas: 383,
		autor: 'Pete Goodliffe',
		editora: 'Novatec'
		},
	
		'Aprendendo Javascript': {
		quantidadePaginas: 407,
		autor: 'Shelley Powers',
		editora: 'OReilly'
		},

		'Link-se': {
		quantidadePaginas: 175,
		autor: 'Leslie Grossman',
		editora: 'Gente'
		}
	
	};
	
		return !tituloLivro ? livros : livros[ tituloLivro ];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() ); // Object {Como ser um programador melhor: Object, Aprendendo Javascript: Object, Link-se: Object}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// Como não consegui realizar completamente o exercicio da "function book" não consegui fazer esse exercicio.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// Como não consegui realizar completamente o exercicio da "function book" não consegui fazer esse exercicio.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// Como não consegui realizar completamente o exercicio da "function book" não consegui fazer esse exercicio.