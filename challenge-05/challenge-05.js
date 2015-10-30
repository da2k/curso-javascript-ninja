/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [5, 'victor', 1.5, {}, []];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(i, arr){
	return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [5, 'victor', null, {}, []];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(myArray2)[0];
myFunction2(myArray2)[1];
myFunction2(myArray2)[2];
myFunction2(myArray2)[3];
myFunction2(myArray2)[4];

//OU

for (var y = 0; y < myArray2.length; y++) {
	return myFunction2(myArray2)[i];
};

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
	var livros = {
		'Livro1': {
			quantidadePaginas: 200,
			autor: 'Teobaldo',
			editora: 'Novatec'
		},
		'Livro2': {
			quantidadePaginas: 300,
			autor: 'Zé',
			editora: 'Saraiva'
		},
		'Livro3': {
			quantidadePaginas: 1000,
			autor: 'Pedro',
			editora: 'Abril'
		}
	};

	return !livro ? livro : livros[livro];
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
var buscaLivro = 'Livro1';
console.log('O livro ' + buscaLivro + ' tem ' + book(buscaLivro).quantidadePaginas + 'páginas' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var buscaLivro = 'Livro2';
console.log('O autor do livro ' + buscaLivro + ' é ' + book(buscaLivro).autor + 'páginas' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var buscaLivro = 'Livro3';
console.log('O livro ' + buscaLivro + ' foi publicado pela editora ' + book(buscaLivro).autor);