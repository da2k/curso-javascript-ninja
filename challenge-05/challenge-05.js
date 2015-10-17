/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [1, true, 'jean', ['um', 2, 'III'], undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myvar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num){
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar2 = [1, undefined, null, true, [1, 'dois', false]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(myvar2, 0);
myFunction2(myvar2, 1);
myFunction2(myvar2, 2);
myFunction2(myvar2, 3);
myFunction2(myvar2, 4);

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
function book(name){
  var obj = {
    'livro A' : {
      quantidadePaginas : 100,
      autor             : 'autor A',
      editora           : 'editora A'
    },
    'livro B' : {
      quantidadePaginas : 200,
      autor             : 'autor B',
      editora           : 'editora B'
    },
    'livro C' : {
      quantidadePaginas : 300,
      autor             : 'autor C',
      editora           : 'editora C'
    }
  };
  return name === undefined ? obj : obj[name];
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
var name = 'livro A';
console.log('O livro ' + name + ' tem ' + book(name).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + name + ' é ' + book(name).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + name + ' foi publicado pela editora ' + book(name).editora + '.');
