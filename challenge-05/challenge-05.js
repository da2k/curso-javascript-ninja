/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrRamdoms = ['This', 'course', 'is', 'good', '.'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArrAndReturn(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArrAndReturn(arrRamdoms)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getIndex (arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrValues = ['String', 1, 'String2', 2, '.'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getIndex(arrValues, 0);
getIndex(arrValues, 1);
getIndex(arrValues, 2);
getIndex(arrValues, 3);
getIndex(arrValues, 4);

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
function book (bookName) {
  var books = {
    ['PHP Orientado a Objetos']: {
        quantidadePaginas: 240,
        autor: 'Pablo DaOglio',
        editora: 'Novatec'
    },
    ['JavaScript: O Guia Definitivo']: {
      quantidadePaginas: 800,
      autor: 'Devid Flanagran',
      editora: 'O\'REILLY'
    },
    ['Não se desespere! Provocações filosóficas']: {
      quantidadePaginas: 80,
      autor: 'Mário Sergio Cortella',
      editora: 'Vozes'
    }
  };
  return !!bookName ? books[bookName] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('JavaScript: O Guia Definitivo'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro 'PHP Orientado a Objetos' tem ${book('PHP Orientado a Objetos').quantidadePaginas} páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro 'Não se desespere! Provocações filosóficas' é ${book('Não se desespere! Provocações filosóficas').autor}.`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro 'PHP Orientado a Objetos' foi publicado pela editora ${book('PHP Orientado a Objetos').editora}.`
);
