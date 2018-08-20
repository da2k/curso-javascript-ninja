/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ['teste', 2, 3, true, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray (myVar) {
    return myVar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValor (arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDiferente = [ 1, 'teste', 2.3, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaValor(arrDiferente, 0));
console.log(retornaValor(arrDiferente, 1));
console.log(retornaValor(arrDiferente, 2));
console.log(retornaValor(arrDiferente, 3));
console.log(retornaValor(arrDiferente, 4));

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
function book (bookName) {
    var estante = {
        'A menina que roubava livros': {
            quantidadePaginas: 480,
            autor: 'Markus Zusak', 
            editora: 'Intrinseca'
        },
        'O menino do pijama listrado': {
            quantidadePaginas: 192,
            autor: 'John Boyne',
            editora: 'Seguinte',
        },
        'O guardião de memórias': {
            quantidadePaginas: 368,
            autor: 'Kim Edwards',
            editora: 'Arqueiro'
        }
    };

    return !bookName ? estante : estante[bookName];
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
console.log('O livro A menina que roubava livros tem ' + book('A menina que roubava livros').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O menino do pijama listrado é ' + book('O menino do pijama listrado').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O guardião de memórias foi publicado pela editora ' + book('O guardião de memórias').editora + '.');
