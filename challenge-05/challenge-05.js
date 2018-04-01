/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['leona','davi','vida',32,true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebeArray(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeArrayENumero(array,numero) {
  return array[numero];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var idades = [32,31,24,59,30];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
recebeArrayENumero(idades,0);
recebeArrayENumero(idades,1);
recebeArrayENumero(idades,2);
recebeArrayENumero(idades,3);
recebeArrayENumero(idades,4);

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
function book(titulo) {
  var livros = {
    'Java como programar': {
      quantidadePaginas: 800,
      autor: 'Deitel',
      editora: 'Person'
    },
    'Aprendendo SQL': {
      quantidadePaginas: 400,
      autor: 'Beaulieu',
      editora: 'Novatec'
    },
    'Spring': {
      quantidadePaginas: 300,
      autor: 'Lobo',
      editora: 'Casa do código'
    }
  };
  return titulo === undefined ? livros : livros[titulo];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro Java como programar tem ' + book('Java como programar').quantidadePaginas + ' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Aprendendo SQL é ' + book('Aprendendo SQL').autor + '.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro Spring foi publicado pela editora ' + book('Spring').editora + '.';
