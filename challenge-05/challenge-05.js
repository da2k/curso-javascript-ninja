/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = [1, 2, { nome: 'Henrique' }, true, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const retornaArr = (arr) => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(myArr)[1]); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const retornaArr2 = (arr, indice) => arr[indice];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr2 = ['Henrique', { id: 1 }, [1, 2, 33], true, 2];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(myArr2)); // [ 'Henrique', { id: 1 }, [ 1, 2, 33 ], true, 2 ]

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
  let books = {
    'JavaScript O Guia Definitivo': {
      quantidadePaginas: 1080,
      autor: 'David Flanagan',
      editora: 'O\' Reilly'
    },
    'O melhor do Javascript': {
      quantidadePaginas: 153,
      autor: 'Douglas Crockford',
      editora: 'O\' Reilly'
    },
    'Eloquent JavaScript': {
      quantidadePaginas: 472,
      autor: 'Marijn Haverbeke',
      editora: 'No Starch Press'
    }
  }
  return books[nomeLivro] || books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('Esse livro não existe'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const livroGuiaDefinitivo = book('JavaScript O Guia Definitivo');
console.log(`O livro JavaScript O Guia Definitivo tem ${livroGuiaDefinitivo.quantidadePaginas} páginas.`); // O livro JavaScript O Guia Definitivo tem 1080 páginas.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro JavaScript O Guia Definitivo é ${livroGuiaDefinitivo.autor}.`); // O autor do livro JavaScript O Guia Definitivo é David Flanagan.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro JavaScript O Guia Definitivo foi publicado pela editora ${livroGuiaDefinitivo.editora}.`); // O livro JavaScript O Guia Definitivo foi publicado pela editora O' Reilly.
