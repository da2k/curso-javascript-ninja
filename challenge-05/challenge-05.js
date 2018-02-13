/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(arr){
... return arr;
... } //Utilizei o mesmo array criado no primeiro exercício

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(newFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebe2Parametros(arr, indice){
  if(indice !== undefined){
    return arr[indice];
  }else{
    return arr;
  }
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
arr2 = [1, true, 'string', null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(recebe2Parametros(arr2));

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
    bookName = nome;
    var livros = {
        'biblia': {quantidadePaginas: 1000, autor: 'Deus', editora: 'céus'},
        'java': {quantidadePaginas: 500, autor: 'Gosling', editora: 'carvalho'},
        'html': {quantidadePaginas: 350, autor: 'Deitel', editora: 'novatec'}
    }
    if(!nome){
      return livros;
    }
    return livros[nome];
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
console.log('O livro ' + bookName + ' tem ' +book(bookName).quantidadePaginas + ' páginas!'); //Fiquei bastante tempo preso nesse desafio.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' +book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' +book(bookName).editora + '.');
