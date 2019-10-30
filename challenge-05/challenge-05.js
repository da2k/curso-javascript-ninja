/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let arrayValores = [42, 'olá', 18, true, 0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let retornaArray = function() {
    return arrayValores;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray()[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
let retornaIndice = function(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let variavelArray = [42, 'olá', true, false, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (i = 0; i < variavelArray.length; i++) {
    console.log(retornaIndice(variavelArray, i));
}

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
let book = function(bookName) {
   let list = {
       "Guia do Mochileiro das Galaxias": {
           quantidadePaginas: 42,
           autor: 'Douglas Adams',
           editora: 'Arqueiro'
       }, 
       "Belas Maldicoes": {
           quantidadePaginas: 50,
           autor: 'Neil Gaiman',
           editora: 'Bertrand'
       },
       "Harry Potter": {
           quantidadePaginas: 92,
           autor: 'J.K. Rowling',
           editora: 'Rocco'
       }
   }

   return !bookName ? list : list[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro " + book[1])

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Belas Maldições é " + book("Belas Maldicoes").autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Belas Maldições foi publicado pela editora " + book("Belas Maldicoes").editora + ".")
