/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var array = ['Caio', 7 , true , false, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction( arg ) {
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction( array )[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function function2 ( argArray , number ) {
  return argArray[number];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var array2 = ['Caio', 7 , undefined , false, null];




/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log();
for ( var i = 0 ; i <= array2.length ; i++ ) {
  console.log(function2(array2 , i ));
};

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
 
function book ( title ) {
  var obj = {

    'Colecionador de Lagrimas' : {
      quantidadePaginas : 400,
      autor : 'Augusto Cury',
      editora : 'Abril'
    },
    'Vendedor de Sonhos' : {
      quantidadePaginas : 250,
      autor : 'Augusto Cury',
      editora : 'Abril'
    },
    'Mestre dos Mestres' : {
      quantidadePaginas : 300,
      autor : 'Augusto Cury',
      editora : 'Abril'
    }

    
  };

  return !title ? obj : obj[ title ];
  
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log();
console.log( book() );


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log();

console.log('O livro Colecionador De Lagrimas tem ' + book( 'Colecionador de Lagrimas').quantidadePaginas + ' páginas!' );


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log();
console.log('O Autor do livro Colecionador De Lagrimas é ' + book( 'Vendedor de Sonhos').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log();
console.log('O livro Colecionador De Lagrimas foi publicado pela editora ' + book( 'Mestre dos Mestres').editora + '.' );
