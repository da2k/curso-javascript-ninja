/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['Luciano', '5', true, 45, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myfunction = function(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunction(myarray)[1]; // "5"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var indiceArr = function(arr, index){
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var casa = ['quarto', 200, true, {}, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indiceArr(casa,0) // "quarto"
indiceArr(casa,1) // 200
indiceArr(casa,2) // true
indiceArr(casa,3) // object
indiceArr(casa,4) // undefined

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

function book(bookName){

  var allBook = {
    'Segredos do Ninja Javascript': {
      quantidadePaginas: 488,
      author: 'John Resing & Bear Bibeault',
      editora: 'Novatec'

    },
    'Introdução ao HTML5': {
      quantidadePaginas: 220,
      author: 'Bruce Lawson & Remy Sharp',
      editora: 'Alta Books'

    },
    'Smashing CSS': {
      quantidadePaginas: 283,
      author: 'Erick A. Meyer',
      editora: 'Bookman'

    }
  };

  // Versao verbosa
  // if(!bookName) {
  //   return allBook;
  // }

  // return allBook[bookName];

  return !bookName ? allBook : allBook[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book() );

var bookName =  'Introdução ao HTML5';
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log( "O livro " + bookName + ' tem' + ' ' + book(bookName).quantidadePaginas + ' páginas.' );
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log( "O autor livro " + bookName + ' é' + ' ' + book(bookName).author + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log( "O livro " + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.' );

