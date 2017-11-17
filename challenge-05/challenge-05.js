/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [1, true, undefined, null, 20 + 5, [1,2,3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(myArr)(1));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunc2(arr, index) {
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr2 = [1, true, undefined, null, {prop1: 1}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc2(myArr2, 0);
myFunc2(myArr2, 1);
myFunc2(myArr2, 2);
myFunc2(myArr2, 3);
myFunc2(myArr2, 4);

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
	var livros = {
		'Ajin': {
			quantidadePaginas: 120,
			autor: 'Tsuina Miura',
			editora: 'Panini'
		},
		'One Punch Man': {
			quantidadePaginas: 130,
			autor: 'One',
			editora: 'Panini'
		},
		'O Silmarilion': {
			quantidadePaginas: 460,
			autor: 'J.R.R.Tolkien',
			editora: 'Sextante'
		}
	}

	return !nomeLivro ? livros : livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeBook = 'Ajin';
console.log( `O livro ${nomeBook} tem ${book(nomeBook).paginas!}` )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( `O autor do livro ${nomeBook} é ${book(nomeBook).autor.}` )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( `O livro ${nomeBook} foi publicado pela editora ${book(nomeBook).editora.}` )