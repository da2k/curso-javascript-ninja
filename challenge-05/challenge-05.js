/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
var arr = [2, 3, 5, 6, 7, 20, 22]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//
function myFunction(args) {
    return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr)[2]
// 5


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, key) {
    return arr[key];
} 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['Leo', false, true, 20, 2.6]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(arr2, 0) //'Leo'
myFunction2(arr2, 1) //false
myFunction2(arr2, 3) //true
myFunction2(arr2, 3) //20
myFunction2(arr2, 4) //2.6 

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
function book(livro) {
    var books = {
        livro1: {
            quantidadePaginas: 200,
            autor: 'joao da silva',
            editora: 'edit livro'
        },
        livro2: {
            quantidadePaginas: 60,
            autor: 'fulano',
            editora: 'edit livro'
        },
        livro3: {
            quantidadePaginas: 120,
            autor: 'siclano',
            editora: 'edit livro'
        }
    }
    return !livro ? books : books[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()
/* { livro1: 
   { quantidadePaginas: 200,
     autor: 'joao da silva',
     editora: 'edit livro' },
  livro2: { quantidadePaginas: 60, autor: 'fulano', editora: 'edit livro' },
  livro3: 
   { quantidadePaginas: 120,
     autor: 'siclano',
     editora: 'edit livro' } }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro livro1 tem ${book('livro1').quantidadePaginas} páginas!`)
// O livro livro1 tem 200 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro livro1 é ${book('livro1').autor}`)
// O autor do livro livro1 é joao da silva

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro livro1 foi publicado pela editora ${book('livro1').editora}`)
// O livro livro1 foi publicado pela editora edit livro