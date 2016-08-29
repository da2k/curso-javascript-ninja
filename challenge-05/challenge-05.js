/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var foo = ["Marquinhus", 84, true, undefined, "front-end"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arr(foo) {
  return foo;
}
console.log(arr(foo)); //teste

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr(foo)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function two(foo, x) {
  return foo[x];
}
console.log(two([1,2,3,4,5], 4)); //teste
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cast = ["Marcus", 02, false, NaN, "javascript"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arr(cast)[0]);
console.log(arr(cast)[1]);
console.log(arr(cast)[2]);
console.log(arr(cast)[3]);
console.log(arr(cast)[4]);

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
function book( bookName ) {
  var allBooks = {
    "Como Eu Era Antes": {
      quantidadePaginas: 100,
      autor: "Saint-exupéry, Antoine de",
      editora: "Geração Editorial"
    },
    "Floresta Encantada": {
      quantidadePaginas: 80,
      autor: "Moyes, Jojo",
      editora: "Intrinseca"
    },
    "Amigos": {
      quantidadePaginas: 60,
      autor: "Carnegie, Dale",
      editora: "Companhia Editora Nacional"
    }
  };
  // Correto porém pode melhorar
  // if ( !bookName ) {
  //   return allBooks;
  // }
  // return allBooks[bookName];
  return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome="Amigos" //teste
console.log("O livro " + nome + " tem " + book(nome).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nome + " é " + book(nome).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nome + " foi publicado pela editora " + book(nome).editora + ".");
