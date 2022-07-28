/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1, "segundo", true, undefined, "1"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray ( arr ) {
  return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(qualquer)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doubleParam ( arr, index) {
  return arr[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveValues = [ 1, '2', true, null, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doubleParam(fiveValues, 0))
console.log(doubleParam(fiveValues, 1))
console.log(doubleParam(fiveValues, 2))
console.log(doubleParam(fiveValues, 3))
console.log(doubleParam(fiveValues, 4))

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
function book ( name ) {
  var recebeObj = {
    livro1 : {
      quantidadePaginas : 125,
      autor : 'Fulano de Tal',
      editora : 'Fulano editora'
    },
    livro2 : {
      quantidadePaginas : 10,
      autor : 'Beltrano',
      editora : 'Beltrano editora'
    },
    livro3 : {
      quantidadePaginas : 968,
      autor : 'Ciclano',
      editora : 'Clicano editora'
    }
  }
  return !name ? recebeObj : recebeObj[name]
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
var teste = 'livro1'
console.log(`O livro ${teste} tem ${book(teste).quantidadePaginas}`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${teste} é ${book(teste).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var livroQualquer = 'livro3'

console.log(`O livro ${livroQualquer} foi publicado pela editora ${book(livroQualquer).editora}`)
