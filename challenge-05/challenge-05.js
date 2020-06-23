/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, "oi", null, undefined, {prop1: 1, prop2: 2}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
	return arg;
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
 
function novaFuncao(argArray,argIndice) {
 	return argArray[argIndice];
 }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArray = [0, "um", 2, true, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(novaFuncao(novoArray,0));
console.log(novaFuncao(novoArray,1));
console.log(novaFuncao(novoArray,2));
console.log(novaFuncao(novoArray,3));
console.log(novaFuncao(novoArray,4));

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
	var livros = {
		'livro1': {
			quantidadePaginas: 10,
			autor: 'eu', 
			editora: "aquela"
		},
		
		'livro2': {
			quantidadePaginas: 20,
			autor: 'tu', 
			editora: 'outra'
		},
		
		'livro3': {
			quantidadePaginas: 30,
			autor: 'eles',
			editora: 'desconhecida'
		}
	};

/*
	if (!nomeLivro){
		return livros;
	}

	return livros[ nomeLivro ];
*/

	return !nomeLivro? livros : livros[ nomeLivro ];
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
var nomeDoLivro = '1ivro3'
console.log('O '+nomeDoLivro+' tem '+ book('livro1').quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do '+nomeDoLivro+' é ' +book('livro3').autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O '+nomeDoLivro+' foi publicado pela editora ' +book('livro2').editora+'.');