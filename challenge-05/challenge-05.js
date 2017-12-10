/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrAnything = [ 'Mark', 5, true, undefined, {a: 2, b: 3} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArr(arr) {
	return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArr(arrAnything)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getValueByIndex(arr, i) {
	console.log(arr[i]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrFiveTypes = [true, "mark", 100, {a: 1, b: 2}, [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (var i = 0; i < arrFiveTypes.length; i++) {
	console.log(arrFiveTypes[i]);
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
function book(name) {
	var library;
	
	library = {
		'book1' : {
			'quantidadePaginas' : 100,
			'autor' : '[Autor 1]',
			'editora' : '[Editora 1]'
		},
		'book2' : {
			'quantidadePaginas' : 200,
			'autor' : '[Autor 2]',
			'editora' : '[Editora 2]'
		},
		'book3' : {
			'quantidadePaginas' : 300,
			'autor' : '[Autor 3]',
			'editora' : '[Editora 3]'
		}
	};

	return library[name] ? library[name] : library;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro book2 tem ' + book('book2').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro book1 é ' + book('book1').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro book3 foi publicado pela editora ' + book('book3').editora);