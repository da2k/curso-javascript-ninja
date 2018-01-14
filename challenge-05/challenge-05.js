/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['batata', 3, false, '4', null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function readArray(param) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(readArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function readArrayInIndex(param, ind) {
  return param[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, 'texto', null, {prop: 1}, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(readArrayInIndex(arr2, 0));
console.log(readArrayInIndex(arr2, 1));
console.log(readArrayInIndex(arr2, 2));
console.log(readArrayInIndex(arr2, 3));
console.log(readArrayInIndex(arr2, 4));

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
function book(name) {
  var books = {
    'Livro 1': {
      quantidadePaginas: 200,
      autor: 'Autor 1',
      editora: 'Editora 1'
    },
    'Livro 2': {
      quantidadePaginas: 400,
      autor: 'Autor 2',
      editora: 'Editora 2'
    },
    'Livro 3': {
      quantidadePaginas: 300,
      autor: 'Autor 2',
      editora: 'Editora 1'
    }
  };

  return name ? books[name] : books;
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
var bookName = 'Livro 1';
var bookInfos = book(bookName);
console.log(`O livro ${bookName} tem ${bookInfos.quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName2 = 'Livro 2';
var bookInfos2 = book(bookName2);
console.log(`O autor do livro ${bookName2} é ${bookInfos2.autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName3 = 'Livro 3';
var bookInfos3 = book(bookName3);
console.log(`O livro ${bookName3} foi publicado pela editora ${bookInfos3.editora}.`);