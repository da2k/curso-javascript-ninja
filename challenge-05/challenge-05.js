/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var loteria = [ 1, 'm', null, true, 'Silvio Santos' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(param){
  return param;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(loteria)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function indice(arr, posicao){
    return arr[posicao];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresDistintos = [ 1, 'dois', null, undefined, true ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indice(valoresDistintos, 0);
indice(valoresDistintos, 1);
indice(valoresDistintos, 2);
indice(valoresDistintos, 3);
indice(valoresDistintos, 4);

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
function book(nomeLivro){
   var livros = {
    'O iluminado': {
      quantidadedePaginas: 530,
      autor: 'Stephen King',
      editora: 'Pentecostes'},
    'Biblia': {
      quantidadedePaginas: 666,
      autor: 'Deus',
      editora: 'FromHell'},
    'CSS for dummies': {
      quantidadedePaginas: 342,
      autor: 'Jandira',
      editora: 'xablau'}
  };
  
  return  nomeLivro === undefined ? livros : livros[ nomeLivro ];    
};
  

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livroCss = 'CSS for dummies';
console.log( 'O livro ' + livroCss + ' tem ' + book( livroCss ).quantidadedePaginas + ' páginas! '  );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var livroIluminado = 'O iluminado';
console.log( 'O autor do livro ' + livroIluminado +' é ' + book( livroIluminado ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var biblia = 'Biblia';
console.log( 'O livro ' + biblia + ' foi publicado pela editora ' + book( biblia ).editora + '.' );