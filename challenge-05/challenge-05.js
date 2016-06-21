/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [ "Diogo", "Rodrigues", 28, true, 1.75, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr ){
	return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction( myArr )[ 1 ];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( arr, number ){
	return arr[ number ];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [ "Curso", "JS", 5, true, 0 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2( myVar2, 0 );
myFunction2( myVar2, 1 );
myFunction2( myVar2, 2 );
myFunction2( myVar2, 3 );
myFunction2( myVar2, 4 );

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
function book( name ) {
	var myBook = {
		livro1 : {
			quantidadePaginas: 335,
			autor: "Diogo Rodrigues",
			editora: "Lado Design"
		},
		livro2 : {
			quantidadePaginas: 620,
			autor: "Maujor",
			editora: "Novatec"
		},
		livro3 : {
			quantidadePaginas: 200,
			autor: "Fernando Daciuk",
			editora: "Casa do Código"
		}
	};

	if ( name ) {
		if ( name == "livro1" ) {
			return myBook.livro1;
		}

		if ( name == "livro2" ) {
			return myBook.livro2;
		}

		if ( name == "livro3" ) {
			return myBook.livro3;
		}
	}	

	return myBook;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var book1 = "livro1";

console.log ( "O livro " + book1 + " tem " + book( book1 ).quantidadePaginas + " páginas!" );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var book2 = "livro2";
	
console.log ( "O autor do livro " + book2 + " é " + book( book2 ).autor + "." );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var book3 = "livro3";

console.log ( "O livro " + book3 + " foi publicado pela editora " + book( book3 ).editora + "." );