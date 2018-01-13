/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['samuel', 21, 'Web dev', {skills: ['js', 'css']}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receiveArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
receiveArray([0,1,2])[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getValueOf(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var diferentValuesInArray = [5, true, 'string', {prop:''}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
receiveArray(diferentValuesInArray);

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

var book = function(nome){
    
    var books = {
      "openmind" : {
        quantidadePaginas : 120,
        autor: "MIckey Rogers",
        editora: "Macmillan"
      },
      "Beginning Functional JavaScript" : {
        quantidadePaginas : 164,
        autor: "Anto Aravinth",
        editora: "Apress"
      },
      "Object Oriented JavaScript, 3rd Edition" : {
        quantidadePaginas : 459,
        autor: "Stoyan Stefanov",
        editora: "Packt"
      }
    }

    if(books[nome]) {
      return books[nome];
    }
    
    return books;
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

var nomeLivro = "openmind";
var openmind = book(nomeLivro);

console.log("O livro "  + nomeLivro + " tem " + openmind.quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var nomeLivro2 = "Beginning Functional JavaScript";
var functionalJs = book(nomeLivro2);

console.log("O autor do "  + nomeLivro2 + " é " + functionalJs.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var nomeLivro3 = "Object Oriented JavaScript, 3rd Edition";
var oojs = book(nomeLivro3);

console.log("O livro "  + nomeLivro3 + " foi publicado pela editora " + oojs.editora);
