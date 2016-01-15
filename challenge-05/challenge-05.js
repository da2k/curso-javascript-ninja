/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [1, 'William', true, { obj : ':D' }, 'false'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray (param) {
  return param;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myarray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getArrayX (array, position) {
  return array[position];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = [1, "String qualquer", false, {'comidaFavorita' : 'banana'}, []];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArrayX(otherArray, 0));
console.log(getArrayX(otherArray, 1));
console.log(getArrayX(otherArray, 2));
console.log(getArrayX(otherArray, 3));
console.log(getArrayX(otherArray, 4));

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
function book (name){
  var obj = {
    "Livro 1" : {
      'quantidadePaginas' : 300,
      'autor' : 'Autor do livro 1',
      'editora' : 'Editora'
    },
    "Livro 2" : {
      'quantidadePaginas' : 200,
      'autor' : 'Autor do livro 3',
      'editora' : 'Editora'
    },
    "Livro 3" : {
      'quantidadePaginas' : 100,
      'autor' : 'Autor do livro 3',
      'editora' : 'Editora'
    }
  };

  return !name ? obj : obj[name];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Livro 1 tem ' + book('Livro 1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Livro 3 é ' + book('Livro 3').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Livro 2 foi publicado pela editora ' + book('Livro 2').editora + '.');
