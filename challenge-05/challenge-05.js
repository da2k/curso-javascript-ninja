/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['Celso', 7, true, '9', null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myarray)[1];
console.log(myFunction(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
mynewarray = ['Fabri', 33, false, [1, 2, 3, 4, 5], {prop1: 'Olá', prop2: 'Tchau'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunction(mynewarray, 4);
console.log(newFunction(mynewarray, 4));

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
  var myobj = {
    'Dom Quixote': {
      quantidadePaginas: 190,
      autor: 'Miguel Cervantes',
      editora: 'FTD'
    },
    'Memórias póstumas de Brás Cubas': {
      quantidadePaginas: 300,
      autor: 'Machado de Assis',
      editora: 'Martin Claret'
    },
    'A mulher que escreveu a bíblia': {
      quantidadePaginas: 190,
      autor: 'Moacyr Scliar',
      editora: 'Companhia de Letras'
    }
  }

  return !title ? myobj : myobj[title];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Dom Quixote tem'+ book('Dom Quixote').quantidadePaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro A mulher que escreveu a bíblia é '+ book('A mulher que escreveu a bíblia').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Memórias póstumas de Brás Cubas foi publicado pela editora ' + book('Memórias póstumas de Brás Cubas').editora);
