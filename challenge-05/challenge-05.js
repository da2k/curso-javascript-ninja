/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['test', null, NaN,undefined, 10, false]; 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArr(arg){
	return arg;
}
myArr(arr);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function secArr(arg1,arg2){
    return arg1[arg2];
};

secArr(arr,2)
NaN

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var secArr = ['1', 1,'test',true,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function mysecArr(arg){
	return arg;
}
mysecArr(secArr); // ["1", 1, "test", true, undefined]

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
function book(nomeBook){
    	var allBooks = {
		'use a cabeça_jS': {
			quantidadePaginas: 66 ,
			autor: 'Victor Nascimento',
			editora: 'Brasil'	
			},
		'pense Simples': {
			quantidadePaginas: 190,
			autor: 'Gustavo Caetano',
			editora: 'Brasil'
			},
		'geracao varlor': {
			quantidadePaginas: 300,
			autor: 'Flavio Augusto',
			editora: 'Brasil'
			},
				
    };
	 return !nomeBook ?  allBooks : allBooks[nomeBook] ;
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
console.log('O livro Pense Simples tem' + book('pense Simples').quantidadePaginas+ 'paginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O geracao varlor é :' + book('geracao varlor').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro use a cabeça_jS foi publicado por :' + book('use a cabeça_jS').editora);
