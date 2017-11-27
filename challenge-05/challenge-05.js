/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'Maurício', 26, true, 'Duarte', null, undefined, 12.3 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function mauFunction(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(mauFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function indexFunction(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveTypes = [ 'Maurício', 26, [1, 2, 'Maumau'], { m: 10 }, true ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(indexFunction(fiveTypes, 0));
console.log(indexFunction(fiveTypes, 1));
console.log(indexFunction(fiveTypes, 2));
console.log(indexFunction(fiveTypes, 3));
console.log(indexFunction(fiveTypes, 4));

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
function book( bookName ) {
  var books = {
    'Silvio Santos': {
      quantidadePaginas: 365,
      autor: 'Mah oee',
      editora: 'Rélou Studios'
    },
    'Javascript Fodão': {
      quantidadePaginas: 870,
      autor: 'Ninja Fodalhástico',
      editora: 'Casa do Código'
    },
    'Mister M do Javascript': {
      quantidadePaginas: 278,
      autor: 'Mard',
      editora: 'My House'
    }
  };

  return !bookName ? books : books[bookName];
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
console.log('O livro Mister M do Javascript tem ' + book('Mister M do Javascript').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Mister M do Javascript é ' + book('Mister M do Javascript').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Mister M do Javascript foi publicado pela editora ' + book('Mister M do Javascript').editora);
