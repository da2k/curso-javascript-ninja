/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var someArray = ['neuber', 32, 98, 1.86, 'masc'];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(someVar) {
  return someVar;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.console.log( returnArray()[1]; );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayValue (fullArray, indexArrayValue) {
  return someArray[indexArrayValue];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var someOtherArray = ['neuber', 32, true, undefined, someArray];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log (
  for (var i = 0; i < 5; i++) {
  returnArrayValue(someOtherArray, i);
  }; 
);

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
function book(bookName) {
  var allBooks = {
    'Primeiro titulo': {
      quantidadePaginas: 100,
      autor: 'Fulano',
      editora: 'Editora 1'
    },
    'Segundo titulo' :{
      quantidadePaginas: 200,
      autor: 'Sicrano',
      editora: 'Editora 2'
    },
    'Terceiro titulo': {
      quantidadePaginas: 300,
      autor: 'Beltrano',
      editora: 'Editora 3'
    }
  };
/*  for (var i = 0; i < 3; i++) {
    if (allBooks[i] == bookName) return allBooks[i];
  };
  return allBooks;*/
  return allBooks[bookName] !== undefined ? allBooks[bookName] : allBooks;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ? 
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Primeiro titulo tem ' + book('Primeiro titulo').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Segundo titulo é ' + book('Segundo titulo').autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Terceiro titulo foi publicado pela editora ' + book('Terceiro titulo').editora );
