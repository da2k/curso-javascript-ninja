/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function fun(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(fun(arr[1])); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function fun2(arr, indice) {
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, "Hiago", true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(fun2(arr2, 0)); // 1
console.log(fun2(arr2, 1)); // "Hiago" 
console.log(fun2(arr2, 2)); // true
console.log(fun2(arr2, 3)); // null
console.log(fun2(arr2, 4)); // undefined

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
function book(name) {
  var obj = {
    'Eloquent JavaScript': {
      quantidadePaginas: 250,
      autor: 'Beltrano',
      editora: 'Bookman'
    },
    'Clean Code': {
      quantidadePaginas: 356,
      autor: 'Cicrano',
      editora: 'AutaBooks'
    },
    'Segredos do Ninja JavaScript': {
      quantidadePaginas: 488,
      autor: 'Fulano',
      editora: 'Novatec'
    }
  };
  
  return !name ? obj : obj[name];
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
console.log(`O Livro Clean Code tem ${book('Clean Code').quantidadePaginas} páginas.`)
//O Livro Clean Code tem 356 páginas.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O auto do livro Clean Code é ${book('Clean Code').autor}.`)
//O auto do livro Clean Code é Cicrano.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O Livro Clean Code foi publicado pela editora ${book('Clean Code').editora}.`)
// O Livro Clean Code foi publicado pela editora AutaBooks.

