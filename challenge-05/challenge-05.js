/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [3,5,10,23,35];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function obj (obj2) {return obj2;}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
obj (array)[1]
5

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction (arra,index){ return arr [index];}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var obj = [5,'giselle',null,23,true]
undefined
obj
(5) [5, 'giselle', null, 23, true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction (obj,0);
myFunction (obj,1);
myFunction (obj,2);
myFunction (obj,3);
myFunction (obj,4);

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
function book2 (nomeBook) { var allBooks = {'livro1':{quantidadePaginas:50,autor:'Maria',editora:'atlas'},
'livro2':{quantidadePaginas:60,autor:'Murilo',editora:'abril'},
'livro3':{quantidadePaginas:70,autor:'Wesley',editora:'globo'}
};
return !nomeBook ? allBooks : allBooks[nomeBook];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book2()
{livro1: {…}, livro2: {…}, livro3: {…}}
livro1
: 
{quantidadePaginas: 50, autor: 'Maria', editora: 'atlas'}
livro2
: 
{quantidadePaginas: 60, autor: 'Murilo', editora: 'abril'}
livro3
: 
{quantidadePaginas: 70, autor: 'Wesley', editora: 'globo'}


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro1 tem 50 paginas!'
 console.log('O + (bookNome) + 'tem' + book2(bookNome).quantidadePaginas +  'páginas!');            

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro1 é Maria.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro1 foi publicado pela editora atlas.
