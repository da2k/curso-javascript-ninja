/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var minhaVar  = [5, "Gustavo", function xpto(){return 10;}, {nome: "Isabella", idade: 30}, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(param){
	return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(minhaFuncao(minhaVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function outraFuncao(param1, param2){
	return param1[param2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray = ["A", 10, null, {fruta: "uva", quantidade: 1}, [20, 40, 60]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(outraFuncao(meuArray, 0));
console.log(outraFuncao(meuArray, 1));
console.log(outraFuncao(meuArray, 2));
console.log(outraFuncao(meuArray, 3));
console.log(outraFuncao(meuArray, 4));

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
function book(nomeLivro){
	var livros = {
		'Livro A': {
			quantidadePaginas: 100,
			autor: 'Alfredo',
			editora: 'Atica'
		},
		'Livro B': {
			quantidadePaginas: 200,
			autor: 'Bruno',
			editora: 'Basa'
		},
		'Livro C': {
			quantidadePaginas: 300,
			autor: 'Carlos',
			editora: 'Catamo'
		}
	};
	
	return nomeLivro === undefined ? livros : livros[nomeLivro];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()
//ou
console.log(book("Livro A"));
console.log(book("Livro B"));
console.log(book("Livro C"));


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro A tem " + book("Livro A").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro B é " + book("Livro B").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro B foi publicado pela editora " + book("Livro B").editora + ".");
