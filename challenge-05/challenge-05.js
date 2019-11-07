/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let meuArr = [[1, 2, 3], { id: 1 }, true, NaN, false]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArr(arg) {
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(meuArr)[1]) // { id: 1}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArr2(array, indice) {
    return array[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr = [true, false, { nome: 'lapis' }, [1, 2, 3], 'teste']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(myArr))

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
        'O poder do hábito': {
            quantidadePaginas: 408,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        },
        'O poder da ação': {
            quantidadePaginas: 256,
            autor: 'Paulo Vieira',
            editora: 'Gente'
        },
        'O milagre da manh': {
            quantidadePaginas: 196,
            autor: 'Hal Elrod',
            editora: 'BestSeller'
        }
    }
    return nomeLivro ? livros[nomeLivro] : livros

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.table(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro 'O poder do hábito' tem ${book('O poder do hábito').quantidadePaginas} páginas.`) // O livro 'O poder do hábito' tem 408 páginas.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro 'O poder do hábito' é ${book('O poder do hábito').autor}.`) // O autor do livro 'O poder do hábito' é Charles Duhigg.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro 'O poder do hábito' foi publicado pela editora ${book('O poder do hábito').editora}.`) // O livro 'O poder do hábito' foi publicado pela editora Objetiva.