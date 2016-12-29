/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'Natan', false, 30, 'Curso JS Ninja', undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arg ) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction(myArray)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionArray( arg1, arg2 ) {
  return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = [ true, null, undefined, 'Valor', 16 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunctionArray(otherArray, 0 )); // true
console.log( myFunctionArray(otherArray, 1 )); // null
console.log( myFunctionArray(otherArray, 2 )); // undefined
console.log( myFunctionArray(otherArray, 3 )); // Valor
console.log( myFunctionArray(otherArray, 4 )); // 16

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
  var bookDetails = {
    'Curso JS Ninja': {
      quantidadePaginas: 200,
      autor: 'Natan',
      editora: 'Ninja'
    },

    'As crônicas do gelo e fogo - A guerra dos tronos': {
      quantidadePaginas: 617,
      autor: 'George R. R. Martin',
      editora: 'leYa'
    },

    'HTML5 - A linguagem de marcação que revolucionou a web': {
      quantidadePaginas: 420,
      autor: 'Maurício Samy Silva',
      editora: 'Novatec'
    }
  };

  return bookName ? bookDetails[bookName] : bookDetails;
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
console.log ( 'O livro As crônicas do gelo e fogo - A guerra dos tronos tem ' + book( 'As crônicas do gelo e fogo - A guerra dos tronos' ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro HTML5 - A linguagem de marcação que revolucionou a web é '  + book( 'HTML5 - A linguagem de marcação que revolucionou a web' ).autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( 'O livro As crônicas do gelo e fogo - A guerra dos tronos foi publicado pela editora ' + book( 'As crônicas do gelo e fogo - A guerra dos tronos' ).editora );
