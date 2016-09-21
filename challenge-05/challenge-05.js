/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var random = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayFunction(){
	return (['SP','leandro',30,'Ninja', 1000]);
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayFunction()[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function parametros(arr, num){
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrValues = [
	"Leandro",
	true,
	10,
	"SP",
	false
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
parametros(arrValues, 0); //Leandro
parametros(arrValues, 1); //true
parametros(arrValues, 2); //10
parametros(arrValues, 3); //SP
parametros(arrValues, 4); //false

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
 function book( title ){
	 var listBook = {
	 	'Supernatural': {
	 		quantidadePaginas: 556,
	 		autor: 'Leandro',
	 		editora: 'LFS'
	 	},
	 	'TWD': {
	 		quantidadePaginas: 442,
	 		autor: 'WB',
	 		editora: 'LFS'
	 	},
	 	'Apocalipse': {
	 		quantidadePaginas: 350,
	 		autor: 'Spoh',
	 		editora: 'AT'
	 	}
	 };
	 return !title ? listBook : listBook[title];
 }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nameBook = 'Apocalipse';
console.log( 'O livro ' + nameBook + ' tem ' + book(nameBook).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + nameBook + ' é ' + book(nameBook).autor + '.'  );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + nameBook + ' foi publicado pela editora ' + book(nameBook).editora + '.' );
