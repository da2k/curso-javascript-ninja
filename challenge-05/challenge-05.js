/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Paulo', 36, 'Alexandre', true, 'live in USA'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunc = function (arg) {
  return console.log(arg);
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc(myArray[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mySecondFunc(arg, indice) {
  return console.log(arg[indice]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var recebeArray = ['Aqui estou aprendendo JS', 36, true, 'quando', false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(mySecondFunc(recebeArray, 0));
console.log(mySecondFunc(recebeArray, 1));
console.log(mySecondFunc(recebeArray, 2));
console.log(mySecondFunc(recebeArray, 3));
console.log(mySecondFunc(recebeArray, 4));

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

function books(nomeLivro) {
  var livros = {
    'O Segredo': {
      quantidadePaginas: 138,
      autor: 'Jim Carry',
      editora: 'Globo'
    },
    'A Arte da Guerra': {
      quantidadePaginas: 69,
      autor: 'Sun Tzu',
      editora: 'Levante'
    },
    'Biblia': {
      quantidadePaginas: 1100,
      autor: 'Moises',
      editora: 'Cervantes'
    }
  }

  return !nomeLivro ? livros : livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'A Arte da Guerra';
console.log("O livro " + nomeLivro + " tem " + books(nomeLivro).quantidadePaginas +
  " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro " + nomeLivro + " é " + books(nomeLivro).autor +
  ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeLivro + " foi publicado pela editora " + books(
  nomeLivro).editora + ".");
