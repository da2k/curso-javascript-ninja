/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var byArray = ['TiagoNunes', undefined, true, 117, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray( arr ){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myArray( byArray )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayParam( arrNumber, number ){
  return arrNumber[ number ];
};


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var varArray = [30, false, null, 'Flamengo', ['Tiago', true, 21.32]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayParam( varArray,0 ));
console.log(arrayParam( varArray,1 ));
console.log(arrayParam( varArray,2 ));
console.log(arrayParam( varArray,3 ));
console.log(arrayParam( varArray,4 ));

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
function book ( myBooks ){

  var _books = {
    'O Livro JavaScript Ninja': {
      quantidadePaginas : 1780,
      autor: 'Clis Alves',
      editora: 'EUA'
    },
    'Guia Definitivo JavaScript': {
      quantidadePaginas : 340,
      autor: 'Mara Nunes',
      editora: 'BookJavaScript'
    },
    'Testes JavaScript': {
      quantidadePaginas : 106,
      autor: 'Rodrigo Agno',
      editora: 'Google'
    }
  };

  return !myBooks ? _books : _books [ myBooks ];
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
var myBook = 'Testes JavaScript';

console.log('O livro '+  myBook  +' tem '+ book( myBook ).quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var myBook = 'Guia Definitivo JavaScript';

console.log('O autor do livro '+  myBook +' é '+ book( myBook ).autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var myBook = 'O Livro JavaScript Ninja';

console.log('O livro '+  myBook  +' foi publicado pela editora '+ book( myBook ).editora +'.')
