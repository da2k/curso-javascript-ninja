/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['Luciano', '5', true, 45, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myfunction = function(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunction(myarray)[1]; // "5"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var indiceArr = function(arr, index){
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var casa = ['quarto', 200, true, {}, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indiceArr(casa,0) // "quarto"
indiceArr(casa,1) // 200
indiceArr(casa,2) // true
indiceArr(casa,3) // object
indiceArr(casa,4) // undefined

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
var book = function(paramlivro){

  var objBook =
  {
    aventura1: {
      quantidadePaginas: 100,
      autor: 'Juarez',
      editora: 'Editora um'
    },
    aventura2: {
      quantidadePaginas: 200,
      autor: 'Epaminondas',
      editora: 'Editora dois'
    },
    aventura3: {
      quantidadePaginas: 400,
      autor: 'Maria',
      editora: 'Editora tres'
    },
  }

  if(paramlivro === undefined){
    return objBook;
  }

  return objBook[paramlivro];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro aventura2 ' + book('aventura2').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro aventura1 é ' + book('aventura1').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro aventura3 foi publicado pela editora ' + book('aventura3').editora);
