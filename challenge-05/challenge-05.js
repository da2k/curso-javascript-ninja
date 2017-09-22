/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 'Renan', true, { name: 'Renan Oliveira'}, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayFun(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayFun(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function passArray(arr, n) {
  return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [2, 'Renan', true, { name: 'Renan Oliveira'}, undefined];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
passArray(array, 0);
passArray(array, 1);
passArray(array, 2);
passArray(array, 3);
passArray(array, 4);

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
    book1 : {
      pages: 150,
      author: 'Renan',
      publisher: 'Saraiva'
    },
    book2 : {
      pages: 135,
      author: 'Renan',
      publisher: 'Saraiva 1'
    },
    book3 : {
      pages: 130,
      author: 'Renan',
      publisher: 'Saraiva 2'
    },
  }

  if (name === undefined) {
    return obj;
  }

  return obj[name];
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

'O livro book1 tem ' + book('book1').pages + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro book2 é ' + book('book2').author + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro book3 foi publicado pela editora ' + book('book3').publisher + '.'
