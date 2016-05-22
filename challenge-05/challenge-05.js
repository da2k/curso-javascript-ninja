/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 100, { name: 'Jon Snow', knowNothing: true }, function() { return 'Arr' }, 'Array', null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray( arr ) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( getArray( arr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function indexArray( arr, index ) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrTest = [ 'I am Array', 54, { arr: true, fiveValues: true }, undefined, [ 1, 2, 3 ] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( indexArray( arrTest, 0 ) );
console.log( indexArray( arrTest, 1 ) );
console.log( indexArray( arrTest, 2 ) );
console.log( indexArray( arrTest, 3 ) );
console.log( indexArray( arrTest, 4 ) );

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
  var books = {
    'Guia Front-End - O caminho das pedras para se tornar um dev front-end': {
      'quantidadePaginas': 174,
      'autor': 'Diego Eis',
      'editora': 'Casa do Código'
    },
    'Eloquent JavaScript - A modern introduction to programming': {
      'quantidadePaginas': 472,
      'autor': 'Marijn Haverbeke',
      'editora': 'No Starch Press'
    },
    'HTML5 - A linguagem de marcação que revolucionou a web': {
      'quantidadePaginas': 320,
      'autor': 'Maurício Samy Silva',
      'editora': 'Novatec',
    }
  };

  return books[bookName] ? books[bookName] : books;
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
console.log( 'O livro Guia Front-End - O caminho das pedras para se tornar um dev front-end tem ' + book( 'Guia Front-End - O caminho das pedras para se tornar um dev front-end' ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro HTML5 - A linguagem de marcação que revolucionou a web é ' + book( 'HTML5 - A linguagem de marcação que revolucionou a web' ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Eloquent JavaScript - A modern introduction to programming foi publicado pela editora ' + book( 'Eloquent JavaScript - A modern introduction to programming' ).editora + '.' );
