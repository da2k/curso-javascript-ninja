/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = [ "Cleyson", 22, "RJ", "Front-End", true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function funcArray(array){
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(funcArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(array, numArray){
	return array[numArray];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var newArray = ["cleyson", 22, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/


console.log(myFunction(newArray, 0));
console.log(myFunction(newArray, 1));
console.log(myFunction(newArray, 2));
console.log(myFunction(newArray, 3));
console.log(myFunction(newArray, 4));

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
		'HTML5' : {
			quantidadePaginas : 303,
			autor : "Mauricio Samy",
			editora : "NovaTec"
		},
		'Guia Front End' : {
			quantidadePaginas : 178,
			autor : "Diego Eis",
			editora : "Casa Do Código",
		},
		'Coletânea Front end' : {
			quantidadePaginas : 158,
			autor : "Caio Ribeiro Pereira",
			editora : "Casa Do Código",
		}
	};
	if(bookName === undefined){
		return books;
	}else{
		return books[bookName];
	}
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nameBook = 'Guia Front End';

console.log("O livro " + nameBook + " tem " + book('Guia Front End').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro " + nameBook +  " é " + book('Guia Front End').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro " + nameBook + " foi publicado pela editora " + book('Guia Front End').editora + ".");