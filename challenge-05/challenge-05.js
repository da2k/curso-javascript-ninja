/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var elements = ['Adams', [1, 2, 3], 4, {}, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(param) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray([1, 2, 3])[1]); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myArray2(param, num) {
  return param[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [ true, 'JS Ninja', {}, undefined, 13 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myArray2(arr, 0)); // true
console.log(myArray2(arr, 1)); // JS Ninja
console.log(myArray2(arr, 2)); // {}
console.log(myArray2(arr, 3)); // undefined
console.log(myArray2(arr, 4)); // 13

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
function book(name) {
  var books = {
    neuromancer: {
      quantidadePaginas: 271,
      autor: 'William Gibson',
      editora: 'Aleph'
    },
    mindplayers: {
      quantidadePaginas: 276,
      autor: 'Pat Cadigan',
      editora: 'Bantam Spectra'
    },
    software: {
      quantidadePaginas: 167,
      autor: 'Rudy Rucker',
      editora: 'Ace'
    }
  };

  if ( name === 'neuromancer' ) {
  	return books.neuromancer;
  }

  if ( name === 'mindplayers' ) {
  	return books.mindplayers;
  }

  if ( name === 'software' ) {
  	return books.software;
  }

  return books;
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
console.log( 'O livro Neuromancer tem '+ book('neuromancer').quantidadePaginas +' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Mindplayers é '+ book('mindplayers').autor +'.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Software foi publicado pela editora '+ book('software').editora +'.' );