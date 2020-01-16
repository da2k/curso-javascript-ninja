/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = ['Teste', true, [1, 2, 'testando'], { nome: 'Henrique' }]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArr(arr) {
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(myArr)[1]) // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArr2(arr, indice) {
    return arr[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr2 = [{ id: 1 }, ['carro', 'moto'], true, 'Henrique', false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(myArr2)) // [ { id: 1 }, [ 'carro', 'moto' ], true, 'Henrique', false ]

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
        'Estruturas De Dados': {
            quantidadePaginas: 408,
            autor: 'Loiane Groner',
            editora: 'Novatec'
        },
        'Node Essencial': {
            quantidadePaginas: 216,
            autor: 'Ricardo Rodrigues Lacheta',
            editora: 'Novatec'
        },
        'Primeiros Passos com React': {
            quantidadePaginas: 248,
            autor: 'Stoyan Stefanov',
            editora: 'Novatec'
        }
        
        
    }
    // let retornaInfo = (nomeLivro, info) => {
    //     switch (info) {
    //         case 'paginas':
    //             return `O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas!`
    //     }
    // }
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
console.log(`O livro Estruturas De Dados tem ${book('Estruturas De Dados').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Estrutura De Dados é ${book('Estruturas De Dados').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Estruturas De Dados foi publicado pela editora ${book('Estruturas De Dados').editora}.`)