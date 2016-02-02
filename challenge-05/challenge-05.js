/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var foo = [1, 'Daniel', true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arr = [1, 2, 3];
function myFunc(arg) {
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc(arr[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var arr = [1, 2, 3];
function myFunction(arr, arg) {
  return arr[arg];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, true, 'daniel', null, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(arr);

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
function Book(params) {
  var obj = {
    livro1: {
      quantidadePaginas: 200,
      autor: 'Autor1',
      editora: 'Editora1'
    },
    livro2: {
      quantidadePaginas: 250,
      autor: 'Autor2',
      editora: 'Editora3'
    },
    livro3: {
      quantidadePaginas: 300,
      autor: 'Autor3',
      editora: 'Editora3'
    }
  };
  return params;
  if (params === false) {
    return obj;
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
