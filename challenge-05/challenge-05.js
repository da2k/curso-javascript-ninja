/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['supernatural', true, 1967, {creatures: 'wendigo'}, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function myFunction(arr) {
	return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarray)[1]);
// true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function func2(arr, index) {
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = ['parks and rec', true, 100, 'friends', 'mr. robot']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunc2(myarray2, 0));
console.log(myfunc2(myarray2, 1));
console.log(myfunc2(myarray2, 2));
console.log(myfunc2(myarray2, 3));
console.log(myfunc2(myarray2, 4));

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
	var allBooks = {
		'O Rei do Inverno': {
			qtdPaginas: '546',
			autor: 'Bernard Cornwell',
			editora: 'Record'
		},
		'O Inimigo de Deus': {
			qtdPaginas: '518',
			autor: 'Bernard Cornwell',
			editora: 'Record'
		},
		'Excalibur': {
			qtdPaginas: '532',
			autor: 'Bernard Cornwell',
			editora: 'Record'
		}
	};
	
	return !bookName ? allBooks : allBooks[bookName];
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
var bookName = 'Excalibur';
console.log('O livro ' + bookName + ' tem ' + book ( bookName).qtdPaginas + ' páginas! ' );
O livro Excalibur tem 532 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.' );
O autor do livro Excalibur é Bernard Cornwell.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.' );
// O livro Excalibur foi publicado pela editora Record.