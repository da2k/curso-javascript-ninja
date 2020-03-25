/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [5, false, "Rodrigo", true, "100"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function showArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(showArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunc(arr, num) {
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [0, true, "Carvalho", false, "500"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc(newArray, 0);
myFunc(newArray, 1);
myFunc(newArray, 2);
myFunc(newArray, 3);
myFunc(newArray, 4);

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
function book(nomeLivro) {
  var obj = {
    DomCasmurro: {
      quantidadePaginas: 100,
      autor: "Machado de Assis",
      editora: "Companhia das Letras"
    },
    CapitaesDaAreia: {
      quantidadePaginas: 200,
      autor: "Jorge Amado",
      editora: "Rocco"
    },
    OIluminado: {
      quantidadePaginas: 300,
      autor: "Stephen King",
      editora: "Editora Gringa"
    }
  };
  var objToReturn = obj[nomeLivro];
  if (objToReturn) {
    return objToReturn;
  }
  return obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book(""));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = "Capitaes Da Areia";
console.log(
  `O livro ${livro} tem ${
    book(livro.replace(/\s/g, "")).quantidadePaginas
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Dom Casmurro é ${book('DomCasmurro').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var livro = "Dom Casmurro";
console.log(
  `O livro ${livro} foi publicado pela editora ${
    book(livro.replace(/\s/g, "")).editora
  }.`
);
