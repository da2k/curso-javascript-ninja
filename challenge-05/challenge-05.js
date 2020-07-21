/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const newVar = ["chuva", "julho", "batata", true, 2, [] ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(param) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(newVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeArray(arr,indice) {
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const cincoTipos = ["dois", 2, true, ["azul","preto"], {cor: "amarelo"}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
recebeArray(cincoTipos,0);
recebeArray(cincoTipos,1);
recebeArray(cincoTipos,2);
recebeArray(cincoTipos,3);
recebeArray(cincoTipos,4);


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
function listarBooks(nomeLivro) {
  const todosLivros = {
    "O poder do habito": { quantidadePaginas: 408, autor: "Charles Duhigg", editora: "Objetiva" },
    "A sutil arte de ligar o foda-se": { quantidadePaginas: 224, autor: "Mark Manson", editora: "Intrínseca" },
    "A menina que roubava livros": { quantidadePaginas: 480, autor: "Markus Zusak", editora: "Intrínseca" }
  }

  return nomeLivro ? todosLivros[nomeLivro] : todosLivros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(listarBooks());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const nomeLivro = "O poder do habito";

console.log("O livro, " + nomeLivro + " tem " + listarBooks(nomeLivro).quantidadePaginas + " páginas!");
//O livro, O poder do habito tem 408 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro, " + nomeLivro + " é " + listarBooks(nomeLivro).autor);
//O autor do livro, O poder do habito é Charles Duhigg

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro, " + nomeLivro + " foi publicado pela editora " + listarBooks(nomeLivro).editora);
//O livro, O poder do habito foi publicado pela editora Objetiva
