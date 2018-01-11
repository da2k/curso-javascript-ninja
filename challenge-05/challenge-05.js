/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarr = ['Caiua Franca', 37, {triathlon: 'IM 70.3'}, [1,2,3], function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
myFunc = function(myarr){
	return myarr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(myarr)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
myFunc2 = function(arr, num){
	return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrValores = [1,'2',3.0,true,{nome: 'Caiua'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunc2(arrValores, 0));
console.log(myFunc2(arrValores, 1));
console.log(myFunc2(arrValores, 2));
console.log(myFunc2(arrValores, 3));
console.log(myFunc2(arrValores, 4));

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
book = function( bookName ){
	allBooks = {
		'Livro 01': {
			quantidadePaginas: 280,
			autor: 	'Autor 01',
			editora: 'Editora 01'		
		},
		'Livro 02': {
			quantidadePaginas: 150,
			autor: 	'Autor 02',
			editora: 'Editora 02'	
		},
		'Livro 03': {
			quantidadePaginas: 480,
			autor: 	'Autor 03',
			editora: 'Editora 03'	
		}
	};

	if(!bookName){
		return allBooks;
	}else{
		return allBooks[bookName];
	};
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Livro 01 tem "+book('Livro 01').quantidadePaginas+" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O livro Livro 01 tem "+book('Livro 01').autor+" páginas!");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Livro 01 tem "+book('Livro 01').editora+" páginas!");