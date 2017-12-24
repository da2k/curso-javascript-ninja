/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, true, 'andré', 'ferreira', 12, 'Curitiba'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arr) {
	return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myArrayIndex(arr, i) {
	return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, 'string', true, [1, 2, 3], { nome: 'André', sobrenome: 'Ferreira'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myArrayIndex(arr, 0);
myArrayIndex(arr, 1);
myArrayIndex(arr, 2);
myArrayIndex(arr, 3);
myArrayIndex(arr, 4);

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
function book(bookName) {
	var books = {
		'1984': {
			quantidadePaginas: 120,
			autor: 'Autor 1',
			editora: 'Editora 1'
		},
		'Papillon': {
			quantidadePaginas: 400,
			autor: 'Autor 2',
			editora: 'Editora 2'
		},
		'A Revolução dos Bichos': {
			quantidadePaginas: 340,
			autor: 'Autor 3',
			editora: 'Editora 3'
		}
	}

	return !bookName ? books : books[bookName];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

// Variável utilizada nos três exercícios abaixo
var bookName = 'Papillon';

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora);