/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['telefone', 23, 1.34, 'loucura' true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayParam(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayParam(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = ['Sammy', 39, 1.73, '30/09/1978', 'Front-end'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
twoParam(myArray, 0); // 'Sammy'
twoParam(myArray, 1); // 39
twoParam(myArray, 2); // 1.73
twoParam(myArray, 3); // '30/09/1978'
twoParam(myArray, 4); // 'Front-end'

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
function book(nameBook) {

	var books = {
		'Uma Odisseia No Espaco': {numeroPaginas: 345, autor: 'Arthur C. Clarke', editora: 'Alepf'},
		'Auto Da Compadecida': {numeroPaginas: 168, autor: 'Ariano Suassuma', editora: 'Nova Fronteira'},
		'Laranja Mecanica': {numeroPaginas: 200, autor: 'Anthony Burgess', editora: 'Alepf'}
    }

	return nameBook === undefined ? books : books[nameBook];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function nrPaginas(nameBook) {
	book(nameBook);
	return 'O livro ' + nameBook + ' tem ' + book(nameBook).numeroPaginas + ' páginas!';
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function nomeAutor(nameBook) {
	book(nameBook);
	return 'O livro ' + nameBook + ' tem ' + book(nameBook).autor + ' páginas!';
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function nomeEditora(nameBook) {
	book(nameBook);
	return 'O livro ' + nameBook + ' tem ' + book(nameBook).editora + ' páginas!';
}
