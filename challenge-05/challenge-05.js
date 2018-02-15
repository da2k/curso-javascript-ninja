/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myvar = [1, {m : 1, n : 2}, 'kleber', true, null ];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray (array){
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myArray(myvar[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myArray2(array,id){
	return array[id];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var newVar = ['kleber', 34, {x : 3, y : 4}, function(){}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myArray2(newVar,4));

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
		'PHP Programando com Orientação a Objetos' : {
			quantidadePaginas : 552,
			autor : 'Pablo Dall’Oglio',
			editora : 'Novatec'
		},
		'Desenvolvendo Websites com PHP' : {
			quantidadePaginas : 320,
			autor : 'Juliano Niederauer',
			editora : 'Novatec'
		},
		'Introdução à Programação' : {
			quantidadePaginas : 488,
			autor : 'Juliano Niederauer',
			editora : 'Elsevier'
		}
	} ;

	if(!nomeLivro){
		return livros;
	}

	return livros[ nomeLivro ];

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

console.log('O livro Desenvolvendo Websites com PHP tem ' + book('Desenvolvendo Websites com PHP').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro Introdução à Programação é ' + book('Introdução à Programação').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro PHP Programando com Orientação a Objetos foi publicado pela editora '+ book('PHP Programando com Orientação a Objetos').editora + '.')
