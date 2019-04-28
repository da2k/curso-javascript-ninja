/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayAleatorio = [ "Nuca Pare", "De Estudar Programação", "Acredite no seu Sonho!", 10101010 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray ( arg ) {
    return arg;
}
retornaArray(arrayAleatorio);
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(arrayAleatorio[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeDoisparametros ( arrayValores, numero )  {
  return arrayValores[numero]; 
}
recebeDoisparametros([ 1, 2, 3 ], 2);  \\3
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cincoTiposDiferentes = [ 2, undefined, NaN, "Nome", null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
var myArray02 = [15, "Ninja", 88];

function myFunction02 ( myArray02, param02 ) {
    return myArray02[ param02 ];
}

console.log( myFunction02 ( myArray02, 0 ) );
console.log( myFunction02 ( myArray02, 1 ) );
console.log( myFunction02 ( myArray02, 2 ) );

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
*/function book ( bookName ) {
    var allBooks = { 
        "Game of Trhores": { 
            totalDePaginas: 300, 
            nomeAutor: "Jose", 
            editora: "Person" 
        }, 
        "Jurasic Park": { 
            totalDePaginas: 580, 
            nomeAutor: "Magno", 
            editora: "Abril" 
        }, 
        "O Mágico de Oz": { 
            totalDePaginas: 890, 
            nomeAutor: "Rosana", 
            aeditora: "Saravira" 
        } 
    };

    return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( "O livro "+ bookName +" tem páginas " + book( bookName ).totalDePaginas + " páginas.");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro"+ bookName +" é " + book( bookName ).nomeAutor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( "O livro " + bookName + " foi publicado pela editora " + book( bookName ).editora + ".");
