/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Olá Mundo', 4, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function( param ) {
    return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var functionDoisParametro = function(arr, numero) {
    return arr[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1, '2', false, {valor: 4}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
functionDoisParametro(array, 0) //1
functionDoisParametro(array, 1) //"2"
functionDoisParametro(array, 2) //false
functionDoisParametro(array, 3) //{valor: 4}
functionDoisParametro(array, 4) //null

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
var book = function (livro) {
    var livros = {
            'livro1': {
            quantidadePaginas: 100,
            autor: 'José',
            editora: 'Nova'
        },
        'livro2': {
            quantidadePaginas: 200,
            autor: 'Maria',
            editora: 'Aberta'
        },
        'livro3': {
            quantidadePaginas: 250,
            autor: 'João',
            editora: 'Livre'
        }
    }
    if (!livro) {
        return livros;
    }
    return livros[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book() //livro1: {quantidadePaginas: 100, autor: "José", editora: "Nova"}
        //livro2: {quantidadePaginas: 200, autor: "Maria", editora: "Aberta"}
        //livro3: {quantidadePaginas: 250, autor: "João", editora: "Livre"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'livro1'
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro2 é ' + book('livro2').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro3 foi publicado pela editora ' + book('livro3').editora);
