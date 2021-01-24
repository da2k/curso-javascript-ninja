/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['glaubermlira', null, true, undefined, -1];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function fnArray (myArray) {
    return myArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(fnArray(myArray)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoFn (arr, index) {
    return arr[index];
}

//console.log(twoFn(myArray, 0));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = ['string', false, 0.35, {a:35}, function (){}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoFn(newArray, 0));
console.log(twoFn(newArray, 1));
console.log(twoFn(newArray, 2));
console.log(twoFn(newArray, 3));
console.log(twoFn(newArray, 4));

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
function book (nameBook) {
    var myBooks = {
        'Novos Negocios no Brasil': {
            quantidadePaginas: 400,
            autor: 'Silvio Meira',
            editora: 'Casa da Palavra'
        }, 
        'Lógica de Programação': {
            quantidadePaginas: 200,
            autor: 'Paulo Silveira',
            editora: 'Casa do Código'
        }, 
        'Orientação de Objetos': {
            quantidadePaginas: 150,
            autor: 'Thiao Leite & Carvalho',
            editora: 'Casa do Código'
        }   
    }
    
    return !nameBook ? myBooks : myBooks[nameBook];
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
console.log(`O livro Novos Negocios no Brasil tem ${book('Novos Negocios no Brasil').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Novos Negocios no Brasil é ${book('Novos Negocios no Brasil').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Novos Negocios no Brasil foi publicado pela editora ${book('Novos Negocios no Brasil').editora}.`);

