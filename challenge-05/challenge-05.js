/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 7, 8, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayFunction(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function minhaFuncao(arr, index){
  return arr[index];
}
  

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1, 'dois', true, [1,2,'Rod], {a:1}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
minhaFuncao(array,0);
minhaFuncao(array,1);
minhaFuncao(array,2);
minhaFuncao(array,3);
minhaFuncao(array,4);

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
  var todosLivros = {
   'cangaceiro':{
      quantidadePaginas: 120,
      autor: 'Flavio Almeida',
      editora: 'Casa do Código'
  },
    'kubernetes':{
      quantidadePaginas: 142,
      autor: 'Lucas Santos',
      editora: 'Casa do Código'
  },
   'arduino':{
      quantidadePaginas: 75,
      autor: 'Fernando Bryan Frizzarin',
      editora: 'Casa do Código'                         
  }
}
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
