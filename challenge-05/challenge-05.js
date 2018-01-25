/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [ 0, '1', 'dois', !3, 4]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arrayFunc = function (array) { return array }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( arrayFunc(array)[1] ) // '1'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myFunc = function (array, number) { return array[number] }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherArray = [ null, true, '2', 3, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc(anotherArray, 0) // null
myFunc(anotherArray, 1) // true
myFunc(anotherArray, 2) // '2'
myFunc(anotherArray, 3) // 3
myFunc(anotherArray, 4) // undefined

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
var book = function (bookName) {
    var library = {
        'A': {
            quantidadePaginas: 150,
            autor: 'Aretuza',
            editora: 'Aurora'
        },
        'B': {
            quantidadePaginas: 2800,
            autor: 'Jesus',
            editora: 'Genesis'
        },
        'C': {
            quantidadePaginas: 101,
            autor: 'Lassie',
            editora: 'Doo'
        },
    }

    return !bookName ? library : library[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book() // {A: {…}, B: {…}, C: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var imprimeQtdPaginas = function ( bookName ) {
    var qtdPaginas = book(bookName).quantidadePaginas
    console.log( "O livro " + bookName + ' tem ' + qtdPaginas + ' páginas!')
} // O livro A tem 150 páginas!


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var imprimeAutor = function ( bookName ) {
    var autor = book(bookName).autor
    console.log( 'O autor do livro ' + bookName + ' é ' + autor + '.' )
} // O autor do livro C é Lassie.


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var imprimeEditora = function ( bookName ) {
    var editora = book(bookName).editora
    console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + editora + '.' )
} // O livro B foi publicado pela editora Genesis.
