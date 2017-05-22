/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arbit = ['adeonir', 40, [2, 5, 19], true, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(arbit)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(arr, num) {
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var typers = [7, 'string', true, {foo: 'bar'}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParam(typers, 0));
console.log(twoParam(typers, 1));
console.log(twoParam(typers, 2));
console.log(twoParam(typers, 3));
console.log(twoParam(typers, 4));

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
function myBooks(bookName) {
  var allBooks = {
    'Eloquent JavaScript': {
      quantidadePaginas: 472,
      autor: 'Marijn Haverbeke',
      editora: 'No Starch Press'
    },
    'Segredos do Ninja JavaScript': {
      quantidadePaginas: 488,
      autor: 'John Resig & Bear Bibeault',
      editora: 'Novatec'
    },
    'Mago - Aprendiz': {
      quantidadePaginas: 416 ,
      autor: 'Raymond E. Feist',
      editora: 'Arqueiro'
    }
  }

  return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(myBooks());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Mago - Aprendiz';
console.log('O livro ' + bookName + ' tem ' + myBooks(bookName).quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'Segredos do Ninja JavaScript';
console.log('O autor do livro ' + bookName + ' é ' + myBooks(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'Eloquent JavaScript';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + myBooks(bookName).editora + '.');
