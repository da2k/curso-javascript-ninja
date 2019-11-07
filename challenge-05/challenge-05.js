/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var myqualquer = [undefined, 'ana', {cor: 'azul'}, function () {}, true]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFun(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFun(myqualquer)[0]);
console.log(myFun(myqualquer)[1]);
console.log(myFun(myqualquer)[2]);
console.log(myFun(myqualquer)[3]);
console.log(myFun(myqualquer)[4]);



/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

var myrecebe = function (array, num) {
  return array[num];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var mydiferente = [1, true, 'ana', function () {}, [1, 2, 3]];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
myrecebe(mydiferente,0);
myrecebe(mydiferente,1);
myrecebe(mydiferente,2);
myrecebe(mydiferente,3);
myrecebe(mydiferente,4);
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
// ?
 function book (nomeBook) {
  var biblioteca = {
    'O ceu azul':{
      quantidadePaginas:20,
      autor:'Fulano1',
      editora:'bertano1',
    },
    'Menino de ouro':{
      quantidadePaginas:60,
      autor:'Fulano2',
      editora:'bertano2',
    },
    'A Menina que rouba livro':{
      quantidadePaginas:20,
      autor:'Fulano3',
      editora:'bertano3',
    },
   
  };
  if(biblioteca===undefined){
    return biblioteca;
  }
  return biblioteca[nomeBook];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var nomeBook='Menino de ouro';
 console.log("O livro"+nomeBook+" tem "+book(nomeBook).quantidadePaginas+ "páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O autor do livro "+nomeBook+" é "+book(nomeBook).autor+".");
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log("O livro "+nomeBook+" foi publicado pela editora"+ book(nomeBook).editora+".");
