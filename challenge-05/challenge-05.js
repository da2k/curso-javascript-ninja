/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ? 
let arr = [1,3,'',null,""," ",' ',0,2];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

const f1 = (arr) => arr;
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ? 
//console.log(f1(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
const f2 = (arr,num) => arr[num];


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let  arr2 = [1,2,3,4,5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

//console.log(f2(arr2,0));
//console.log(f2(arr2,1));
//console.log(f2(arr2,2));
//console.log(f2(arr2,3));
//console.log(f2(arr2,4));
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
// ?
const book = (name) => {
    let books = { 
    'livro1':{
      quantidadeDePaginas: 48,
      autor: 'Joao',
      editora: 'dasc'
    },
    'In': {
      quantidadeDePaginas: 27,
      autor: 'autor2',
      editora: 'ed2'
    },
    'Hack': {
      quantidadeDePaginas: 980,
      autor: 'auto3',
      editora: 'ed3'
    }
  }
  return name ? books[name] : books;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
 let = namee = "Hack";
console.log(`O livro ${namee} tem ${book('Hack').quantidadeDePaginas} paginas`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro ${namee}   é ${book('Hack').autor}`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O  livro ${namee} foi publicado pela editora ${book('Hack').editora}`);
