/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var a = [1 , 'Jota', undefined, {b:1}, function() {}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var fun = function(a) {
    return a;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(fun(a[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(a, i) {
    return a[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var a2 = [1, 'Casa', [1,2,3], {q:1, w:2, e:3}, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(a2, 0))
console.log(myFunction(a2, 1))
console.log(myFunction(a2, 2))
console.log(myFunction(a2, 3))
console.log(myFunction(a2, 4))

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

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

function book (bookName){
    
    var allBooks = {
        'A bela e a Fera': {
            quantidadeDePaginas: 490,
            autor: 'Junior Gomes',
            editora: 'Cultura'
        },
        'Principe e a Princesa': { 
            quantidadeDePaginas: 300,
            autor: 'Francisco da Silva',
            editora: 'Abril'
        },
        'Estamos Indo para Longe': {
            quantidadeDePaginas: 295,
            autor: 'Josefina Ferraz',
            editora: 'Avante'
        }
      
    };
    
    return !allBooks[bookName] ? allBooks : allBooks[bookName];
}

console.log(book('A bela e a Fera'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro A bela e a Fera '+' tem '+book('A bela e a Fera').quantidadeDePaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro Principe e a Princesa é ' +book('Principe e a Princesa').autor+'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro Estamos Indo para Longe foi publicado pela editora '+book('Estamos Indo para Longe').editora+'.')
