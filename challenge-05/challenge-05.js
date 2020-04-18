/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Dragon', 42, 'Eu sou a lenda', 1996, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornArr(array) {
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(array, num) {
	return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var things = ['It', 63, 'O pistoleiro', 1984, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(things,0));
console.log(myFunction(things,1));
console.log(myFunction(things,2));
console.log(myFunction(things,3));
console.log(myFunction(things,4));

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
function book(param_livro) {
	var allBooks = {
		'Eu Sou a Lenda': {
			quantidadePaginas: 384,
			autor: 'Richard Matheson',
			editora: 'Editora Aleph'
		},
		'Farenheight 451': {
			quantidadePaginas: 216,
			autor: 'Ray Bradbury',
			editora: 'Biblioteca Azul'
		},
		'Laranja Mecanica': {
			quantidadePaginas: 288,
			autor: 'Anthony Burgess',
			editora: 'Editora Aleph'
		}
	};
	return param_livro === undefined ?  allBooks : allBooks[param_livro];
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
var quantidadePaginas = book('Laranja Mecanica').quantidadePaginas;
console.log('O livro Laranja Mecanica tem ',quantidadePaginas,' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var autor = book('Laranja Mecanica').autor;
console.log('O autor do livro Laranja Mecanica é ',autor);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var editora = book('Laranja Mecanica').editora;
console.log('O Livro Laranja Mecanica foi publicado pela editora ',editora);
