/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var newArray = [1, 'Vitor', true, function(){}, 2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retArray (args) {
	return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

retArray(newArray)[1]; // 'Vitor'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function retorna(args, number) {
	return args[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var tipos = [1, 'Vitor', true, function(){}, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

retArray(tipos); // [1, 'Vitor', true, function(){}, NaN]

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

function book(name) {
	var books = {
		'book1': {
			quantidadeDePaginas: 100,
			autor: 'Fulano',
			editora: 'Fulano1',
		},
		'book2': {
			quantidadeDePaginas: 200,
			autor: 'Ciclano',
			editora: 'Ciclano2',
		},
		'book3': {
			quantidadeDePaginas: 300,
			autor: 'Beltrano',
			editora: 'Beltrano3',
		}
	}

	if(name !== undefined) {
		return books[name];
	}

	return books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

book('book1).quantidadeDePaginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

book('book1).autor

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

book('book1).editora
