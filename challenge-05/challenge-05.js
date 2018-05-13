/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function a(arg) {
	return arg;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(a(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function b(arr, i) {
	return i !== undefined ? arr[i] : arr;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var random = ['Coca', 1, true, null, {vida: 'devolva minhas fantasias'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(b(random));


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
function book(nomeLivro) {

	var biblioteca = {

		'A Guerra dos Tronos': {
			quantidadePaginas: 888,
			autor: 'George R. R. Martin',
			editora: 'LeYa'
		},
		'O poder do Hábito': {
			quantidadePaginas: 408,
			autor: 'Charles Duhigg',
			editora: 'Objetiva'
		},
		'Os segredos da mente milionária': {
			quantidadePaginas: 200,
			autor: 'T. Harv Eker',
			editora: 'Sextante'
		}

	}

	return !nomeLivro ? biblioteca : biblioteca[nomeLivro];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
	{
		"A Guerra dos Tronos": {
			"quantidadePaginas": 888,
			"autor": "George R. R. Martin",
			"editora": "LeYa"
		},
		"O poder do Hábito": {
			"quantidadePaginas": 408,
			"autor": "Charles Duhigg",
			"editora": "Objetiva"
		},
		"Os segredos da mente milionária": {
			"quantidadePaginas": 200,
			"autor": "T. Harv Eker",
			"editora": "Sextante"
		}
	}
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Os segredos da mente milionária tem ${book('Os segredos da mente milionária').quantidadePaginas} páginas`);
// O livro Os segredos da mente milionária tem 200 páginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro A Guerra dos Tronos é ${book('A Guerra dos Tronos').autor}.`);
// O autor do livro A Guerra dos Tronos é George R. R. Martin.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
	`O livro O poder do Hábito foi publicado pela editora ${book('O poder do Hábito').editora}`
);
// O livro O poder do Hábito foi publicado pela editora Objetiva
