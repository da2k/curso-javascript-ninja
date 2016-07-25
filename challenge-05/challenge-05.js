/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [5, 'string', false, { prop: 'name'} , 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(arr)[1]); // string

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getIndexArray(arr, number) {
  return arr[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['Olá', 2, function(){}, { obj: 1}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(i = 0; i <= 4; i++) {
  console.log(getIndexArray(array, i));
}

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
    'HTML5': {
      quantidadePaginas: 200,
      autor: 'Maurício Samy Silva',
      editora: 'Novatec'
    },
    'Aprenda JavaScript': {
      quantidadePaginas: 150,
      autor: 'Maujor',
      editora: 'Novatec'
    },
    'CSS3': {
      quantidadePaginas: 496,
      autor: 'Maurício Samy Silva',
      editora: 'Novatec'
    }
  };

  return !name ? books : books[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); /*
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'HTML5';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora);
