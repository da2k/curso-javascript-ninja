/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, "abc", function(){}, {}, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function array(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(array([1, 2, 3])[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arr(array, index){
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayFive = ['string', 1, false, function(){}, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arr(arrayFive, 0));
console.log(arr(arrayFive, 1));
console.log(arr(arrayFive, 2));
console.log(arr(arrayFive, 3));
console.log(arr(arrayFive, 4));

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
function book(bookName){
  var obj = {
    'O Guia Do Mochileiro das Galaxias': {
      quantidadePaginas: 200,
      autor: "Douglas Adams",
      editora: "Sextante"
    },
    'As Cronicas de Narnia':{
      quantidadePaginas: 752,
      autor: "C. S. Lewis",
      editora: "Martins Fontes"
    },
    'A Guerra dos Tronos':{
      quantidadePaginas: 694,
      autor: "George R. R. Martin",
      editora: "Bantam Spectra"
    }
  }

  return !bookName ? obj : obj[bookName];
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
console.log("O livro A Guerra dos Tronos tem " + book("A Guerra dos Tronos").quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qual"+ quer, u +"sando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O Guia Do Mochileiro das Galaxias é "+ book("O Guia Do Mochileiro das Galaxias").autor +".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro As Cronicas de Narnia foi publicado pela editora " + book("As Cronicas de Narnia").editora + ".");
