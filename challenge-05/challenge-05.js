/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var value = [1, 'diego', null, true, false]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function array(arg){
	return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(array(value)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(arg, i){
	return console.log(arg[i]);
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ['Diego', 1, [1, 2, 'carro'], { estado: 'mg' }, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
twoParam(myVar, 0);
twoParam(myVar, 1);
twoParam(myVar, 2);
twoParam(myVar, 3);
twoParam(myVar, 4);


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
function book(name){
	var library = {
		book1: {
			quantidadePaginas: 100,
			autor: 'Fulano',
			editora: 'editora qualquer'
		},
		book2: {
			quantidadePaginas: 150,
			autor: 'Ciclano',
			editora: 'editora concorrente'
		}, 
		book3: {
			quantidadePaginas: 200,
			autor: 'Beltrano',
			editora: 'editora do mal'
		}
	};
	return library[name] ? library[name] : library;
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
console.log('O livro book2 tem ' + book('book1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro book2 é " + book('book2').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro book3 foi publicado pela editora " + book('book3').editora + ".");
