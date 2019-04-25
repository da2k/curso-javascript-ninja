/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indexOf(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [1, 2.1, true, "bo", function() {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indexOf(newArray, 0);
indexOf(newArray, 1);
indexOf(newArray, 2);
indexOf(newArray, 3);
indexOf(newArray, 4);

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
  var obj = {
    book1: {
      quantidadePaginas: 200,
      autor: "Manuel Padeiro",
      editora: "Mundo Canibal"
    },
    book2: {
      quantidadePaginas: 200,
      autor: "Manuel Padeiro",
      editora: "Mundo Canibal"
    },
    book3: {
      quantidadePaginas: 200,
      autor: "Manuel Padeiro",
      editora: "Mundo Canibal"
    }
  };
  return !name ? obj : obj[name];
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
  "O livro book1 tem " + book("book1").quantidadePaginas + " paginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro book1 é " + book("book1").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "O livro book1 foi publicado pela editora " + book("book1").editora + "."
);
