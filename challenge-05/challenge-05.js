/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['grey', 2140, 'black', 'white', true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnAll(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrTypes = [true, 2, null, NaN, '0'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnAll(arrTypes, 0));
console.log(returnAll(arrTypes, 1));
console.log(returnAll(arrTypes, 2));
console.log(returnAll(arrTypes, 3));
console.log(returnAll(arrTypes, 4));

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

/*
Amador:
function book(bookName) {
  var bookList = {
    thePictureOfDorianGray: {
      quantidadePaginas: 165,
      autor: 'Oscar Wilde',
      editora: 'Dover'
    },
    theBitcoinStandard: {
      quantidadePaginas: 305,
      autor: 'Saifedean Ammous',
      editora: 'Wiley'
    },
    dubliners: {
      quantidadePaginas: 207,
      autor: 'James Joyce',
      editora: 'Granada'
    }
  };
  
  if(bookName === 'The Picture of Dorian Gray') {
    return bookList.thePictureOfDorianGray;
  }
  
  if(bookName === 'The Bitcoin Standard') {
    return bookList.theBitcoinStandard;
  }
  
  if(bookName === 'Dubliners') {
    return bookList.dubliners;
  }
  
  if(bookName === undefined) {
    return bookList;
  }
}
*/

// Ninja:
function book(bookName) {
  var bookList = {
    'The Picture of Dorian Gray': {
      quantidadePaginas: 165,
      autor: 'Oscar Wilde',
      editora: 'Dover'
    },
    'The Bitcoin Standard': {
      quantidadePaginas: 305,
      autor: 'Saifedean Ammous',
      editora: 'Wiley'
    },
    'Dubliners': {
      quantidadePaginas: 207,
      autor: 'James Joyce',
      editora: 'Granada'
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
var book1 = 'The Picture of Dorian Gray';
console.log(`O livro ${book1} tem ${book(book1).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var book2 = 'The Bitcoin Standard';
console.log(`O autor do livro ${book2} é ${book(book2).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var book3 = 'Dubliners';
console.log(`O livro ${book3} foi publicado pela editora ${book(book3).editora}.`);
