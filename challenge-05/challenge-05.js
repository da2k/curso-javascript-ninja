/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [2, false, 'Tannus', 2.4, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function paramArr(arr) {
  return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( paramArr(arr)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(arr, indice) {
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrTips = ['Tannus', 12, 3.4, null, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( paramArr(arrTips) );

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
function book(nameBook) {
  var books = {
    'Guia Front-End': {
      quantidadePaginas: 174,
      autor: 'Diego Eis',
      editora: 'Casa do Código' },
    'UX Design': {
      quantidadePaginas: 217,
      autor: 'Fabricio Teixeira',
      editora: 'Casa do Código' },
    'MEAN': {
      quantidadePaginas: 367,
      autor: 'Flávio Almeida',
      editora: 'Casa do Código' }
  };

  return nameBook === undefined ? books : books[nameBook];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = book('MEAN');
console.log( 'O livro MEAN tem ' + livro.quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro MEAN é ' + livro.autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro MEAN foi publicado pela editora ' + livro.editora + '.' );

