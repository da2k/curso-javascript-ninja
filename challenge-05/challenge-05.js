/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 1, "Matheus", true, undefined, { prop1: "Prop1", prop2: "Prop2" } ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receiveArray( arr ) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( receiveArray(myArray)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnIndex( valueArray, index ) {
	return valueArray[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array5 = [ "JavaScript Ninja", 1, true, null, { prop1: "Matheus", prop2: "JS" } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for( i = 0; i < array5.length; i++ ) {
	returnIndex( array5,[i] );
}

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
	var bookAll = { 
		"Rica Mente": { 
			quantidadePaginas: 423,
			autor: "Dr Negrelli",
			editora: "INEXH"
		},
		"A Arte da Guerra": { 
			quantidadePaginas: 322,
			autor: "Sun Tzu",
			editora: "Sextante"
		},
		"The Lean Startup": { 
			quantidadePaginas: 534,
			autor: "Eric Reis",
			editora: "Abril"
		}
	}

	if ( bookName ) {
		return bookAll[bookName];
	}
	return bookAll;
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
console.log( "O livro Rica Mente tem " + book("Rica Mente").quantidadePaginas + " páginas!" );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro The Lean Startup é " + book("The Lean Startup").autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( "O livro A Arte da Guerra foi publicado pela editora " + book("A Arte da Guerra").editora );
