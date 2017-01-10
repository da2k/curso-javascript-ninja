/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1,'string', {nome: 'Maria', idade: 13}, true, 0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(param){
	return param;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, idx){
	return arr[idx];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var data = [1, 'some text', true, 0, {valor: 'value'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for(var i = 0; i < data.length; i++){
	console.log(myFunction2(data,i));	
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
function book(nomeLivro){
	var books = {
		'O Segredo': {
			quantidadePaginas: 1500,
			autor: 'Rhonda Byrne',
			editora: 'Sextante'
		},
		'Harry Potter': {
			quantidadePaginas: 500,
			autor: 'JK Roling',
			editora: 'Rocco'
		},
		'Revolução dos Bichos': {
			quantidadePaginas: 100,
			autor: 'George Orwell',
			editora: 'Companhia das letras'
		}
	}
	if(!nomeLivro){
		return books;
	}
	return books[nomeLivro]
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
console.log('O livro Revolução dos Bichos tem '+ book('Revolução dos Bichos').quantidadePaginas + ' páginas.');
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Segredo é '+ book('O Segredo').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter foi publicado pela editora '+ book('Harry Potter').editora+'.');

