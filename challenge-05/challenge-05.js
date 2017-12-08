/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['adriano', 33, null, undefined, Infinity,{}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function (params) {
  return params;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var myFunction2 = function (arr, indice) {
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayFiveValues = [1, 'texto', null, [], {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myArrayFiveValues, 0));
console.log(myFunction2(myArrayFiveValues, 1));
console.log(myFunction2(myArrayFiveValues, 2));
console.log(myFunction2(myArrayFiveValues, 3));
console.log(myFunction2(myArrayFiveValues, 4));

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
var book = function (name) {
  var obj = {
    livro1 : {
      quantidadePaginas: 110,
      autor: 'José Carlos Arruda',
      editora: 'Abril'
    },
    livro2: {
      quantidadePaginas: 214,
      autor: 'Maria Romero',
      editora: 'Novatec'
    },
    livro3: {
      quantidadePaginas: 187,
      autor: 'Carlos Assis',
      editora: 'Papiro'
    }
  };

  return obj[name] || obj;
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
console.log("O livro " + 'livro1 tem ' + book('livro1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro livro2 é " + book('livro2').autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livro3 foi publicado pela editora " + book('livro3').editora);

