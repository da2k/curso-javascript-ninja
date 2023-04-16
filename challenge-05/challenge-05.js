/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['a', 1, 1.2, true, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(arr){
    return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

returnArray(arr)[1];
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function returnByIndex(arr, i){
    return arr[i];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr2 = ['a', 1, function(a){return a}, true, {key: false}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

returnArray(arr2);

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

function book(arg){
    var books =
        {
            livro1:{
                quantidadePaginas: 100,
                autor: 'Mario',
                editora: 'moderna'
            },
            livro2:{
                quantidadePaginas: 150,
                autor: 'Thalita',
                editora: 'moderna'
            },
            livro3:{
                quantidadePaginas: 200,
                autor: 'Miguel',
                editora: 'moderna'
            }
        }
    return !arg ? books : books[arg];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book()
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var livro = 'livro1';
console.log(`O ${livro} tem ${book(arg).quantidadePaginas} páginas!`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var livro = 'livro2';
console.log(`O autor do ${livro} é ${book(livro).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var livro = 'livro3';
console.log(`O livro ${livro} foi publicado pela editora ${book(livro).editora}.`);
