/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var varray = [ 12 , 34 , 56, 7 , 90 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function MyFunc(arg) {
... return arg;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
MyFunc(varray)[1];
34
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunc2(arg,ind) {
... return arg[ind];
... }
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arrayInd = [ 'Anderson' , 35 , 'masculino' , 'são paulo' , true ]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
myFunc2(arrayInd,0); //'Anderson'
myFunc2(arrayInd,1); // 35
myFunc2(arrayInd,2); // 'masculino'  
myFunc2(arrayInd,3); // 'são paulo'
myFunc2(arrayInd,4); // true

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
... var allBooks = {
..... 'Segredos do Ninja Javascript': {
....... quantidadesPaginas: 468,
....... autor: 'John Resig & Bear Bibeault',
....... editora: 'Novatec'
....... },
..... 'Introdução ao HTML5': {
....... quantidadesPaginas: 220,
....... autor: 'Bruce Lawson',
....... editora: 'Alta Books'
....... },
..... 'Smashing CSS': {
....... quantidadesPaginas: 283,
....... autor: 'Erick A. Meyer',
....... editora: 'Bookman'
....... }
..... };
...
... return !bookName ? allBooks : allBooks [ bookName ];
... }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
{
  'Segredos do Ninja Javascript': {
    quantidadesPaginas: 468,
    autor: 'John Resig & Bear Bibeault',
    editora: 'Novatec'
  },
  'Introdução ao HTML5': {
    quantidadesPaginas: 220,
    autor: 'Bruce Lawson',
    editora: 'Alta Books'
  },
  'Smashing CSS': {
    quantidadesPaginas: 283,
    autor: 'Erick A. Meyer',
    editora: 'Bookman'
  }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ( 'O Livro Smashing CSS tem ' + book("Smashing CSS").quantidadesPaginas + ' paginas! ') ; 
  // O Livro Smashing CSS tem 283 paginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ( 'O autor do livro Smashing CSS é ' + book("Smashing CSS").autor) ; 
  // O autor do livro Smashing CSS é Erick A. Meyer

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( 'O livro Smashing CSS foi publicado pela editora ' + book("Smashing CSS").editora) ;
// O livro Smashing CSS foi publicado pela editora Bookman
