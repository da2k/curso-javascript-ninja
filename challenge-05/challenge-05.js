/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var valores = ["pessoa", 1, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(x){
	return x;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(valores)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function param(arr, ind){
	return x[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var variavel1 = ["nome", 27, true, false, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

param(variavel1, 0);
param(variavel1, 1);
param(variavel1, 2);
param(variavel1, 3);
param(variavel1, 4);

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

function book(nome){
	var livros = {
		"livro1": {
			quantidadePaginas: 250,
			autor: "Manoel de Barros",
			editora: "cultura"
		},
		"livro2": {
			quantidadePaginas: 211,
			autor: "Antonio Bandeiras",
			editora: "cultura"
		},
		"livro3": {
			quantidadePaginas: 250,
			autor: "Cecilia Meireles",
			editora: "cultura"
		},
		
	};

	return !nome ? livros : livros[nome];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

"O livro livro2 tem "+ book("livro2").quantidadePaginas +" páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro livro2 é "+ book("livro2").autor +".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

"O livro livro2 foi publicado pela editora " + book("livro2").editora +".";
