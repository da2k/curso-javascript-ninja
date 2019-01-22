/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [true, 'Danilo',function(){}, null, 22];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]); //'Danilo'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionTwo(arr, index){
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrTwo = [[22, 1996], {Name: 'Danilo'}, 'Danilo Mello', function(){}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunctionTwo(arrTwo, 0)); //[ 22, 1996 ]
console.log(myFunctionTwo(arrTwo, 1)); //{ Name: 'Danilo' }
console.log(myFunctionTwo(arrTwo, 2)); //'Danilo Mello'
console.log(myFunctionTwo(arrTwo, 3)); //[Function]
console.log(myFunctionTwo(arrTwo, 4)); //null


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
function book(bookName){

	var books = {
		'The power of habit': {
			quantidadePaginas: 405,
			autor: 'Charles Duhigg',
			editora: 'Amazon'
		},
		'The sublte art of not giving a fuck': {
			quantidadePaginas: 202,
			autor: 'Mark Manson',
			editora: 'GoodReads'
		},
		'Thinking, fast and slow': {
			quantidadePaginas: 528,
			autor: 'Daniel Kahneman',
			editora: 'Amazon'
		};
	}

	return !bookName ? books : books[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
{ 
	'The power of habit': 
		{ quantidadePaginas: 405, autor: 'Charles Duhigg', editora: 'Amazon' },
  'The sublte art of not giving a fuck': 
		{ quantidadePaginas: 202, autor: 'Mark Manson', editora: 'GoodReads' },
  'Thinking, fast and slow': 
		{ quantidadePaginas: 528, autor: 'Daniel Kahneman', editora: 'Amazon' }
}
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'The power of habit';
console.log('O livro '+bookName+' tem '+book(bookName).quantidadePaginas+' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+bookName+' é '+book(bookName).autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+bookName+' foi publicado pela editora '+book(bookName).editora+'.');

