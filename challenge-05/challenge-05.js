/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0,1,2,3,4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr){
 return arr;
 }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndex(arr, index) {
 return arr[index];
 }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDiferente = [1, 'teste', true, {prop1: 'objeto', prop2: false}, [0, 1, 2]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaIndex(arrDiferente, 0);
retornaIndex(arrDiferente, 1);
retornaIndex(arrDiferente, 2);
retornaIndex(arrDiferente, 3);
retornaIndex(arrDiferente, 4);

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
function book(nome){
 var livro = {livro1: {quantidadePaginas: 10, autor: 'autor1', editora: 'editora1'}, livro2: {quantidadePaginas:20, autor: 'autor2',editora: 'editora2'}, livro3: {quantidadePaginas: 30, autor: 'autor3', editora: 'editor3'}}
 return nome ? livro[nome] : livro;
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
function paginasLivro(nome) {
  return 'O livro ' + nome + ' tem ' + book(nome).quantidadePaginas + ' páginas!';
}
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function autorLivro(nome) {
  return 'O autor do livro ' + nome + ' é ' + book(nome).autor + '.';
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function paginasLivro(nome) {
  return 'O livro ' + nome + ' foi publicado pela editora ' + book(nome).editora + '.';
}
