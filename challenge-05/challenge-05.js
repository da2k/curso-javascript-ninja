/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var q = [null, 0, false, 1, ''];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function (x) {
	return x;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction([1,2,3])[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisValores(arrayDeValores, numero) {

	return arrayDeValores[numero];
}

console.log( doisValores([1,2,3,4], 0) );

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = [null, 0, false, 1, ''];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (i = 0; i < myVar.length; i++ ) {
	console.log( doisValores(myVar, i) );
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

function book(nomeDoLivro) {

	var livro1 = {
		nome: "O Cemitério", 
		quantidadePaginas: 50, 
		autor: "Stephen King", 
		editora: "Cultura"
	}; 

	var livro2 = {
		nome: "Tieta", 
		quantidadePaginas: 1500, 
		autor: "Jorge Amado", 
		editora: "Saraiva"
	};

	var livro3 = {
		nome: "Ensaio sobre a Cegueira", 
		quantidadePaginas: 800, 
		autor: "José Saramago", 
		editora: "Alta Books"
	};

	if( nomeDoLivro === undefined ) {
		livro = {livro1, livro2, livro3 };
		return livro;
	} else if( nomeDoLivro === livro1.nome ) {
		livro = livro1;
	} else if( nomeDoLivro === livro2.nome ) {
		livro = livro2;
	} else if( nomeDoLivro === livro3.nome ) {
		livro = livro3;
	} 

	return livro;

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book("O Cemitério");
book("Tieta");
book("Ensaio sobre a Cegueira");
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro ' + book('Tieta').nome + ' tem ' + book('Tieta').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + book('Tieta').nome + ' é ' + book('Tieta').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + book('Tieta').nome + ' foi publicado pela editora ' + book('Tieta').editora + '.' );
