/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavelQualquer = ['Leandro', 29, null, true, 'Um verdadeiro ninja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 console.log ( retornaArray(variavelQualquer)[1] ); // 29

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(arr, numero) {
  return arr[numero];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cincoDiferentes = ['Olá mundo!', 21, true, null, {a:2 , b:3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParametros(cincoDiferentes,0));
console.log(doisParametros(cincoDiferentes,1));
console.log(doisParametros(cincoDiferentes,2));
console.log(doisParametros(cincoDiferentes,3));
console.log(doisParametros(cincoDiferentes,4));

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


//ANTES DA CORREÇÃO

/*
function book(livro) {
  var buscaLivro = livro;
  var nomesLivros = {
    cleanCode: {
      quantidadePaginas: 200,
      autor: 'Martin',
      editora: 'Vishh'
    },
    jQuery: {
      quantidadePaginas: 200,
      autor: 'Maujor',
      editora: 'NovaTec'
    },
    raulinFantasma: {
      quantidadePaginas: 600,
      autor: 'Meche',
      editora: 'Sem editora'
    },
  };
  if (livro === 'cleanCode') {
    return nomesLivros.cleanCode;
  };
  if (livro === 'jQuery') {
    return nomesLivros.jQuery;
  };
  if (livro === 'raulinFantasma') {
    return nomesLivros.raulinFantasma;
  };
  return nomesLivros;
};
*/

//APÓS A CORREÇÃO

function book(livro) {
  var nomesLivros = {
    'Clean Code': {
      quantidadePaginas: 200,
      autor: 'Martin',
      editora: 'Vishh'
    },
    'jQuery': {
      quantidadePaginas: 200,
      autor: 'Maujor',
      editora: 'NovaTec'
    },
    'Raulin o Comilão': {
      quantidadePaginas: 600,
      autor: 'Meche',
      editora: 'Sem editora'
    },
  };

  return !livro ? nomesLivros : nomesLivros[ livro ];
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
console.log('O livro jQuery tem ' + book('jQuery').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro jQuery é ' + book('jQuery').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro JQuery foi publicado pela editora ' + book('jQuery').editora);
