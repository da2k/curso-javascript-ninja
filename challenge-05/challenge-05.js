/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['string', 34, NaN, [1, 2, 3], 2 * 2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arr = [7, 4, 2, 12, 10, 9, 17, 20];

function getArray(arr) {
  return arr;
};
getArray(arr);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr[1]); //4

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getIndex(arr, num) {
  return arr[num];
};
getIndex(arr, 2);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr02 = ['string', 22, 12 * 2, [1, 2, 3], {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
var arr02 = ['string', 22, 12 * 2, [1, 2, 3], {}];

function getIndex(arr02, num) {
  return arr02[num];
};
getIndex(arr02, 0);
getIndex(arr02, 1);
getIndex(arr02, 2);
getIndex(arr02, 3);
getIndex(arr02, 4);

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

function book(bookName) {
  var library = {
    'book01': {
      quantidadePaginas: 100,
      autor: 'Autor01',
      editora: 'Editora01'
    },
    'book02': {
      quantidadePaginas: 200,
      autor: 'Autor02',
      editora: 'Editora02'
    },
    'book03': {
      quantidadePaginas: 300,
      autor: 'Autor03',
      editora: 'Editora03'
    }
  }

  if (!bookName) {
    return library;
  }

  return library[bookName];
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
console.log('O livro book01 tem ' + book('book01').quantidadePaginas +
  ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro book01 é ' + book('book01').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro book01 foi publicado pela editora ' + book('book01').editora + '.');
