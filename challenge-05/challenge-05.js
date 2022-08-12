/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function goArray(arrayValue){
    return arrayValue
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(goArray(array))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayENumero(arrayValue, numero){
    return arrayValue[numero]
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayNew = [11,'amor', {a: 1, b: 2},[32],true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayENumero(arrayNew, 4))

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
function book(nomeDoLivro){

    const todosOslivros = {
        "O Misterio Das Aguas": {
            quantidadeDePaginas: 100,
            autor: 'Giselle Rosa',
            editora: 'Talento Literário'
        },
        "O Mundo Das Luas":{
            quantidadeDePaginas: 156,
            autor: 'Giselle Nepomuceno',
            editora: 'Café Literário'
        },
        "Sol e Amor":{
            quantidadeDePaginas: 300,
            autor: 'Giselle Nepomuceno',
            editora: 'Café Literário'
        }
    }
    if(!nomeDoLivro){
        return todosOslivros
    }
    return todosOslivros[nomeDoLivro]

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
console.log(`O Livro O Misterio Das Aguas tem ${book('O Misterio Das Aguas').quantidadeDePaginas} páginas`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O O autor  do livro O Mundo Das Luas é ${book('O Mundo Das Luas').autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro O Mundo Das Luas foi publicado pela editora ${book('O Mundo Das Luas').editora}`)
