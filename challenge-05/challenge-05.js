/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var minhaVariavel = [2,5,3,8,4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function mostraArray (meuArray) { return meuArray };
mostraArray(minhaVariavel); // [2,5,3,8,4]

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( mostraArray(minhaVariavel)[1] ); // 5

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mostraArray2 (meuArray, meuIndice) { return meuArray[meuIndice]; };


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variavelQualquer = ["Thales", 35, 1.85, true, function(){ return "Meu nome é Thales"} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( mostraArray2 (variavelQualquer, 0) ); // "Thales"
console.log( mostraArray2 (variavelQualquer, 1) ); // 35
console.log( mostraArray2 (variavelQualquer, 2) ); // 1.85
console.log( mostraArray2 (variavelQualquer, 3) ); // true
console.log( mostraArray2 (variavelQualquer, 4) ); // function(){ return "Meu nome é Thales"}
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

function book (nomeDoLivro) {
    
    var estante = { 
        aEliteDoAtraso : { quantidadePaginas : 272, autor : "Jessé Souza", editora : "Estação Brasil" }, 
        comoConversarComUmFascista : { quantidadePaginas : 196, autor : "Marcia Tiburi", editora : "Record" },
        roubeComoUmArtista : { quantidadePaginas : 160, autor : "Austin Kleon", editora : "Rocco" }
    }

    /*
    if (!nomeDoLivro){
        return estante;
    }else{
        return estante.["nomeDoLivro"];
    }
    */
    return !nomeDoLivro ? estante : estante[nomeDoLivro];
};




/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log (book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( "O livro 'A Elite do Atraso' tem " + book("aEliteDoAtraso").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "A autora do livro 'Como conversar com um Fascita' é " + book("comoConversarComUmFascista").autor + "!");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( "O livro 'Roube como um artista' foi publicado pela editora" + book("roubeComoUmArtista").editora + "!");

