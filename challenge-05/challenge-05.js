/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [2, 7, 'marcelo', null, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
var arr = [2, 7, 'marcelo', null, function() {}];*/
function myfunction(arr) {
	return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log (myfunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2(arr, num1) {
	return arr [num1];	
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar = [5, 12, 'marcelo', null, function() {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log (myfunction(myvar, 0) );
console.log (myfunction(myvar, 1) );
console.log (myfunction(myvar, 2) );
console.log (myfunction(myvar, 3) );
console.log (myfunction(myvar, 4) );
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
function book(bookname) {
	var books = {
		'javascript jquery' : { 
		 quantidadePaginas: 650,
		 autor: 'John Duckett',
		 editora: 'Alta Books'
		},
		'HTML5 & CSS3' : {
		 quantidadePaginas: 520,
		 autor: 'John Duckett',
		 editora: 'Alta Books'
		},
		'PHP Programando com orientação a objetos' : {
		 quantidadePaginas: 490,
		 autor: 'Pablo Dall',
		 editora: 'Novatec'
		}

		
	};

	if( !bookname ) {
			return books;
		}

	return books [bookname];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log ( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro PHP Programando com orientação a objetos tem '  + book('PHP Programando com orientação a objetos').quantidadePaginas +  ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro PHP Programando com orientação a objetos é '  + book('PHP Programando com orientação a objetos').autor + ' !')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro PHP Programando com orientação a objetos foi publicado pela editora  '  + book('PHP Programando com orientação a objetos').editora )
