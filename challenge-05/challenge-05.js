/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var array = [1,3,5,7,9];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myArray(array) {
 return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(myArray(array)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myArrayR(array, ind) {
	return array[ind];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var newArray = [1,'2',3,'quatro','arroz'];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
myArrayR(newArray, 0);
myArrayR(newArray, 1);
myArrayR(newArray, 2);
myArrayR(newArray, 3);
myArrayR(newArray, 4);
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
// ?
function book(nameBook) {
	var books = {
  	'Harry Potter' : {
    	'qtdPag' : 400,
      'autor' : 'JK Rowling',
      'editora' : 'Ministerio da Magia'
    },
    'Narnia' : {
    	'qtdPag' : 200,
      'autor' : 'Clive Staples Lewis',
      'editora' : 'Peregrino'
    },
    'Senhor dos Aneis' : {
    	'qtdPag' : 800,
      'autor' : 'J. R. R. Tolkien',
      'editora' : 'Terra Media'
    }
  };
  
  return (nameBook) ? books[ nameBook ] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book();
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var bookSelect = 'Harry Potter'
console.log('O Livro ' + bookSelect + ' tem ' + book(bookSelect).qtdPag + ' páginas!');
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O autor do livro ' + bookSelect + ' é ' + book(bookSelect).autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookSelect + ' foi publicado pela editora ' + book(bookSelect).editora + '.');
