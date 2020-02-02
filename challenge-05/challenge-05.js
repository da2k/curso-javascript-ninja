/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquerArray = [10, null, "oi", true, { hello: "world" }];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcaoArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcaoArray(qualquerArray); //[ 10, null, 'oi', true, { hello: 'world' } ]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcaoArrayIndex(arr, arrIndex) {
  return arr[arrIndex];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArr = ["Carol", { te: "amo" }, 44, true, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcaoArrayIndex(newArr, 0); // Carol
funcaoArrayIndex(newArr, 1); // { te: 'amo' }
funcaoArrayIndex(newArr, 2); // 44
funcaoArrayIndex(newArr, 3); // true
funcaoArrayIndex(newArr, 4); // null

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
function book(bookName) {
  const allBooks = {
    "Watership Down": {
      quantidadePaginas: 413,
      autor: "Richard Adams",
      editora: "Rex Collings"
    },
    "Berserk Databook": {
      quantidadePaginas: 700,
      autor: "Kentaro Miura",
      editora: "Panini corp ltda"
    },
    "One Piece Red Databook": {
      quantidadePaginas: 140,
      autor: "Eichiro Oda",
      editora: "Panini corp ltda"
    }
  };

  if (bookName != undefined) {
    return allBooks[bookName];
  }

  return allBooks;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
// {
//   'Watership Down': {
//     quantidadePaginas: 413,
//     autor: 'Richard Adams',
//     editora: 'Rex Collings'
//   },
//   'Berserk Databook': {
//      quantidadePaginas: 700,
//      autor: 'Kentaro Miura',
//      editora: 'Panini'
//    },
//   'One Piece Red Databook': {
//      quantidadePaginas: 140,
//      autor: 'Eichiro Oda',
//      editora: 'Panini'
//    }
// }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  ` O livro Berserk Databook tem ${
    book("Berserk Databook").quantidadePaginas
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro Watership Down é ${book("Watership Down").autor}.`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro One Piece Red Databook foi publicado pela editora ${
    book("One Piece Red Databook").editora
  }.`
);
