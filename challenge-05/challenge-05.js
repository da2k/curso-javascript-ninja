/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = ['js', 1, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(args) {
  return args;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr2 = ['jsNinja', 10, false, [1,2,3], function randomFunction(){}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(myArr2, 0));
console.log(myFunction(myArr2, 1));
console.log(myFunction(myArr2, 2));
console.log(myFunction(myArr2, 3));
console.log(myFunction(myArr2, 4));

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
  let books = {
    'Clean Code': {
      quantidadePaginas: 456,
      autor: 'Robert C. Martin',
      editora: 'Alta Books'
    },
    'Não me faça pensar': {
      quantidadePaginas: 212,
      autor: 'Steve Krug',
      editora: 'Alta Books'
    },
    'O Programador Pragmático': {
      quantidadePaginas: 344,
      autor: 'Andrew Hunt',
      editora: 'Bookman'
    },
  };

  return !bookName ? books : books[bookName];

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
const qntPaginas = book('Clean Code').quantidadePaginas;
console.log(`O livro Clean Code tem ${qntPaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const autor = book('Clean Code').autor;
console.log(`O autor do livro Clean Code é ${autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const editora = book('Clean Code').editora;
console.log(`Ò livro Clean Code foi publicado pela editora ${editora}`);
