/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [10, "ARi", null, { a: 1 }, function () {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}
//or literal

// var myFunction = function(arr) { return arr; };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myarray2 = ["Ninja", 52.4, true, [1, 2, "ARI"], { b: 2 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

myFunction2(myarray2, 0);
myFunction2(myarray2, 1);
myFunction2(myarray2, 2);
myFunction2(myarray2, 3);
myFunction2(myarray2, 4);

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
  var allBooks = {
    "Segredos do Ninja Javascript": {
      quantidadePaginas: 488,
      autor: "john",
      editora: "Novatec",
    },
    "Introdução ao Html 5": {
      quantidadePaginas: 220,
      autor: "Bruce",
      editora: "Alta Books",
    },
    "Smashing CSS ": {
      quantidadePaginas: 283,
      autor: "Erick",
      editora: "Bookman",
    },
  };

  //if (!bookName) {
  //return allBooks;}
  //return allBooks[bookName];
  //ou

  return !bookName ? allBooks : allBooks[bookName]; //ANOTAÇÃO DE ARRAY PARA OBJETO
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*
console.log('O livro Introdução ao Html 5 tem ' + book ("Introdução ao Html 5" ).quantidadePaginas+ '  paginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
/*console.log(
  "O livro Smashing CSS tem " +
    book("Smashing CSS").quantidadePaginas +
    " paginas!" */
//OU DESSA FORMA
var bookName = "Segredos do Ninja Javascript";
console.log(
  "O livro " + bookName + "tem" + book(bookName).quantidadePaginas + "paginas!"
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = "Segredos do Ninja Javascript";
console.log(
  "O livro " +
    bookName +
    "foi publicado pela editora " +
    book(bookName).autor +
    "."
);

//nome do livro e editora
//"O livro [nome do livro]" foi publicado pela editora [nome da editora]"
console.log(
  "O livro  " +
    bookName +
    " foi publicado pela editora " +
    book(bookName).editora +
    " ."
);
