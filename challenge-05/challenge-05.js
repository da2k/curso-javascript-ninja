/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [13, 24, 67, 45, 60, 89, 45, 9, 89];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [1, 'two', true, [1, 2, 3], { prop: 'value' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myVar2, 0));
console.log(myFunction2(myVar2, 1));
console.log(myFunction2(myVar2, 2));
console.log(myFunction2(myVar2, 3));
console.log(myFunction2(myVar2, 4));

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
  var obj = {
    'Scrum. A Arte de Fazer o Dobro do Trabalho na Metade do Tempo': {
      pages: 240,
      author: 'Jeff Sutherland',
      publisher: 'LeYa'
    },
    'Mindset': {
      pages: 328,
      author: 'Carol Dweck',
      publisher: 'Objetiva'
    },
    'O Poder do Hábito': {
      pages: 408,
      author: 'Charles Duhigg',
      publisher: 'Objetiva'
    }
  };
  return title ? obj[title] : obj;
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
var book1Title = 'O Poder do Hábito';
var book1Pages = book(book1Title).pages;
console.log('O livro "' + book1Title + '" tem ' + book1Pages + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var book2Title = 'Mindset';
var book2Author = book(book2Title).author;
console.log('O autor do livro "' + book2Title + '" é "' + book2Author + '".')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO]  [NOME_DA_EDITORA]."
*/
var book3Title = 'Scrum. A Arte de Fazer o Dobro do Trabalho na Metade do Tempo';
var book3Publisher = book(book3Title).publisher;
console.log('O livro "' + book3Title + '" foi publicado pela editora "' + book3Publisher + '".')
