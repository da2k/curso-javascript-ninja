/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var foo = [1, 'Daniel', true, null, {foo: 1}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var arr = [1, 2, 3];
function myFunc(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

var arr = [1, 2, 3];
function myFunction(arr, arg) {
  return arr[arg];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var bar = [1, null, 'daniel', true, [1,2,3,4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(bar, 0));
console.log(myFunction(bar, 1));
console.log(myFunction(bar, 2));
console.log(myFunction(bar, 3));
console.log(myFunction(bar, 4));

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

function book(params) {
  var obj = {
    'Aprendendo CSS': {
      quantidadePaginas: 200,
      autor: 'Fulano',
      editora: 'Editora Aurora'
    },
    'Javascript na prática': {
      quantidadePaginas: 250,
      autor: 'Beltrano',
      editora: 'Casa do codigo'
    },
    'HTML5 em ação': {
      quantidadePaginas: 300,
      autor: 'Cicrano',
      editora: 'Novatec'
    }
  };
  if (!params) {
    return obj;
  }
  return obj[params];
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
console.log('O livro Aprendendo CSS tem ' + book('Aprendendo CSS').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Javascript na prática é ' + book('Javascript na prática').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro HTML5 em ação foi publicado pela editora ' + book('HTML5 em ação').editora + '.');
