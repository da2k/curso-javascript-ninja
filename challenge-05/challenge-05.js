/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [1, true, '4nd4r', 'agenda', [2, 3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(param){
	return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(param)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function otherFunc(x,y){
	return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayTypes = [1, true, 'agenda', [2, 3], null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
otherFunc(arrayTypes, 0);
otherFunc(arrayTypes, 1);
otherFunc(arrayTypes, 2);
otherFunc(arrayTypes, 3);
otherFunc(arrayTypes, 4);

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
function book(nome){
	var args = {
			'Pedro Paramo': {
				quantidadePaginas: 103,
				autor: 'Juan Rulfo',
				editora: 'Companhia das Letras'
		},
			'O Iluminado': {
				quantidadePaginas: 300,
				autor: 'Stephen King',
				editora: 'Suma das Letras'
			},
			'Cem Anos De Solidao': {
				quantidadePaginas: 730,
				autor: 'Gabriel Garcia Marquez',
				editora: 'Record'
			} 
	}

	if(!nome){
		return args;
	}

	return args[nome];
	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book() // Object {Pedro Paramo: Object, O Iluminado: Object, Cem Anos De Solidao: Object}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Pedro Páramo tem ' + book('Pedro Paramo').quantidadePaginas + ' páginas!')
// O livro Pedro Paramo tem 103 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Iluminado é ' + book('O Iluminado').autor + '.')
// O autor do livro O Iluminado é Stephen King.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Cem Anos de Solidão foi publicado pela editora ' + book('Cem Anos De Solidao').editora + '.')
// O livro Cem Anos de Solidão foi publicado pela editora Record.