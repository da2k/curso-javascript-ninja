/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['joel', 5, true, null, undefined, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunc (arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunc(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunc2(arr, num){
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoarr = ['teste', false, {}, [], 0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunc2(novoarr, 0));
console.log(myfunc2(novoarr, 1));
console.log(myfunc2(novoarr, 2));
console.log(myfunc2(novoarr, 3));
console.log(myfunc2(novoarr, 4));

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
function book (arr){
  var obj = {
    'livro1': {
      quantidadePaginas: 1000,
      autor: 'autor1',
      editora: 'nova editora'
    },
    'livro2': {
      quantidadePaginas: 50,
      autor: 'autor2',
      editora: 'velha editora'
    },
    'livro3': {
      quantidadePaginas: 1230,
      autor: 'autor3',
      editora: 'outra editora'
    }
  }

  return arr ? obj[arr] : obj;
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
console.log("O livro livro2 tem " + book('livro2').quantidadePaginas + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro livro3 é " + book('livro3').autor+ ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livr1 foi publicado pela editora " + book('livro1').editora +  ".");
