/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var arr = [1,'Gustavo', 3, 5, 6, 7, 8];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function getArray (arr) {
	return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

console.log(myFunction(arr)[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?

function dois (arr1 [index]){
	return arr1;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var arr3 = ['Gustavo', [1,2,'fusca'] ,{Ab:3}, 0.1, NaN];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

console.log(myFunction(arr3, 0));
console.log(myFunction(arr3, 1));
console.log(myFunction(arr3, 2));
console.log(myFunction(arr3, 3));
console.log(myFunction(arr3, 4));
console.log(myFunction(arr3, 5));

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
// ?
function book (bookNome){
	var livros = {
		'Harry Potter':{
			quantidadePaginas: 300,
			autor: 'JK Rowling',
			editora: 'Rocco'
		},
		'Eloquent Javascript':{
			quantidadePaginas: 200,
			autor: 'Marjin Haverbeke',
			editora: 'não tem'
		},
		'Javascript Guia Definitivo': {
			quantidadePaginas: 1000,
			autor: 'David Flanagan',
			editora: 'O' Reilly'
		}
	};
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book.livros;

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log('O livro' book.nome + "" + book.quantidadePaginas + "" + 'páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log('O autor do livro' book.nome + "é" + book.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log(book.nome + "" + "foi publicado pela editora" + "" + book.editora.);