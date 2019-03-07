/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [10, 20, 30, 40, 15];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function crazyFunction(arg, index) {
  return arg[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var person = ["Bruno Pulis", 30, true, null, { c: 30.4 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(crazyFunction(person, 0));
console.log(crazyFunction(person, 1));
console.log(crazyFunction(person, 2));
console.log(crazyFunction(person, 3));
console.log(crazyFunction(person, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros; ok
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas) ok
    - `autor` - String ok
    - `editora` - String ok
- A função deve retornar o objeto referente ao livro passado por parâmetro. ok
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var allBooks = {
    "Deus é Soberano": {
      quantidadePaginas: 175,
      autor: "A.W.Pink",
      editora: "Editora Fiel"
    },

    "O Peregrino": {
      quantidadePaginas: 220,
      autor: "John Bunyan",
      editora: "Editora Fiel"
    },

    "Faça mais e melhor": {
      quantidadePaginas: 100,
      autor: "Tim Challies",
      editora: "Editora Fiel"
    }
  };

  return !bookName ? allBooks : allBooks[bookName];
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
console.log(
  "O livro O Peregrino tem " +
    book("O Peregrino").quantidadePaginas +
    " páginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O Peregrino é " + book("O Peregrino").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "O livro O Peregrino foi publicado pela editora " +
    book("O Peregrino").editora
);
