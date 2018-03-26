/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var v = [1, [], 'a', null, {a: 'b'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var getArray = (array) => array;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(v)[1]); // []

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var fn = (array, index) => array[index] ? array[index] : null;

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var v = [1, [], 'a', null, {a: 'b'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(fn(v, 0)); // 1
console.log(fn(v, 1)); // []
console.log(fn(v, 2)); // a
console.log(fn(v, 3)); // null
console.log(fn(v, 4)); // {a: 'b'}

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
var book = (name) => {
  const books = {
    'o principe': {
      quantidadePaginas: 150,
      autor: 'Maquiavel',
      editora: 'another editora'
    },
    'memorias postumas': {
      quantidadePaginas: 600,
      autor: 'machado de assis',
      editora: 'myeditora'
    },
    'o alienista': {
      quantidadePaginas: 280,
      autor: 'machado de assis',
      editora: 'anyeditora'
    }
  };
  return books[name] ? books[name] : books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book(null)); /*

{ 'o principe':
   { quantidadePaginas: 150,
     autor: 'Maquiavel',
     editora: 'another editora' },
  'memorias postumas':
   { quantidadePaginas: 600,
     autor: 'machado de assis',
     editora: 'myeditora' },
  'o alienista':
   { quantidadePaginas: 280,
     autor: 'machado de assis',
     editora: 'anyeditora' }
 }*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const printQtd = (title) => {
  const livro = book(title);
  return livro.quantidadePaginas ? `O livro ${title} tem ${livro.quantidadePaginas} páginas!` : '';
}
console.log(printQtd('o principe')); // O livro o principe tem 150 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const printAutor = (title) => {
  const livro = book(title);
  return livro.autor ? `O autor do livro ${title} é ${book(title).autor}.` : '';
}
console.log(printAutor('o principe')); // O autor do livro o principe é Maquiavel.


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const printEditora = (title) => {
  const livro = book(title);
  return livro.editora ? `O livro ${title} foi publicado pela editora ${book(title).editora}.` : '';
}
console.log(printEditora('memorias postumas')); //O livro memorias postumas foi publicado pela editora myeditora.
