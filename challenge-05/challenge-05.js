/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [20, 'André', undefined, function() {}, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionWithIndex(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayOfTypes = [10, 'string', { nome: 'André' }, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunctionWithIndex(arrayOfTypes, 0));

console.log(myFunctionWithIndex(arrayOfTypes, 1));

console.log(myFunctionWithIndex(arrayOfTypes, 2));

console.log(myFunctionWithIndex(arrayOfTypes, 3));

console.log(myFunctionWithIndex(arrayOfTypes, 4));

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
    'O Iluminado': {
      quantidadePaginas: 464,
      autor: 'Stephen King',
      editora: 'Suma'
    },
    'Sapiens: Uma breve história da humanidade': {
      quantidadePaginas: 592,
      autor: 'Yuval Noah Harari',
      editora: 'L&PM'
    },
    'Mindset: A nova psicologia do sucesso': {
      quantidadePaginas: 312,
      autor: 'Carol Dweck',
      editora: 'Objetiva'
    }
  };

  return !name ? books : books[name];
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
console.log(
  'O livro Sapiens: Uma breve história da humanidade tem ' +
    book('Sapiens: Uma breve história da humanidade').quantidadePaginas +
    ' páginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  'O autor do livro Mindset: A nova psicologia do sucesso é ' +
    book('Mindset: A nova psicologia do sucesso').autor +
    '.'
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  'O livro O Iluminado foi publicado pela editora ' +
    book('O Iluminado').editora +
    '.'
);
