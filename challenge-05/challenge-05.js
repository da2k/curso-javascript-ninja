/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var randomValues = [1 , 'dois' , true, {nome : 'John'}, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(array){
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(randomValues)[1]); // dois

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaPosicao(array, posicao){
	return array[posicao];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var randomValues2 = [2 , 'tres' , false, {name : 'Kathring'}, [NaN, null]];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i = 0; i < randomValues2.length; i++){
	console.log(retornaPosicao(randomValues2, i));
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
function book(bookName){
	var books = {
		'Domine css' : {
			quantidadePaginas : 375,
			autor : 'Maujor',
			editora : 'NewCastle'
		},
		'Ninja do JavaScript' : {
			quantidadePaginas : 789,
			autor : 'Fernando',
			editora : 'PackagePub'
		},
		'Angular Pro' : {
			quantidadePaginas : 1024,
			autor : 'John Lannister',
			editora : 'Rocco'
		}
	};
	return books[bookName] ? books[bookName] : books;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('Bootstrap Pro')); // Object {Domine css: Object, Ninja do JavaScript: Object, Angular Pro: Object}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Angular Pro tem " + book('Angular Pro').quantidadePaginas + " páginas!"); // O livro Angular Pro tem 1024 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro Ninja do JavaScript é " + book('Ninja do JavaScript').autor + "."); // O autor do livro Ninja do JavaScript é Fernando.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Domine css foi publicado pela editora " + book('Domine css').editora + "."); // O livro Domine css foi publicado pela editora NewCastle.