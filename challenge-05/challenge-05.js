/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [42, "universe", true, undefined, "life"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnValue(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( returnValue(myArray)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function creativeFunction(y, z) {
  return y[z];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variousValues = ['hello, world', 42, null, NaN, { a: 1 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( creativeFunction(variousValues, 0) );
console.log( creativeFunction(variousValues, 1) );
console.log( creativeFunction(variousValues, 2) );
console.log( creativeFunction(variousValues, 3) );
console.log( creativeFunction(variousValues, 4) );

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
  var list = {
    '1984': {
      quantidadePaginas: 414,
      autor: 'George Orwell',
      editora: 'Companhia das Letras'
    },
    'Quem é você Alasca?': {
      quantidadePaginas: 229,
      autor: 'John Green',
      editora: 'Editora WMF'
    },
    'Esse é meu tipo': {
      quantidadePaginas: 359,
      autor: 'Simon Garfield',
      editora: 'Zahar'
    }
  };

  return !name ? list : list[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = '1984';
console.log('O livro ' + bookName + ' têm ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var 
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');