/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var randomArray = [ 1, 'um', true, undefined, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunctionArray( arr ) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunctionArray( randomArray )[1] ); //'um'


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function mySecondFunctionArray( arr, x ) {
  return arr[ x ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var randomArrayTwo = [ 2, 'dois', false, null, { nome: 'Array' } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( mySecondFunctionArray( randomArrayTwo, 0 ) ); //2
console.log( mySecondFunctionArray( randomArrayTwo, 1 ) ); //'dois'
console.log( mySecondFunctionArray( randomArrayTwo, 2 ) ); //false
console.log( mySecondFunctionArray( randomArrayTwo, 3 ) ); //null
console.log( mySecondFunctionArray( randomArrayTwo, 4 ) ); //{ nome: 'Array' }

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
function book( name ) {
  var myBooks = {
    'O Homem Duplicado': {
      quantidadePaginas: 320,
      autor: 'José Saramago',
      editora: 'Companhia das Letras'
    },

    'A Menina que Roubava Livros': {
      quantidadePaginas: 480,
      autor: 'Markus Zusak',
      editora: 'Intrinseca'
    },

    'O Conto de Aia': {
      quantidadePaginas: 368,
      autor: 'Margaret Atwood',
      editora: 'Rocco'
    }
  };

  return !name ? myBooks : myBooks[ name ];
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
console.log('O livro O Homem Duplicado tem ' + book('O Homem Duplicado').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do Livro O Conto de Aia é ' + book('O Conto de Aia').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro A Menina que Roubava Livros foi publicado pela editora ' + book('A Menina que Roubava Livros').editora + '.');