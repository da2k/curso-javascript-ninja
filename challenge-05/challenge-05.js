/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myarray = ['anderson', true, false, {}, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function minhaFuncao(array) {

	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

//console.log(minhaFuncao(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function novaFuncao(array, indice) {

	return array[indice];
}

//console.log(novaFuncao(myarray, 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [1, 'a', true, {}, [1, 2, 3, 4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(novaFuncao(newArray, 0));
console.log(novaFuncao(newArray, 1));
console.log(novaFuncao(newArray, 2));
console.log(novaFuncao(newArray, 3));
console.log(novaFuncao(newArray, 4));

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
function book( bookName ) {

	var allBooks = {

		'Os Segredos de uma Mente Milionária' : {

			quantidadePaginas : 150,
			autor : 'XPTO',
			editora : 'Sextance'
		},

		'Pai Rico e Pai Pobre' : {

			quantidadePaginas : 230,
			autor : 'Robert K.',
			editora : 'Gente'
		}, 

		'Quem mexeu no meu queijo' : {

			quantidadePaginas : 400,
			autor : 'xxXX',
			editora : 'Brasil'
		}
	};

	return !bookName ? allBooks : allBooks[ bookName ];
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

bookName = 'Quem mexeu no meu queijo';

console.log("O livro Quem mexeu no meu queijo tem " + book( bookName ).quantidadePaginas + " paginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Quem mexeu no meu queijo é " + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Quem mexeu no meu queijo foi publicado pela editora " + book(bookName).editora);