/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ true, 1, 'frankyston', null, function(){ return "Hello World!";}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function showArray(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function showArray2(arr, index){
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [true, 0, 'Hello World!', { name: "Frankyston" }, function(){ return "Hi!" } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(showArray2(arr2, 0));
console.log(showArray2(arr2, 1));
console.log(showArray2(arr2, 2));
console.log(showArray2(arr2, 3));
console.log(showArray2(arr2, 4));

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
function book(name){
  var book = {
    "Sprint": {
      quantidadePaginas: 200,
      autor: "Jake Knapp",
      editora: "Intrínseca"
    },
    "A Startup Enxuta": {
      quantidadePaginas: 180,
      autor: "Erick Ries",
      editora: "LeYa"
    },
    "Ruby on Rails": {
      quantidadePaginas: 190,
      autor: "Rodrigo Urubatan",
      editora: "Novatec"
    }
  }
  if(name != undefined){
    return book[name];
  } else {
    return book;
  }
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
console.log("O livro Sprint tem " + book("Sprint").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Ruby on Rails é " + book("Ruby on Rails").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro A Startup Enxuta foi publicado pela editora " + book("A Startup Enxuta").editora);
