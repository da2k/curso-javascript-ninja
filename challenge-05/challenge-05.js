/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArrays = [23, 'Maicon', '54', true, x => ++x]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray (array){
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArray(myArrays)[1])//['Maicon']

//BONUS
console.log(retornarArray(myArrays)[myArrays.length - 1](1))//2


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayMaisIndice (array, indice){
    if (indice === undefined){
        return array
    }
    return array[indice]
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayNovo = [1, true, [1, 2, 3], 'JavaScript Ninja', NaN]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayMaisIndice(myArrayNovo))

//BONUS
console.log(arrayMaisIndice(myArrayNovo, 2))

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
function book (nomeDoLivro){
    var obj = {
        'Sitio do Picapau Amarelo':{
            quantidadePaginas: 640,
            autor: 'Monteiro Lobato',
            editora: 'Nova Fronteira'
        },
        'Memórias Póstumas de Brás Cubas': {
            quantidadePaginas: 368,
            autor: 'Machado de Assis',
            editora: 'Penguin' 
        },
        'O Alienista': {
            quantidadePaginas: 120,
            autor: 'Machado de Assis',
            editora: 'Penguin'
        }
    }

    if (nomeDoLivro === undefined){
        return obj
    }
    return obj[nomeDoLivro]
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
let livro = 'Memórias Póstumas de Brás Cubas'

console.log(`O livro ${livro} tem ${book(livro).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${livro} é ${book(livro).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${livro} foi publicado pela editora ${book(livro).editora}`)
