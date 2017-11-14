/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1, true, 'bruno', -5, 'pinheiro' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(myArr) {
  return myArr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunc2(arr2, num) {
  return arr2[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, true, 'bruno', null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc(arr2);

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
function book(nome) {
  var obj = {
    javascriptOGuiaDefinitivo: {
      quantidadePaginas: 325,
      autor: 'David Flanagan',
      editora: 'OReilly'
    },
    oMelhorDoJavascript: {
      quantidadePaginas: 456,
      autor: 'Douglas Crockford',
      editora: 'OReilly'
    },
    useACabecaJavascript: {
      quantidadePaginas: 159,
      autor: 'Michael Morrison',
      editora: 'OReilly'
    }
  };
  if(nome === undefined) {
    return obj;
  } else {
    return obj.nome
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro " + Object.keys(book())[0] + " tem " + book('javascriptOGuiaDefinitivo').quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro " + Object.keys(book())[1] + " é " + book('javascriptOGuiaDefinitivo').autor + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro " + Object.keys(book())[2] + " foi publicado pela editora " + book('javascriptOGuiaDefinitivo').editora + ".";
