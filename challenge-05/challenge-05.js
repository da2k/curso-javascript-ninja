/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1,null, "ola", undefined, 1.9, "teste"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndice(arg0,arg1){
	return arg0[arg1];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = myArray;

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaIndice(arr,0));
console.log(retornaIndice(arr,1));
console.log(retornaIndice(arr,2));
console.log(retornaIndice(arr,3));
console.log(retornaIndice(arr,4));
console.log(retornaIndice(arr,5));

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

function book(bookName) {

	var allBooks = {
		'ExemploUm': {
			quantidadePaginas: 499,
			autor: 'nao sei',
			editora: 'NaoPresta'
		},
		'ExemploDois': {
			quantidadePaginas: 889,
			autor: 'Sei La',
			editora: 'Noiados'
		},
		'ExemploTres': {
			quantidadePaginas: 121,
			autor: 'Cachoeira',
			editora: 'Ventos'
		}
	};

	return !bookName ? allBooks : allBooks[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro ExemploTres tem "+ book("ExemploTres").quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro ExemploDois é "+ book("ExemploDois").autor +".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro ExemploUm foi publicado pela editora "+ book("ExemploUm").editora +".");
