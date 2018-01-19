/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrIndex(arr, n) {
  return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = [1 , 'JSNINJA', true, {prop: 'value'}, [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrIndex(otherArray, 0);
arrIndex(otherArray, 1);
arrIndex(otherArray, 2);
arrIndex(otherArray, 3);
arrIndex(otherArray, 4);

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
function book(title) {

  var books = {
    livro1: {
      quantidadePaginas: 255,
      autor: 'Joao',
      editora: 'ABC'
    },
    livro2: {
      quantidadePaginas: 8,
      autor: 'Maria',
      editora: 'Oloco'
    },
    livro3: {
      quantidadePaginas: 2,
      autor: 'Jose',
      editora: 'Ratinho'
    }
  };

  return books[title] || books;

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro livro1 tem ' + book('livro1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livro2 é ' + book('livro2').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro3 foi publicado pela editora ' + book('livro3').editora + '.');
