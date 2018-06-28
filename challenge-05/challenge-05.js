/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaInformacoes(a) {
	return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaInformacoes(valores)[1]); // 2 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValores(valor, indice) {
	return valor[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variosTipos = [1, "Um", true, [1, 2], {nome: "Camila"}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaInformacoes(valores)[0]);
console.log(retornaInformacoes(valores)[1]);
console.log(retornaInformacoes(valores)[2]);
console.log(retornaInformacoes(valores)[3]);
console.log(retornaInformacoes(valores)[4]);

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
function book(nomeLivro) {
	livros = {
		"O Hobbit": {
			quantidadePaginas: 296,
			autor: "J. R. R. Tolkien",
			editora: "WMF"
		},
		"A guerra dos tronos": {
			quantidadePaginas: 694,
			autor: "George R. R. Martin",
			editora: "Leya"
		},
		"Quem é você, Alasca?": {
			quantidadePaginas: 223,
			autor: "John Green",
			editora: "Intrinseca"
		}
	};
		
	return !nomeLivro ? livros : livros[nomeLivro];	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); /*{ 'O Hobbit':
			   { quantidadePaginas: 296,
			     autor: 'J. R. R. Tolkien',
			     editora: 'WMF' },
			 'A guerra dos tronos':
			   { quantidadePaginas: 694,
			     autor: 'George R. R. Martin',
			     editora: 'Leya' },
			 'Quem é você, Alasca?':
			   { quantidadePaginas: 223,
			     autor: 'John Green',
			     editora: 'Intrinseca' } 
			 } */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "A guerra dos tronos";
console.log("O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeLivro + " foi publicado pela editora " + book(nomeLivro).editora + ".");
