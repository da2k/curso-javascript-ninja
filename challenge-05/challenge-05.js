/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [true, 'Fulano', 12.5, 20, undefined, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionTwoParam(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayWithFive = ['Fulano', true, undefined, null, 10.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunctionTwoParam(myArrayWithFive, 0));
console.log(myFunctionTwoParam(myArrayWithFive, 1));
console.log(myFunctionTwoParam(myArrayWithFive, 2));
console.log(myFunctionTwoParam(myArrayWithFive, 3));
console.log(myFunctionTwoParam(myArrayWithFive, 4));

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

		'livro 1': {
			quantidadePaginas: 300,
			autor: 'José',
			editora: 'Editora A'
		},

		'livro 2': {
			quantidadePaginas: 340,
			autor: 'Maria',
			editora: 'Editora B'
		},

		'livro 3': {
			quantidadePaginas: 500,
			autor: 'Sophia',
			editora: 'Editora X'
		}
	};

	if(!nomeLivro) {
	   return livros;
	}

    return livros[nomeLivro];
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
console.log('O livro "livro 3" tem ' + book('livro 3').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro "livro 2" é ' + book('livro 2').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro "livro 1" foi publicado pela editora ' + book('livro 1').editora + '.');