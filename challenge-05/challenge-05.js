/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var testArray = ['teste', 1, null, false, 1.98];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna(arg){
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(testArray[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(arg1, arg2){
	return arg1[arg2];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var pessoa = ['Jr', 1.83, 85, null, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var i = 0; i < pessoa.length; i++) {
	console.log(doisParametros(pessoa,i));
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
function book(titulo){
	var aux = {
		'HP': {
			quantidadePaginas: 666,
			autor: 'JK',
			editora: 'teste1'
		},
		'GOT': {
			quantidadePaginas: 999,
			autor: 'Jhon',
			editora: 'teste2'
		},
		'HIMYM': {
			quantidadePaginas: 555,
			autor: 'Fulano',
			editora: 'teste3'
		}
	};
		return !titulo ?  aux : aux[titulo];
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
console.log("O livro HP tem " + book('HP').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro HP é " + book('HP').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro HP foi publicado pela editora " + book('HP').editora + ".");
