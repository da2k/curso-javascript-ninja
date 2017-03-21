/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var foo = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arr) {
  return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(foo)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function anotherFunction (arr, num) {
  return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var bar = ['lorran', 2, true, null, [3, 4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
anotherFunction(bar, 0); // 'lorran'
anotherFunction(bar, 1); // 2
anotherFunction(bar, 2); // true
anotherFunction(bar, 3); // null
anotherFunction(bar, 4); // [3, 4]

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
function book (name) {
  var myvar = {
    'Steve Jobs': {
      quantidadePaginas: 900,
      autor: 'Vida',
      editora: 'Editora3'
    },
    'Contos da Academia Dos Caçadores de Sombras': {
      quantidadePaginas: 504,
      autor: 'Maureen Johnson, Robin Wasserman, Cassandra Clare, Brennan, Rees Sarah',
      editora: 'Galera Record'
    },
    'The Tales of Beedle the Bard': {
      quantidadePaginas: '180',
      autor: 'J.K. Rowling',
      editora: 'Pottermore'
    }
  };
  
  return !name ? myvar : myvar[name];
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
console.log('O livro Steve Jobs tem ' + book('Steve Jobs').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro The Tales of Beedle the Bard é ' + book('The Tales of Beedle the Bard').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Contos da Academia Dos Caçadores de Sombras foi publicado pela editora ' + book('Contos da Academia Dos Caçadores de Sombras').editora + '.');
