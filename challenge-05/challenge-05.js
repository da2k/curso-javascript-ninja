/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var numberList = [5,-48,3.4,0,18]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//
var retornarArray = function(arg1){
  return arg1 }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//
retornarArray(numberList[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
//
var retornarNumero(arg1,arg2){
  return arg1[arg2] }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//
var numbersList = [7,6,8,10.8,-3.4]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//
retornarNumero(numbersList,0)
retornarNumero(numbersList,1)
retornarNumero(numbersList,2)
retornarNumero(numbersList,3)
retornarNumero(numbersList,4)

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
// 
var book = function(arg){
  var x = {
    'livro1': {
      quantidadePaginas: 120,
      autor: 'Machado de Assis',
      editora: 'Saraiva'
    }, 
    'livro2': {
      quantidadePaginas: 180,
      autor: 'Rosqueiro Assis',
      editora: 'Arqueiro'
    }, 
    'livro3': {
      quantidadePaginas: 100,
      autor: 'Salomon Hill',
      editora: 'Creativa'
    }
  }
  return !arg ? x : x[ arg ]
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
bookName = ""
console.log(` O livro ${bookName} possui ${book(bookName).quantidadePaginas} de páginas.`) 

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
//
console.log(`O autor do livro ${bookname} é ${book(bookName).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
//
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`)
