/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ['th', 10, undefined, [1, 2, 3], null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receberArray(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(receberArray(qualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function receberArray2(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var qualquer0 = ['th', true, undefined, [1, 2, 3], null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(receberArray2(qualquer0, 0));
console.log(receberArray2(qualquer0, 1));
console.log(receberArray2(qualquer0, 2));
console.log(receberArray2(qualquer0, 3));
console.log(receberArray2(qualquer0, 4));
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
var book = function(nomeLivro) {
	var livros = {
		'Sexta-Feira 13: Arquivos de Crystal Lake' : {
			quantidadePaginas: 320,
			autor: 'David Grove',
			editora: 'DarkSide'
		},
		'O Demonologista' : {
			quantidadePaginas: 320,
			autor: 'Andrew Pyper',
			editora: 'DarkSide'
		},
		'A Menina Submersa' : {
			quantidadePaginas: 320,
			autor: 'Caitlín R. Kiernan',
			editora: 'DarkSide'
		}
	};
	if(nomeLivro) {
		return livros[nomeLivro];
	}
	    return livros;
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
console.log('O livro Sexta-Feira 13: Arquivos de Crystal Lake tem ' + book('Sexta-Feira 13: Arquivos de Crystal Lake').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Sexta-Feira 13: Arquivos de Crystal Lake é ' + book('Sexta-Feira 13: Arquivos de Crystal Lake').autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Sexta-Feira 13: Arquivos de Crystal Lake foi publicado pela editora ' +  book('Sexta-Feira 13: Arquivos de Crystal Lake').editora + '.');
