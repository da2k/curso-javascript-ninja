/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = [1,4,15,25,53];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function parVar (ar){
    return ar;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log (parVar(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function indice (arry, index) {
    return arry [index] ;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr = [5,`carlos`, true, undefined, null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( indice(arr,0));
console.log( indice(arr,1));
console.log( indice(arr,2));
console.log( indice(arr,3));
console.log( indice(arr,4));


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

function book (names) {
    
    var books = {
        `As cronicas de narnia` : {
            quantidadePaginas: 543, 
            autor: `C.S. Lewis`, 
            editora : `WMF Martins Fontes`
        },
        `a divina comedia` : {
            quantidadePaginas: 336, 
            autor: `Dante`, 
            editora : `Abril`
        },
        `O cavaleiro dos sete reinos` : {
            quantidadePaginas: 413, 
            autor: `George R.R. Martin`, 
            editora : `leYa`
        }
    };


return !names ? books : books[names];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book( ) );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log (` o livro Dividna comedia tem` + books (`a divina comedia` ).quantidadePaginas + `paginas!` );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log (` o autor do livro a divina comedia e  ` + books (`a divina comedia` ).autor  );
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log (` o livro a divina comedia foi publicado pela editora` + books (`a divina comedia` ).editora );
