/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const myFunction = (arr) => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1]; // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const returnArrayPosition = (arr, pos) => arr[pos];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = [1, "dois", true, [1, 2], { nome: "Nurielly" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrayPosition(myArray, 0) // 1
returnArrayPosition(myArray, 1) // 'dois'
returnArrayPosition(myArray, 2) // true
returnArrayPosition(myArray, 3) // [1, 2]
returnArrayPosition(myArray, 4) // { nome: 'Nurielly' }

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
const book = (nameBook) => {
    const books = {
        "A Divina Comédia": {
            quantidadePaginas: 528,
            autor: "Dante Alighieri",
            editora: "Nova Fronteira"
        },
        "Na Margem do Rio Piedra Eu Sentei e Chorei": {
            quantidadePaginas: 186,
            autor: "Paulo Coelho",
            editora: "Rocco"
        },
        "Se Houver Amanha": {
            quantidadePaginas: 512,
            autor: "Sidney Sheldon ",
            editora: "Record"
        }
    }
    return books[nameBook] || books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()
/* { 'A Divina Comédia': 
    { quantidadePaginas: 528,
      autor: 'Dante Alighieri',
      editora: 'Nova Fronteira' },
 'Na Margem do Rio Piedra Eu Sentei e Chorei': 
    { quantidadePaginas: 186,
      autor: 'Paulo Coelho',
      editora: 'Rocco' },
 'Se Houver Amanha': 
    { quantidadePaginas: 512,
      autor: 'Sidney Sheldon ',
      editora: 'Record' } }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const printPages = (nameBook) => {
    const b = book(nameBook);
    return `O livro ${nameBook} tem ${b.quantidadePaginas} páginas!`
}

printPages('A Divina Comédia') // 'O livro A Divina Comédia tem 528 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const printAutor = (nameBook) => {
    const b = book(nameBook);
    return `O autor do livro ${nameBook} é ${b.autor}.`
}
printAutor('A Divina Comédia') // 'O autor do livro A Divina Comédia é Dante Alighieri.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const printEditora = (nameBook) => {
    const b = book(nameBook);
    return `O livro ${nameBook} foi publicado pela editora ${b.editora}.`
}
printEditora('A Divina Comédia') // 'O livro A Divina Comédia foi publicado pela editora Nova Fronteira.'