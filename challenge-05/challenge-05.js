/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let qualquer = [{id: 1}, [1, 2, 3], ['Henrique'], true, false, null]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArr(arg) {
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(qualquer)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArrPorIndice(arr, indice) {
    return arr[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let qualquer2 = [[1, 2, 3, 4], false, true, 'henrique', null, {prop1: 1}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(qualquer2))

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
let book = (nomeLivro) => {
    let myBook = {
        'JavaScript de Alto Desempenho': {
            quantidadePaginas: 248,
            autor: 'Nicholas C. Zakas',
            editora: 'Novatec'
        },
        'JavaScritp O guia Definitivo': {
            quantidadePaginas:1080,
            autor: 'David Flanagan',
            editora: 'Bookman'
        },
        'O poder do Habito': {
            quantidadePaginas: 408,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        }
    }
    return nomeLivro ? myBook[nomeLivro] : myBook
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro JavaScript de Alto Desempenho tem ${book('JavaScript de Alto Desempenho').quantidadePaginas} páginas`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor no livro JavaScript de Alto Desempenho é ${book('JavaScript de Alto Desempenho').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro JavaScript de Alto Desempenho foi publicado pela editora ${book('JavaScript de Alto Desempenho').editora}.`)