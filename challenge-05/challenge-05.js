/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 4, 8, 16];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indiceArray(array, indice) {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDois = [1, 'string', {
  pro1: 1,
  prop2: 2
}, true, 10];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indiceArray(arrayDois, 0);
indiceArray(arrayDois, 1);
indiceArray(arrayDois, 2);
indiceArray(arrayDois, 3);
indiceArray(arrayDois, 4);

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
  var bookList = {
    'Antologia Drummond': {
      quantidadePaginas: 150,
      autor: 'Carlos Drummond',
      editora: 'Editora1'
    },
    'Antologia Vinicius': {
      quantidadePaginas: 200,
      autor: 'Vinicius de Moraes',
      editora: 'Editora2'
    },
    'Antologia Fernando': {
      quantidadePaginas: 250,
      autor: 'Fernando Pessoa',
      editora: 'Editora3'
    }
  };

  return !bookName ? bookList : bookList[bookName];
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
console.log('O livro Antologia Drummond tem ' + book('Antologia Drummond').quantidadePaginas +
  ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Antologia Vinicius é ' + book(
  'Antologia Vinicius').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'Antologia Fernando';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(
  bookName).editora + '.');
