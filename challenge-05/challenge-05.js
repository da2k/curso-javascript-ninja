/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 5, 'JavaScript', {nome: 'André', idade: 22}, [1, 2, 3], function() {return true}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(arr)[1]); // JavaScript

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getValueByIndex(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr_2 = [ 10, 'Ninja', {nome: 'João', idade: 12}, [3, 2, 1], function() {return false}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getValueByIndex(arr_2, 0)); // 10
console.log(getValueByIndex(arr_2, 1)); // Ninja
console.log(getValueByIndex(arr_2, 2)); // {nome: 'João', idade: 12}
console.log(getValueByIndex(arr_2, 3)); // [3, 2, 1]
console.log(getValueByIndex(arr_2, 4)); // [Function]

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
function book(book_name) {
  var all_books = {
    'Segredos do Ninja Javascript': {
      quantidadePaginas: 488,
      autor: 'John Resig & Bear Bibeault',
      editora: 'Novatec'
    },
    'Introdução ao HTML5': {
      quantidadePaginas: 220,
      autor: 'Bruce Lawson & Remy Sharp',
      editora: 'Alta Books'
    },
    'Smashing CSS': {
      quantidadePaginas: 283,
      autor: 'Erick A. Meyer',
      editora: 'Bookman'
    }
  };
  return all_books[book_name] ? all_books[book_name] : all_books;
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
var book_name = 'Introdução ao HTML5';
console.log('O livro '+book_name+' tem '+book(book_name).quantidadePaginas)+' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+book_name+' é '+book(book_name).autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+book_name+' foi publicado pela editora '+book(book_name).editora+'.');
