/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myarray = [ 'Raphael', 27 , undefined , function soma(){}, 'Monica']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myfuntion(arr) {
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myfuntion(myarray[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myfuntion2(arr , x) {
    if(x === undefined) {
        return arr
    }
    return arr[x]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var minhavariavel = ['Raphael' , 27 , null , false , '32']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myfuntion(minhavariavel))

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

function book(bookname) {
    Livros= { 
    'O gato de botas': {
        quantidadePaginas: 300,
        autor: 'Monteiro Lobato',
        editora: 'Abril'
    } , 
    'Cinderela': {
        quantidadePaginas: 230,
        autor: 'Anakin',
        editora: 'Gazeta'
    }, 
    'Branca de Neve': {
        quantidadePaginas: 211,
        autor: 'Mickey',
        editora: 'Disney'
    }
    }
    return bookname === undefined ? Livros : Livros[bookname]
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

var bookName = 'Branca de Neve'
console.log(`O livro ${bookName} tem ${Livros[bookName].quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro Branca de Neve é ${Livros['Branca de Neve'].autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Branca de Neve foi publicado pela editora ${Livros['Branca de Neve'].editora}.`)
