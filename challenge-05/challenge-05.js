/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [1, 'maçã', true, ['alicate'], {nome:'Isaac'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [0, true, 'cachorro', null, ['peixe']];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArray(arr2));

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
function book(name) {
	var books = {
		'Algorithms': {
			quantidadePaginas: 992,
			autor: 'Robert Sedgewick',
			editora: 'Addison-Wesley Professional'
		},
		'Secrets of the JavaScript Ninja': {
			quantidadePaginas: 464,
			autor: 'John Resig',
			editora: 'Manning Publications'
		},
		'Pro Git': {
			quantidadePaginas: 456,
			autor: 'Scott Chacon',
			editora: 'Apress'
		}
	};

	return name ? books[name] : books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Pro Git';
console.log("O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'Secrets of the JavaScript Ninja';
console.log("O autor do livro " + bookName + " é " + book(bookName).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + " foi publicado pela editora " + book(bookName).editora + ".");
