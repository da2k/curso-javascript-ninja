/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, true, "Ítalo", null, 0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunc(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
newFunc(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newfunc2(arg1, arg2) {
  return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, false, null, "Bruno", { prop: "Hello" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunc2(arr2, 0);
newFunc2(arr2, 1);
newFunc2(arr2, 2);
newFunc2(arr2, 3);
newFunc2(arr2, 4);

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
function book(arg) {
  var obj = {
    livro1: {
      quantidadePaginas: 100,
      autor: "Ítalo",
      editora: "A"
    },
    livro2: {
      quantidadePaginas: 200,
      autor: "Bruno",
      editora: "B"
    },
    livro3: {
      quantidadePaginas: 300,
      autor: "Bia",
      editora: "C"
    }
  };

  return arg ? obj[arg] : obj;
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
"O livro livro1 tem " + book("livro1").quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro livro2 é " + book("livro2").autor + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro livro3 foi publicado pela editora " + book("livro3").editora + ".";
