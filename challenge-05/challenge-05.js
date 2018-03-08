/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = ["Marcos",42,null,false,{}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(valores)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaPeloIndice(arr, num){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresComTiposDiferentes = ["Rapaz",true,69,null,[1,2,3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaPeloIndice(valoresComTiposDiferentes,0));
console.log(retornaPeloIndice(valoresComTiposDiferentes,1));
console.log(retornaPeloIndice(valoresComTiposDiferentes,2));
console.log(retornaPeloIndice(valoresComTiposDiferentes,3));
console.log(retornaPeloIndice(valoresComTiposDiferentes,4));

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
var book = function(livro){
    var livros = {
        TheWitcher: {
            quantidadePaginas: 320,
            autor: "Andrzej Sapkowski",
            editora: "Martins Fontes"
        },
        OLoboDasPlanicies: {
            quantidadePaginas: 420,
            autor: "Conn Iggulden",
            editora: "Record"
        },
        GuerraDosTronos: {
            quantidadePaginas: 592,
            autor: "George R. R. Martin",
            editora: "Leya"
        }
    }
    if( livro === undefined ){
        return livros;
    }
    return livros[livro]
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro \"O lobo das planícies\" tem " + book("OLoboDasPlanicies").quantidadePaginas + "!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro \"The Witche\" é " + book("TheWitcher").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro \"Guerra dos tronos\" foi publicado pela editora " + book('GuerraDosTronos').editora + ".");
