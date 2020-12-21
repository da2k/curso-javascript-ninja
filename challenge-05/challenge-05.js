# Desafio Semana #5

```js

// Aluno: Bruno Benício de Andrade Lima

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
✔
var pessoa = [
    "Bruno",
    23,
    "Masculino",
    true,
    undefined
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
✔
var parms = [1, 2, 3];

function myfunction (parms) {
    return parms;
}

myfunction(parms);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
✔
myfunction(parms)[1];
//ou 
console.log( myfunction(parms)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
✔
function retornaArrays( array, indice ) {
    return array[ indice ];
} 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
✔
var array = [ 'Bruno', 1.60, true,{booleano: false},null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
✔
retornaArrays( array, 0 ); //'Bruno'
retornaArrays( array, 1 ); //'1.6'
retornaArrays( array, 2 ); //'true'
retornaArrays( array, 3 ); //'{ booleano: false }'
retornaArrays( array, 4 ); //'null'
//ou
console.log( retornaArrays( array, 0 )); //Bruno
console.log( retornaArrays( array, 1 )); //1.6
console.log( retornaArrays( array, 2 )); //true
console.log( retornaArrays( array, 3 )); //{ booleano: false }
console.log( retornaArrays( array, 4 )); //null

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
✔
function book ( nomeLivros ) {
    var livrosCadastrados = {
        "Primeiro Livro": {
            quantidadePaginas: 100,
            autor: 'Autor1',
            editora: 'Editora1'
        },
        "Segundo Livro": {
            quantidadePaginas: 150, 
            autor: 'Autor2',
            editora: 'Editora2'
        },
        "Terceiro Livro": {
            quantidadePaginas: 200,
            autor: 'Autor3',
            editora: 'Editora3'
        },
    };

    //usando ternário
    return !nomeLivros ? livrosCadastrados : livrosCadastrados[ nomeLivros ];
};

    //    if ( !nomeLivros ) {
    //       return livrosCadastrados;
    //    }
    //  return livrosCadastrados[ nomeLivros ];

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
✔
book();
//ou 
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
✔
var nomedoLivro = 'Primeiro Livro';

'O livro '+ nomedoLivro +' tem ' +book( nomedoLivro ).quantidadePaginas + ' páginas';
//ou
console.log('O livro ' + nomedoLivro + ' tem ' + book( nomedoLivro ).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
✔
var nomedoLivro1 = 'Primeiro Livro';

'O autor do ' + nomedoLivro1 + ' se chama ' +book( nomedoLivro ).autor;
//ou
console.log('O autor do ' + nomedoLivro1 + ' se chama ' +book('Primeiro Livro').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
✔
var nomedoLivro2 = 'Primeiro Livro';

'O livro ' + nomedoLivro2 + ' foi publicado pela editora ' +book( nomedoLivro2 ).editora;
//ou
console.log('O livro ' + nomedoLivro2 + ' foi publicado pela editora ' +book( nomedoLivro2 ).editora);
```
