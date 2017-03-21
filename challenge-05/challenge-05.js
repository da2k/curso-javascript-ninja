/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Felipe', 27, 'Masculino', true, 'Garopaba'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arg){
  return arg;  
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( returnArray(arr)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(arg, num){
  return arg[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fut = [null, 3, 'Azul', false, 5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( twoParam(fut, 0) );
console.log( twoParam(fut, 1) );
console.log( twoParam(fut, 2) );
console.log( twoParam(fut, 3) );
console.log( twoParam(fut, 4) );

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
function book(bookName){
  var books = {
    'Javascript': {
      quantidadePaginas: 400,
      autor: 'Claudio',
      editora: 'Livratec'
    },
    
    'HTML5': {
      quantidadePaginas: 200,
      autor: 'Flávio',
      editora: 'Teclivro'
    },
    
    'CSS3': {
      quantidadePaginas: 325,
      autor: 'Beto',
      editora: 'Infotec'
    }
  };
  
  return !bookName ? books : books [ bookName ];
  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log ( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ( 'O livro Javacript tem ' + book( 'Javascript' ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ( 'O autor do livro HTML5 é ' + book('HTML5').autor + '.' );


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( 'O livro CSS3 foi publicado pela editora ' + book('CSS3').editora + '.' );
