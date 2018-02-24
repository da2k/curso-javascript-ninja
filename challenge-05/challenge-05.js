/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 'matheus', 1, true, false, { prop: 1, prop: 2} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc( param ) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoNumbers(arr, number) {
  return arr[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [ 'Maiza', 5, undefined, false, {} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
twoNumbers(arr2, 2);

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
  var obj = {
    'O livro de Eli': {
      quantidadePaginas: 200,
      autor: 'Unknow',
      editora: 'Suiça'
    },
    'O Altruista': {
      quantidadePaginas: 150,
      autor: 'Paulo Coelho',
      editora: 'Unknow'
    },
    'O principe': {
      quantidadePaginas: 300,
      autor: 'Nicolau Maquiavel',
      editora: 'Alguma ai'
    },
  };
  return !bookName ? obj: obj[bookName];
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
var bookName = 'O livro de Eli';
console.log('O livro ' + bookName + ' tem '+ book(bookName).quantidadePaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é '+ book(bookName).autor);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('livro ' + bookName + ' é ' + book(bookName).editora);
