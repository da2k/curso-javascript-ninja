/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var nada = [1, 'mara', 'barros', true, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arr(nada)= {
  return nada;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
nada[1];
//'mara'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mar(nada, n){
  return nada(n);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var coisa = [ 'panela', 3, undefined, false, 'cabo'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arr(coisa)[0]);
console.log(arr(coisa)[1]);
console.log(arr(coisa)[2]);
console.log(arr(coisa)[3]);
console.log(arr(coisa)[4]);
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
> function book(nomeLivro){
... var Livros = {
..... "O Hobbit": {
....... quantidadePaginas: 296,
....... autor: 'J.R.R. Tolkien',
....... editora: 'wmf martinsfontes'},
..... "O Senhor dos Anéis 1": {
....... quantidadePaginas: 434,
....... autor: 'J.R.R. Tolkien',
....... editora: 'wmf martinsfontes'},
..... "A Guerra dos Tronos":{
....... quantidadePaginas: 587,
....... autor: 'George R.R. Martin',
....... editora: 'Leya'}
..... };

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function LivroPagina (){
... return "O livro " + book.name + " tem" + book.quantidadePaginas + " paginas!"
... };
//"O Livro undefined tem undefined paginas"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeL = 'o hobbit';
... function autorL(){
... return "O autor do livro " + "O hobbit é " + book(nomeL).autor + " .";
... };

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeL + " foi publicado pela editora " + book(nomeL).editora + ".");
