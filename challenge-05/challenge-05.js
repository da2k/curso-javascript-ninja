/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr  = [1, {},'Fabio', true, 'Oliveira'];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//
function myFunction(arg){
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]); // {}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function doisValores(arg1, arg2){
	return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr1 = [1, 'Fabio', [1,2,3], {nome: 'Jose', sexo: 'Masculino'}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisValores(arr1, 0));
console.log(doisValores(arr1, 1));
console.log(doisValores(arr1, 2));
console.log(doisValores(arr1, 3));
console.log(doisValores(arr1, 4));

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
function book(livro){
	livros = { 
		'Pequeno Principe': {
		 quantidadePaginas: 501,
		 autor: 'Jose Silva', 
		 editora: 'Novatec'
		},
		
		'Mad Max': {
		 quantidadePaginas: 301,
		 autor: 'Jorge',
		 editora: 'Abril'
		},
		'Tropo de Elite': {
		 quantidadePaginas: 402,
		 autor: 'Cezar Oliveira',
		 editora: 'Globo'
		}
	};
		return livro === undefined ? livros : livros[livro];
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

console.log('O livro Mad Max ' + book('Mad Max').quantidadePaginas + ' páginas!')  
// "O livro Mad Max 301 páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Mad Max é ' + book('Mad Max').autor + '.');  


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Mad Max foi publicado pela editora ' + book('Mad Max').editora + '.'); 