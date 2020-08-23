/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arrayAleatorio = [1, 2, 3, 'Henrique', {id: 12}, true, [2, 3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const retornaArray = (arr) => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(arrayAleatorio)[1]); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const retornaArrayPorIndice = (array, indice) => array[indice];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrayAleatorio2 = ['Henrique', true, false, {nome: 'Henrique'}, [1, 2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArray(arrayAleatorio2)); // [ 'Henrique', true, false, { nome: 'Henrique' }, [ 1, 2 ] ]

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
const book = (nomeLivro) => {
  const books = {
    'JavaScript O Guia Definitivo': {
      quantidadePaginas: 1080,
      autor: 'David Flanagan',
      editora: 'Bookman'
    },
    'Aprendendo Node': {
      quantidadePaginas: 312,
      autor: 'Shelly Powers',
      editora: 'Novatec'
    },
    'Primeiros Passos com React': {
      quantidadePaginas: 248,
      autor: 'Stoyan Stefanov',
      editora: 'Novate'
    }
  };
  return books[nomeLivro] || books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const nomeLivro = 'JavaScript O Guia Definitivo';

console.log(`O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas.`); // O livro JavaScript O Guia Definitivo tem 1080 páginas.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}.`); // O autor do livro JavaScript O Guia Definitivo é David Flanagan.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nomeLivro} foi publicado pela editra ${book(nomeLivro).editora}.`); // O livro JavaScript O Guia Definitivo foi publicado pela editra Bookman.
