/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayQualquer = ['Anderson','Menezes',19,true,false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arrayVariado){
	return arrayVariado;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arrayQualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr,number){
	return arr[number];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var different = [
	'Notebook',
	3000,
	true,
	{},
	function example(){}
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction2(different,0) );
console.log( myFunction2(different,1) );
console.log( myFunction2(different,2) );
console.log( myFunction2(different,3) );
console.log( myFunction2(different,4) );

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
function book(nameBooks){
	var books = {
		'Eloquent JavaScript': {
			quantidadePaginas : 120,
			autor: 'Marijn Haverbeke',
			editora: 'Mozilla'
		},
		'Javascript The Good Parts': {
			quantidadePaginas : 240,
			autor: 'Douglas Crockford',
			editora: 'O REILLY'
		},
		'Javascript The Definitive Guide': {
			quantidadePaginas : 1096,
			autor: 'Douglas Crockford',
			editora: 'O REILLY'
		}
	};

	return !nameBooks ? books : books [ nameBooks ];
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
var nameBooks = 'Javascript The Definitive Guide';
console.log( 'O livro ' + nameBooks + ' tem ' + book(nameBooks).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nameBooks +' é ' + book(nameBooks).autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nameBooks + ' foi publicado pela editora ' + book(nameBooks).editora + '.');