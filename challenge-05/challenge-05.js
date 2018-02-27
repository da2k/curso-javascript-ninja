/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = ['Valor 1', 2, 'Valor 3', 4, 'Valor 5'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const funcArr = (arr) => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const funcArr2 = (arr, num) => arr[num];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arr2 = ['Valor 1', 2, true, 4.7, 'Valor 5'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcArr2(arr2, 0); // Valor 1
funcArr2(arr2, 1); // 2
funcArr2(arr2, 2); // true
funcArr2(arr2, 3); // 4.7
funcArr2(arr2, 4); // Valor 5

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
const book = (bookName) => {
  const myBooks = {
		'Primeiros Passos Com React - Construindo Aplicações Web': {
			quantidadePaginas: 248,
			autor: 'Stoyan Stefanov',
			editora: 'Novatec'
		},
		'Javascript - O Guia Definitivo': {
			quantidadePaginas: 1080,
			autor: 'David Flanagan',
			editora: 'Bookman'
		},
		'PHP - Programando com Orientação a Objetos': {
			quantidadePaginas: 552,
			autor: 'Pablo Dall´Oglio',
			editora: 'Novatec'
		}
	}

	return !bookName ? myBooks : myBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('Primeiros Passos Com React - Construindo Aplicações Web');
book('Javascript - O Guia Definitivo');
book('PHP - Programando com Orientação a Objetos');

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro PHP - Programando com Orientação a Objetos tem ${book('PHP - Programando com Orientação a Objetos').quantidadePaginas} páginas!`);
// O livro PHP - Programando com Orientação a Objetos tem 552 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro PHP - Programando com Orientação a Objetos é ${book('PHP - Programando com Orientação a Objetos').autor}.`);
// O autor do livro PHP - Programando com Orientação a Objetos é Pablo Dall´Oglio.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro PHP - Programando com Orientação a Objetos foi publicado pela editora ${book('PHP - Programando com Orientação a Objetos').editora}.`);
// O livro PHP - Programando com Orientação a Objetos foi publicado pela editora Novatec.
