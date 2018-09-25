/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ['Diana' , 35, true, 'Dias', 'javascript'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arr) {
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myVar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr , num) {
  return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = ['Artur' , 33, true, 'Drummond', 'java'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2 (myVar2, 1)

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
function book (num) {
   var obj = {
      1: {
        quantidadePaginas: 200,
        autor: 'Fulano',
        editora: 'Abril'
      },
      2: {
        quantidadePaginas: 500,
        autor: 'Ciclano',
        editora: 'Atica'
      },
      3: {
        quantidadePaginas: 800,
        autor: 'Beltrano',
        editora: 'Planeta'
      },
   }
   if (num === undefined) {
     return obj
       }
   return obj[num]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()
{1: {…}, 2: {…}, 3: {…}}
1: {quantidadePaginas: 200, autor: "Fulano", editora: "Abril"}
2: {quantidadePaginas: 500, autor: "Ciclano", editora: "Atica"}
3: {quantidadePaginas: 800, autor: "Beltrano", editora: "Planeta"}__proto__: Object


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro" + book(1) + " tem " +  book(1).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro" + book(1) + " é " +  book(1).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro" + book(1) + " é " +  book(1).editora);
