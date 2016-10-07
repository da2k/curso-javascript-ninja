/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['abc', 123, true, null, 5 + 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrFunction(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrFunction(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrFunction(myArray, indice) {
  return myArray[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = ['abc', 123, true, null, 5 + 5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrFunction(arr, 0) // "abc"
arrFunction(arr, 1) // 123
arrFunction(arr, 2) // true
arrFunction(arr, 3) // null
arrFunction(arr, 4) // 10

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
   var livros = {
      'Livro 1': {
        quantidadePaginas: 100,
        autor: 'Pedro',
        editora: 'Muraki'
      },
      'Livro 2': {
        quantidadePaginas: 200,
        autor: 'Fernando',
        editora: 'Daciuk'
      },
      'Livro 3': {
        quantidadePaginas: 300,
        autor: 'Javascript',
        editora: 'Ninja'
      }
   };
  
  return nomeLivro ? livros[nomeLivro] : livros;
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
function imprimeLivro(nomeLivro) {
  return "O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!";
}

imprimeLivro('Livro 2'); // "O livro Livro 2 tem 200 páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro Livro 1 é " + book('Livro 1').autor + "." );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( "O livro Livro 1 foi publicado pela editora " + book('Livro 1').editora + "." );
