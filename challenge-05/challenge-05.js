/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 1, 2, 3, 4, 5 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function otherFunction(arr, idx) {
  return arr[idx];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mixedArray = [ 1, 'a', true, null, undefined ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(mixedArray));

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
function book(title) {
  var books = {
    CLEAN_ARCHITECTURE: {
      quantidadePaginas: 430,
      autor: 'Robert C. Martin',
      editora: 'Prentice Hall'
    },
    DESIGN_PATTERNS: {
        quantidadePaginas: 416,
        autor: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides',
        editora: 'Addison-Wesley'
    },
    HARRY_POTTER: {
      quantidadePaginas: 636,
      autor: 'J. K. Rowling',
      editora: 'Bloomsbury Publishing'
    }
  };

  if (title === undefined) {
    return books;
  }

  return books[title];
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
console.log("O livro Clean Architecture tem " + book('CLEAN_ARCHITECTURE').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("Os autores do livro Design Patterns são " + book('DESIGN_PATTERNS').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Harry Potter foi publicado pela editora " + book('HARRY_POTTER').editora + ".")
