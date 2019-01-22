/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myVarWeek = ['Segunda','Terça','Quarta','Quinta','Sexta'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunction(myVarWeek[1]); // Terça

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function function2(arr, num){
	var result = arr[num];
	return result;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar2 = ['Euler', 1, 4, null, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function2(myVar2, 0); // "Euler"
function2(myVar2, 1); // 1
function2(myVar2, 2); // 2
function2(myVar2, 3); // null
function2(myVar2, 4); // true


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome 
do livro. 

Dentro dessa função, declare uma variável que 
recebe um objeto com as seguintes características:

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
	var allBooks = {
		'Livro da Vida':{paginas: 50, autor: 'João da Silva', editora: 'Globo'},
		'Romance da Roça':{paginas: 70, autor: 'Pedro Rodrigues', editora: 'Abril'},
		'Liberdade um Delírio':{paginas: 100, autor: 'Maria Joana', editora: 'Caldas'}
	};
	return !bookName ? allBooks : allBooks[bookName];
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book(); /*
"Liberdade um Delírio": Object { paginas: 100, autor: "Maria Joana", editora: "Caldas" }
"Livro da Bida": Object { paginas: 50, autor: "João da Silva", editora: "Globo" }
Romance da Roça": Object {paginas: 70, autor: "Pedro Rodrigues", editora: "Abril" }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookName = 'Liberdade um Delírio';
'O livro ' + bookName + 'tem ' + book(bookName).paginas + ' páginas!'; // "O livro Liberdade um Delíriotem 100 páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var bookName = 'Liberdade um Delírio';
'O autor do livro ' + bookName + ' é ' + book(bookName).autor; // "O autor do livro Liberdade um Delírio é Maria Joana"

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var bookName = 'Liberdade um Delírio';
'O livro ' + bookName + ' foi publicado pela editroa ' + book(bookName).editora; // "O livro Liberdade um Delírio foi publicado pela editroa Caldas"
