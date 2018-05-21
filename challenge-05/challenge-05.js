/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [0, 'Gustavo CArdoso', 20.4, false, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcArr(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function printArray(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var bucket = [null, {name: 'John'}, 2018, true, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(printArray(bucket, 0));
console.log(printArray(bucket, 1));
console.log(printArray(bucket, 2));
console.log(printArray(bucket, 3));
console.log(printArray(bucket, 4));

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
function book(nome) {
  var books = {
    'Tony Iommi': {
      quantidadePaginas: 250,
      autor: 'John Doe',
      editora: 'Abril Cultural'
    },
    'Os Ramones': {
      quantidadePaginas: 270,
      autor: 'Mark Doe',
      editora: 'FTD'
    },
    'Keith Richards': {
      quantidadePaginas: 350,
      autor: 'Robert Pulsen',
      editora: 'Yago Ltd.'
    }
  }

  return (nome !== undefined) ? books[nome] : books;
}
console.log(book('Bangles'))

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'Tony Iommi';
var numPaginas = book(livro).quantidadePaginas;
console.log('O livro ' + livro + ' tem ' + numPaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var livro = 'Tony Iommi';
var autor = book(livro).autor;
console.log('O autor do livro ' + livro + ' é ' + autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var livro = 'Tony Iommi';
var editora = book(livro).editora;
console.log('O livro ' + livro + ' foi publicado pela editora ' + editora + '.');
