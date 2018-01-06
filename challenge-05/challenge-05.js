/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// var arr = [1,2,3,4,5];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function myFunction(arg) {
... return arg;
... }




/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// myFunction(arr)[1]; //2



/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
//  function myFunction2 (arg,index) {
... return arg[index];
... }



/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// var valores = [ 1, false, 'Isabel', [1,2] ,{b:2} ];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//  myFunction2 ( valores,0); //1
myFunction2 ( valores,1); //false
myFunction2 (valores,2); //'Isabel'
myFunction2(valores,3); // [ 1, 2 ]
 myFunction2(valores,4); //{ b: 2 }


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
//function book(NomeLivro) {
... var todoslivros = {
..... 'Lendo os Salmos' : {
....... quantidadePaginas:156,
....... autor: 'C.S Lewis',
....... editora: 'ultimato'
....... },
..... '49 dias de encontro com o pai' : {
....... quantidadePaginas: 199,
....... autor: 'Eddy Leo',
....... editora: 'Ministerio igreja em celulas'
....... },
..... 'Firmando os passos' : {
....... quantidadePaginas: 56,
....... autor: 'desconhecido',
....... editora: 'Editora cultura cristã'
....... }
..... };
... return !NomeLivro ? todoslivros : todoslivros[NomeLivro];
... }


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//  console.log( book() );


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
