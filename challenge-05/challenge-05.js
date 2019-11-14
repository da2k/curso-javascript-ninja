/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = [[1, 2, 3], 'teste', true, null, { name: 'produto' }]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let retornaArr = (arg) => {
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(myArr)[1]) // teste

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
let recebeArr = (arr, indice) => {
    return arr[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr2 = [NaN, true, 'teste1', { id: 1 }, [1, 2, 3]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(myArr2)) // [ NaN, true, 'teste1', { id: 1 }, [ 1, 2, 3 ] ]

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
    let livros = {
        'JavaScript de Alto Desempenho': {
            quantidadePaginas: 248,
            autor: 'Nicholas C. Zakas',
            editora: 'Novatec'
        },
        'Segredos do Ninja JavaScript': {
            quantidadePaginas: 488,
            autor: 'John Resing',
            editora: 'Novatec'
        },
        'Node Essencial': {
            quantidadePaginas: 216,
            autor: 'Ricardo R. Lecheta',
            editora: 'Novatec'
        }
    }
    return !nomeLivro ? livros : livros[nomeLivro]
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
console.log(`O livro JavaScript de Alto Desempenho tem ${book('JavaScript de Alto Desempenho').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro JavaScript de Alto Desempenho é ${book('JavaScript de Alto Desempenho').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro JavaScript de Alto Desempenho foi publicado pela editora ${book('JavaScript de Alto Desempenho').editora}.`)
