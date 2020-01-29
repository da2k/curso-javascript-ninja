/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var arrayAleatorio = [1,false,'a',6,2]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function myFunction(arg){
  return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arrayAleatorio)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(x,y){
  return x[y]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ['a', 0, true, [2, 'b'], { nome: 'array', indice: 4}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(myVar, 0)
myFunction2(myVar, 1)
myFunction2(myVar, 2)
myFunction2(myVar, 3)
myFunction2(myVar, 4)

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
function book(nome){
  var b = {
    'livro1': {
      quantidadePaginas: 350,
      autor: 'Fulano',
      editora: 'Record'
    },
    'livro2': {
      quantidadePaginas: 240,
      autor: 'Sicrano',
      editora: 'Martis Fontes'
    },
    'livro3': {
      quantidadePaginas: 789,
      autor: 'Beltrano',
      editora: 'Jambô'
    }
  }

    if(nome === 'livro1'){
      return b.livro1
    } else if(nome === 'livro2'){
        return b.livro2
    } else if(nome === 'livro3'){
        return b.livro3
    } else if(nome === undefined){
        return b
    } else {
        return 'Este livro não está na lista.'
    }
}
  
function book(bookName){
  var allBooks = {
    'Segredos do Ninja JavaScript': {
      quantidadePaginas: 480,
      autor: 'John Resig & Bear Bibeault',
      editora: 'Novatec'
    },
    'Introdução ao HTML5': {
      quantidadePaginas: 220,
      autor: 'Bruce Lawson & Remy Sharp',
      editora: 'Alta Books'
    },
    'Smashing CSS': {
      quantidadePaginas: 283,
      autor: 'Erick A. Meyer',
      editora: 'Bookman'
    }
  }
  
  return !bookName? allBooks:allBooks[bookName]
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
console.log(`O livro livro2 tem ${book('livro2').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro livro1 é ${book('livro1').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro livro3 foi publicado pela editora ${book('livro3').editora}.`)
