/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lista = ['ola', 4, 'teste', 5, 'texto'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
	 return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(lista)[1] // 4

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function otherFunction(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherList = [1, 'texto', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
otherFunction(otherList, 0); // 1
otherFunction(otherList, 1); // texto
otherFunction(otherList, 2); // true
otherFunction(otherList, 3); // null
otherFunction(otherList, 4); // undefined

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
	var myBook = {
		'Game of Thrones': {
			quantidadePaginas: 100,
			autor: 'RR Martin',
			editora: 'LeYa'
		},
		'Segunda Guerra': {
			quantidadePaginas: 400.,
			autor: 'Mussoline',
			editora: 'Guerra book'
		},
		'Ninja Javascript': {
			quantidadePaginas: 800,
			autor: 'Mark JS',
			editora: 'JS life'
		}
	};
	return !bookName ? myBook : myBook[bookName];
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
console.log( 'O livro Game of Thrones tem ' + book('Game of Thrones').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Game of Thrones é ' + book('Game of Thrones').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Game of Thrones foi publicado pela editora ' + book('Game of Thrones').editora);
