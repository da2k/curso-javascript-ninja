/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var carro = ['preto', 'fiat', 1.6, 'antigo', 'conservado'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(carro)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr, y) {
    return arr[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = [1, 'Diego', null, true, NaN]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(myVar, 0)
myFunction2(myVar, 1)
myFunction2(myVar, 2)
myFunction2(myVar, 3)
myFunction2(myVar, 4)

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
function book (nomeDoLivro) {
    var obj = { nomedoLivro1: {quantidadePaginas: 25, autor: 'Diego', editora: 'Saraiva'}, nomedoLivro2: { quantidadePaginas: 1000, autor: 'Diego', editora: 'Gospel'}, nomedoLivro3: {quantidadePaginas: 3001, autor: 'God', editora: 'qualquerUma'}}
    // if (!nomeDoLivro) {
    //     return obj;
    // }
    return !nomeDoLivro ? obj : obj[nomeDoLivro];
    // return obj[nomeDoLivro];
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
console.log('O livro nomedoLivro1 tem ' + book(nomeDoLivro).nomedoLivro1.quantidadePaginas + ' páginas.')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro nomedoLivro1 é '+book().nomedoLivro1.autor+'.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro nomedoLivro1 foi publicado pela editora '+ book().nomedoLivro1.editora +'.'
