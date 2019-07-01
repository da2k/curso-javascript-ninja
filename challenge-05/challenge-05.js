/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'Igor', true, 'Foto.jpg', null, { a: 1}, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeDoisParams(arr, numero) {
	return	arr[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, 'Igor', 'Analista Senior', true, '2016-02-20'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(recebeDoisParams(arr2, 0));
console.log(recebeDoisParams(arr2, 1));
console.log(recebeDoisParams(arr2, 2));
console.log(recebeDoisParams(arr2, 3));
console.log(recebeDoisParams(arr2, 4));

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
	var objeto = {
		'livro 1': {
			quantidadePaginas: 1,
			autor: 'Igor',
			editora: 'Nova' 
		},
		'livro 2': {
			quantidadePaginas: 2,
			autor: 'Daniela',
			editora: 'Costuras' 
		},
		'livro 3': {
			quantidadePaginas: 3,
			autor: 'Melissa',
			editora: 'Abaco' 
		},
	};

	if (!nomeLivro) {
		return objeto;
	}
	return objeto[nomeLivro];

	//return !nomeLivro ? objeto : objeto[nomeLivro];
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
console.log('O livro livro 2 tem ' + book('livro 2').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livro 2 é ' + book('livro 2').autor + ' páginas!');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro = 'livro 2'
console.log('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora + '.');

