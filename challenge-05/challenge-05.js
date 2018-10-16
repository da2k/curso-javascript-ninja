/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['A','B','C','D','F']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function showArray(arg){
    return console.log(arg)
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
showArray(arr[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function showArrayByIndex(arg,index){
    return console.log(arg[index])
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var values = ['A', 1, person = {name: 'Gabi'}, function(){}, [1,2,3]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
showArrayByIndex(values, 0)
showArrayByIndex(values, 1)
showArrayByIndex(values, 2)
showArrayByIndex(values, 3)
showArrayByIndex(values, 4)

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
function showBook(){
    var allBooks = {
        'Smashing CSS':{
            quantidadePaginas: 200,
            autor: 'A',
            editora: 'B'
        },
        'Lean UX':{
            quantidadePaginas: 120,
            autor: 'C',
            editora: 'D'
        },
        'Design Sprint':{
            quantidadePaginas: 150,
            autor: 'E',
            editora: 'F'
        }  
    }
    
    return (!bookName) ? allBooks : allBooks[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(showBook())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Lean UX tem ${showBook('Lean UX').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Lean UX é ${showBook('Lean UX').autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Lean UX foi publicado pela editora ${showBook('Lean UX').editora}`)
