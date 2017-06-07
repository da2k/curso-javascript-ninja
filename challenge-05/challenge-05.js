/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = ['mari', 'gibara' , 87, true, undefined]; 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray (arg){
 return arg; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function novaFuncao(arg,num){
  return arg[num];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newVar = ['mariana','gibara', true, 98, [2,5,6], {prop1: 'é hj'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(novaFuncao(newVar, 0));
console.log(novaFuncao(newVar, 1));
console.log(novaFuncao(newVar, 2));
console.log(novaFuncao(newVar, 3));
console.log(novaFuncao(newVar, 4));
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
function book(paramNome){
  var objectBook = {
    'livro1': {
      quantidadePaginas:150, 
      autor:'Autor 01', 
      editora:'Saraiva'
    },
    'livro2': {
      quantidadePaginas:200, 
      autor:'Autor 02', 
      editora:'Lupita'
    },
    'livro3': {
      quantidadePaginas:647, 
      autor:'Autor 03', 
      editora:'Ediouro'
    }
  };  
  return !paramNome ? objectBook : objectBook[paramNome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var qualLivroEuQuero = 'livro1';
console.log("O livro"+qualLivroEuQuero+ " tem "+ book(qualLivroEuQuero).quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+qualLivroEuQuero+" é "+ book(qualLivroEuQuero).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+qualLivroEuQuero+" foi publicado pela editora "+ book(qualLivroEuQuero).editora);
