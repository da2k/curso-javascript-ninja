/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [10, 'jorge', true, null, {idade: 15}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arr) {
	 return arr; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr, num) {
	 return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['jorge', 31, false, {sexo: 'masculino'}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(valores, 0));
console.log(myFunction2(valores, 1));
console.log(myFunction2(valores, 2));
console.log(myFunction2(valores, 3));
console.log(myFunction2(valores, 4));

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
function book (nomeLivro) {
	var livros = {
	 	'Desenvolvendo com AngularJS': {
	 		quantidadePaginas: 352,
	 		autor: "Brad Green",
	 		editora: "Novatec"
	 	},
	 	'Web Design Responsivo': {
	 		quantidadePaginas: 336,
	 		autor: "Maujor",
	 		editora: "Novatec"
	 	},
	 	'Segredos do Ninja JavaScript': {
	 		quantidadePaginas: 488,
	 		autor: "John Resig",
	 		editora: "Novatec"
	 	}
	};
	return !nomeLivro ? livros : livros[nomeLivro];
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
console.log("O livro Segredos do Ninja JavaScript tem " + book('Segredos do Ninja JavaScript').quantidadePaginas + " páginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Desenvolvendo com AngularJS é " + book('Desenvolvendo com AngularJS').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Web Design Responsivo foi publicado pela editora " + book('Web Design Responsivo').editora);