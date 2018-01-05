/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var list = [
	1,
	'hello',
	{name: 'ricardo'},
	[1, 2],
	function(){
		return 'minha função';
	}
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(list){
	return list;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(list[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayNumero(valores, numero){
	return valores[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var maisUmArray = [
	15,
	'agora é string',
	{ name: 'agora um objeto' },
	[ 'agora mais um array' ],
	function(){
		return 'por fim, uma função';
	}
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i = -1; i < maisUmArray.length; i++) console.log(arrayNumero(maisUmArray, i));

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
function book(nome){

	var livros = {
		extraordinario: {
			quantidadePaginas: 320,
			autor: 'R. J. Palacio',
			editora: 'Intrinseca'
		},
		entreIrmas: {
			quantidadePaginas: 576,
			autor: 'Peebles, Frances de Pontes',
			editora: 'Arqueiro'
		},
		oPoderDoHabito: {
			quantidadePaginas: 408,
			autor: 'Duhigg, Charles',
			editora: 'Objetiva'
		}
	};

	return livros[nome] ? livros[nome] : livros;
}

console.log(book('extraordinario'));

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = 'entreIrmas';
var livro = book(nome);
console.log('O livro ' + nome + ' tem ' + livro.quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nome + ' é ' + livro.autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nome + ' foi publicado pela editora ' + livro.editora + '.');