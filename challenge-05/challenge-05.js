/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [3, 'curso', true, 'ninja', false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcao( arr ) {
return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( funcao(qualquer)[1] );


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function dois(x, y) {
	return x[ y ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var segundaArray = [33, 'js', undefined, true, [0, 10, 30]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(dois(segundaArray, 0));
console.log(dois(segundaArray, 1));
console.log(dois(segundaArray, 2));
console.log(dois(segundaArray, 3));
console.log(dois(segundaArray, 4));

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
function book(nomeLivro){
var livros = { 
			'Livro Um': {
				quantidadePaginas: 30, 
				autor: 'Zelia', 
				editora: 'Fox' 
			}, 
			'Livro Dois': {
				quantidadePaginas: 60, 
				autor: 'Aldo', 
				editora: 'Hibra' 
			},
			'Livro Tres': {
				quantidadePaginas: 100, 
				autor: 'Jaspion', 
				editora: 'Namagaderas' },
		};
		
return !nomeLivro ? livros : livros[nomeLivro];
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
console.log( 'O Livro Um tem ' +book( 'Livro Um' ).quantidadePaginas +' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro = 'Livro Um';
console.log( 'O autor do livro ' +nomeLivro +' é ' +book( 'Livro Um' ).autor +'.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' +nomeLivro +' foi publicado pela editora ' +book( 'Livro Um' ).editora +'.' );
