/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var exer05 =   [ " vitor " , 25 , true , null , false ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayexemplo(exer05) {
         return exer05  
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrayexemplo(exer05)) ; 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function duoP(arry, numero) {
    return array[numero]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var comum = [ true , " string " , 159 , false ,   function(){} ] ; 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(duoP(comum)[2]) ; 

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
function book(bookname) {
    var allbook = {
        "segredo dos ninjas javascript ": {
        quantidadePaginas: 488 ,
        autor :  "jhon resing ..."        , 
        editora:   "novatec"       , 
        },
        "introduçao ao html ": {
            quantidadePaginas: 220  ,
            autor :  "bruce lewson & remy sharp"        , 
            editora:  " alta book"        , 
        },
        "smating css": {
            quantidadePaginas: 283 ,
            autor :    "erick meyer"      , 
            editora:   "bookman "       , 
        }
    }
       return !bookname  ? allbook : allbook[bookname];  
};
     

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book() )  ; 

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookname = "smeshing css"
console.log("O livro " + bookname +  " tem " + book(bookname).quantidadePaginas +" páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeautor = " o segredo dos ninjas jAavascrpit "
console.log("O autor do livro "  + nomeautor +  "é " + book(nomeautor).autor +  ".")
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeDoLivro = "smating css"
console.log("O livro " + nomeDoLivro  + " foi publicado pela editora " + book(nomeDoLivro).editora + ".") ;
