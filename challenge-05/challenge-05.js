/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//

const arrayValores = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function myFunction(arg) {
  return arg;
}

myFunction(arrayValores);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(arrayValores[1])); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

const arrayDois = [11, 12, 13, 14, 15];

function myFunctionDois(arr, numberIndice) {
  return arr[numberIndice];
}

console.log(myFunctionDois(arrayDois, 3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

const arrFiveValues = [1, false, "enzo", [0, 1], { a: "z" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunctionDois(arrFiveValues, 0));
console.log(myFunctionDois(arrFiveValues, 1));
console.log(myFunctionDois(arrFiveValues, 2));
console.log(myFunctionDois(arrFiveValues, 3));
console.log(myFunctionDois(arrFiveValues, 4));

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
  const bookDetails = {
    livroOne: {
      name: "Livro one",
      quantidadePaginas: 10,
      autor: "BOOK um",
      editora: "editora um",
    },
    livroTwo: {
      name: "Livro two",
      quantidadePaginas: 20,
      autor: "BOOK dois",
      editora: "editora dois",
    },
    livroThree: {
      name: "Livro three",
      quantidadePaginas: 30,
      autor: "BOOK três",
      editora: "editora três",
    },
  };

  if (name === "livroOne") {
    return bookDetails.livroOne;
  }

  if (name === "livroTwo") {
    return bookDetails.livroTwo;
  }

  if (name === "livroThree") {
    return bookDetails.livroThree;
  }

  return bookDetails;
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
  ` O livro ${book("livroOne").name} tem ${book("livroOne").quantidadePaginas} páginas  `,
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(
  `O autor do livro ${book("livroOne").name} é ${book("livroOne").autor}`,
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(
  `O livro ${book("livroOne").name} foi publicado pela editora ${book("livroOne").editora}`,
);
