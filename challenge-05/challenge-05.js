/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [0, 1, 2, 'três', null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornoArray(x) {
  return x;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornoArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornoArray2(varArray, posicao) {

  return posicao ? varArray[posicao] : varArray;

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray2 = [0, 1, 2, 'três', null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornoArray2(meuArray2, 3));

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
function book(nome) {

  var books = {
    'Javascript': {
      quantidadePaginas: 400,
      autor: 'Autor Javascript',
      editora: 'Editora Javascript'
    },
    'HTML5': {
      quantidadePaginas: 300,
      autor: 'Autor HTML5',
      editora: 'Editora HTML5'
    },
    'CSS': {
        quantidadePaginas: 200,
        autor: 'Autor CSS',
        editora: 'Editora CSS'
    }
  }

  return !nome ? books : books[nome];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Javascript tem '+book('Javascript').quantidadePaginas+' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro HTML5 é '+book('HTML5').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro CSS foi publicado pela editora '+book('CSS').editora)
