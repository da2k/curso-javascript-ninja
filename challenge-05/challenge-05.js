/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = ['Paulo', 33, 'Fortaleza', 'Ceará', null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arg) {

	return arg;

}	

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(func(array[1]));	

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function func2(arg1, arg2) {

	return arg1[arg2];

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let valores = [null, 1, [1, 2, 3], 'Paulo', true];	

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

func(valores);

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

function book(arg) {

	let livros = {

		'Linux, a bíblia': {
			quantidadeDePaginas: 818,
			autor: 'Christopher Negus',
			editora: 'Alta Books'
		},
		'Algoritmos': {
			quantidadeDePaginas: 336,
			autor: 'Jasé Augusto Manzano e Jayr Figueiredo de Oliveira',
			editora: 'Saraiva'
		},
		'C completo e total': {
			quantidadeDePaginas: 827,
			autor: 'Herbet Schildt',
			editora: 'Pearson'
		}

	}

	return arg === undefined ? livros :livros[arg]; 

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
console.log(`O livro Algoritmos tem ${book('Algoritmos').quantidadeDePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Linux, a bíblia é ${book('Linux, a bíblia').autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro C completo e total foi publicado pela editora ${book('C completo e total').editora}`);