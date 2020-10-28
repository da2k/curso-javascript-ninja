/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varQualquer = ['indice0', 'indice1', 'indice2', 'indice3', ' indice4' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function recebeArray(param) {
	return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 console.log (recebeArray(varQualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function recebeDoisParam ( arr, index ){
	return arr[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var pessoa1 = [ 'John' , 33 , '28/12/1986', 'Mello', { Professor: inglês}];
var pessoa2 = [ 'Julia' , 24, '12/07/1995', 'Souza', { Programadora: front-end} ];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( doisParam (pessoa1, 0) ) // 'John'
console.log( doisParam (pessoa1, 1) ) // 33
console.log( doisParam (pessoa2, 0) ) // 'Julia'


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


function book ( bookName ){
	
	var allBooks = {
	
		'O Senhor dos Anéis: O retorno do Rei': {
			numberOfPages: 416,
			author: 'J. R. R. Tolkien',
			publisher: 'Abril'
		}, 

		'O Poder do Habito': {
			numberOfPages: 408,
			author: 'Charles Duhigg',
			publisher: 'Cultura'
		},

		'Como Fazer Amigos e Influenciar Pessoas': {
			numberOfPages: 264,
			author: 'Dale Carnegie',
			publisher: 'Saraiva'
		}

	};

	if (!bookName){
		console.log(allBooks);
		return allBooks
	}
	return allBooks[ bookName ] // 4 linhas, logica mais longa
	//return !bookName ? allBooks : allBooks[ bookName ];  logica mais curta
	//return bookName ? allBooks[ bookName ] : allBooks; logica curta invertida
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = ' O Senhor dos Anéis';
console.log( 'O livro ' + bookName + ' tem ' + book( bookName ).numberOfPages + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log( 'O Autor do livro ' + bookName + ' é' + book( bookName ).author + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log ( 'O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).publisher + '.' );