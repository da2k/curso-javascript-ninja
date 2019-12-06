/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let fiveNums = [7, 98, 29, 154, 55];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArr(fiveNums)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(x, y) {
  return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let fiveNewValues = [561, "book", false, ["city"], {value: 12}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
twoParams(fiveNewValues, 0);
twoParams(fiveNewValues, 1);
twoParams(fiveNewValues, 2);
twoParams(fiveNewValues, 3);
twoParams(fiveNewValues, 4);

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
function book(title) {
  let books = {
    "O Castelo" : {
      quantidadePaginas: 16,
      autor: "Eric Miranda",
      editora: "Rocco"
    },
    "A Vila": {
      quantidadePaginas: 24,
      autor: "Paulo Miguel",
      editora: "Intrínseca"
    },
    "A Casa": {
      quantidadePaginas: 32,
      autor: "Viviane Souza",
      editora: "Zahar"
    }
  }
  return !title ? books : books[title];
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
console.log(`O livro 'O Castelo' tem ${book("O Castelo").quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro 'A Vila' é ${book("A Vila").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro 'A Casa' foi publicado pela editora ${book("A Casa").editora}.`);
