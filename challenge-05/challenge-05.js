/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'rosa', 'vermelha', 'espinhos', true, 1 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFlower(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFlower(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFlower2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 1, 'branca', 'petalas', null, {b: 2} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFlower2(myArray2,0));
console.log(myFlower2(myArray2,1));
console.log(myFlower2(myArray2,2));
console.log(myFlower2(myArray2,3));
console.log(myFlower2(myArray2,4));

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
  var obj = {
    nameOfBook1: {
      quantidadePaginas: 101,
      autor: 'Fulano',
      editora: 'Editora Top'
    },
    nameOfBook2: {
      quantidadePaginas: 222,
      autor: 'Ciclano',
      editora: 'Editora Boa'
    },
    nameOfBook3: {
      quantidadePaginas: 930,
      autor: 'Beltrano',
      editora: 'Editora Ótima'
    }
  };

  return !name ? obj : obj[name];
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
var name = 'nameOfBook1';
console.log('O livro ' + name + ' tem ' + book(name).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var name = 'nameOfBook3';
console.log('O autor do livro ' + name + ' é ' + book(name).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var name = 'nameOfBook2';
console.log('O livro ' + name + ' foi publicado pela editora ' + book(name).editora + '.');
