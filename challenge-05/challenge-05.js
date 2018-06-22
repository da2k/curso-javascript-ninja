/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1 ,'Calleu' ,3 ,true ,null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayPosition(arr,i){
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var strangeArray = ['Bob', 0, undefined, true, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayPosition(strangeArray,0));
console.log(arrayPosition(strangeArray,1));
console.log(arrayPosition(strangeArray,2));
console.log(arrayPosition(strangeArray,3));
console.log(arrayPosition(strangeArray,4));

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
function book(params) {
    var bookInfo = {
        'Pedra Fisolosal': {
            quantidadePaginas: 300,
            autor: 'J.K Rowling',
            editora: 'Amazon'
        },
        'O retorno do rei': {
            quantidadePaginas: 800,
            autor: 'J.R.R. Tolkien',
            editora: 'Allen'
        },
        'O Hobbit': {
            quantidadePaginas: 500,
            autor: 'J.R.R. Tolkien',
            editora: 'Allen'
        }
    };
    if(params){
        return bookInfo[params];
    }
    return bookInfo;
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
console.log("O livro O retorno do rei tem " + book('O retorno do rei').quantidadePaginas + ' páginas');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O retorno do rei  é ' + book('O retorno do rei').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro O retorno do rei foi publicado pela editora " + book('O retorno do rei').editora + '.')
