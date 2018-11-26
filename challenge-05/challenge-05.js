/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ["Java Script", 1, true, { nome: "joão" }, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArrayByIndex(arg1, arg2) {
  return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myOtherArray = ["String", 1.2, [1, 2, 3], true, { obj: "test" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArrayByIndex(myOtherArray, 0));
console.log(getArrayByIndex(myOtherArray, 1));
console.log(getArrayByIndex(myOtherArray, 2));
console.log(getArrayByIndex(myOtherArray, 3));
console.log(getArrayByIndex(myOtherArray, 4));

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
  var books = {
    "Livro 1": {
      quantidadePaginas: 100,
      autor: "autor livro 1",
      editora: "editora do livro 1"
    },
    "Livro 2": {
      quantidadePaginas: 200,
      autor: "autor livro 2",
      editora: "editora do livro 2"
    },
    "Livro 3": {
      quantidadePaginas: 300,
      autor: "autor livro 3",
      editora: "editora do livro 3"
    }
  };

  return bookName ? books[bookName] : books;
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
var bookName = "Livro 2";
console.log(
  "O livro " +
    bookName +
    " tem " +
    book(bookName).quantidadePaginas +
    " páginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = "Livro 3";
console.log(
  "O autor do livro " + bookName + " é " + book(bookName).autor + "."
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = "Livro 1";
console.log(
  "O livro " +
    bookName +
    " foi publicado pela editora " +
    book(bookName).editora +
    "."
);
