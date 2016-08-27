/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, '2', -0, null, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnValue(arr, num) {
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, 'text', false, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnValue(arr2, 0);
returnValue(arr2, 1);
returnValue(arr2, 2);
returnValue(arr2, 3);
returnValue(arr2, 4);

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
    book1 : {
      quantidadePaginas : 50,
      autor : 'Willian Ribeiro',
      editora : 'CodeBin',
      name : 'book1'
    },
    book2 : {
      quantidadePaginas : 50,
      autor : 'Willian Ribeiro',
      editora : 'CodeBin',
      name : 'book2'
    },
    book3 : {
      quantidadePaginas : 50,
      autor : 'Willian Ribeiro',
      editora : 'CodeBin',
      name : 'book3'
    }
  };

  if (name) {
    return books[name];
  } else {
    return books;
  }
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
var book1 = book('book1');
console.log('O livro ' + book1.name + ' tem ' + book1.quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var book2 = book('book2');
console.log('O autor do livro ' + book2.name + ' é ' + book2.autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var book3 = book('book3');
console.log('O livro ' + book3.name + ' foi publicado pela editora ' + book3.editora + '.');
