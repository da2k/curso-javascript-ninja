/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [true, 'Allef', 'Silva', 22, 1993];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr ){
	return arr;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
myFunction( myArr )[1]; // Allef

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myTwoPar( arr1, par2 ){
	return arr1[par2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrDif = [true, 'String', 1, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myTwoPar( myArrDif, 0) );
console.log( myTwoPar( myArrDif, 1) );
console.log( myTwoPar( myArrDif, 2) );
console.log( myTwoPar( myArrDif, 3) );
console.log( myTwoPar( myArrDif, 4) );

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

function book( livro ){
	var obj = {
		'O Codigo Da Vinci': {
			quantidadePaginas: 540,
			autor: 'Dan Brown',
			editora:  'Bertrand'
		},
		'O Alquimista': {
			quantidadePaginas: 264,
			autor: 'Paulo Coelho',
			editora:  'Planeta'
		},
		'A Cabana': {
			quantidadePaginas: 272,
			autor: 'William P. Young',
			editora:  'Sextante'
		},
	};

	if ( livro === undefined ){
		return obj;
	}

	return obj[ livro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book('O Codigo Da Vinci') );
console.log( book('O Alquimista') );
console.log( book('A Cabana') );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log( 'O livro O Alquimista tem '+ book('O Alquimista').quantidadePaginas +' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro A Cabana é '+ book('A Cabana').autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro O Codigo Da Vinci foi publicado pela editora '+ book('A Cabana').editora +'.');
