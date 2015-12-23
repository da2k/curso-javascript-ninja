/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 'Heverton', 1.5, true, { prop1: 'prop1', prop2: null}, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arg){
	return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayIndex(array, index){
	return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [ 'Curso JS Ninja', 10, 1.2, undefined, true ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayIndex(arr2, 0));
console.log(arrayIndex(arr2, 1));
console.log(arrayIndex(arr2, 2));
console.log(arrayIndex(arr2, 3));
console.log(arrayIndex(arr2, 4));

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
function book(title){
	var books = {
		the_book_thief: {
			quantidadePaginas: 592,
			autor: 'Mark Zusak',
			editora: 'Picador'
		},
		digital_fortress: {
			quantidadePaginas: 521,
			autor: 'Dan Brown',
			editora: 'St. Martin\'s Press'
		},
		master_of_the_game: {
			quantidadePaginas: 590,
			autor: 'Sidney Sheldon',
			editora: 'Grand Central Publishing'
		}
	};

	//Se livro não for passado ou não existir no objeto, retorna todos
	return books[title]!==undefined ? books[title] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Fortaleza Digital tem '+ book('digital_fortress').quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Reverso da Medalha é '+ book('master_of_the_game').autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro A Menina que Roubava Livros foi publicado pela editora '+ book('the_book_thief').editora +'.');