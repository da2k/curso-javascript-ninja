/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
  var myArr = [  5, 'Jefferson', { prop1 : true }, false,  'Curso JS']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( myArr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrWork(arr, ind){
  return arr[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrValue = ['JS', true, { prop1:'prop1' }, ['item01', 'item02'], 5  ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrWork(arrValue, 0));
console.log(arrWork(arrValue, 1));
console.log(arrWork(arrValue, 2));
console.log(arrWork(arrValue, 3));
console.log(arrWork(arrValue, 4));

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

  var livros = {
    'Cangaceiro JavaScript': {
      quantidadePaginas: 502,
      autor: 'Flávio Almeida',
      editora: 'Casa do Código',
    },
    'Ensine seus filhos a programar': {
      quantidadePaginas: 368,
      autor: 'Bryson Payne',
      editora: 'Novatec',
    },
    'Algoritimos e Lógica de Programação': {
      quantidadePaginas: 262,
      autor: 'Marco Antonio Furlan de Souza, Marcelo Marques Gomes e Marcio Vieira Soares',
      editora: 'Cengage Learning',
    },

  }

  return nome ? livros[nome] : livros;

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
console.log('O livro Cangaceiro JavaScript tem ' + book('Cangaceiro JavaScript').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Ensine seus filhos a programar é ' + book('Ensine seus filhos a programar').autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Algoritimos e Lógica de Programação foi publicado pela editora ' + book('Algoritimos e Lógica de Programação').editora );
