/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = ["fred","desimpedidos","bora","pro","fut"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function mFunction(myArray){
    return myArray;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

mFunction(myArray)[1];


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function funcion(array,num){
    return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var vetor = [0,"reckless",null,NaN,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

funcion(vetor,1);

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

function book(nomeLivro){
    var acervo = {
        ClashOfKings : {
            titulo: "A Fúria dos Reis",
            quantidadePaginas: 761,
            autor: " George R. R. Martin",
            editora: " Bantam Spectra"
        },

        Prisioneiras : {
            titulo: "Prisioneiras",
            quantidadePaginas: 232,
            autor: " Drauzio Varella",
            editora: " Letra"
        },

        SobrevivendoInferno : {
            titulo: "Sobrevivendo no Inferno",
            quantidadePaginas: 128,
            autor: " Racionais MC's",
            editora: " Bloomsbury Academic"
        }

        }
        
        if(nomeLivro === "Prisioneiras" ){
            return acervo.Prisioneiras;
         }    

        else if(nomeLivro == "Clash of Kings" ){
            return acervo.ClashOfKings;
        } 

        else if(nomeLivro == "Sobrevivendo no Inferno" ){
            return acervo.SobrevivendoInferno;
        }
         
         else{
            return acervo;    
        };
    };


               
     


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*ClashOfKings: {quantidadePaginas: 761, autor: " George R. R. Martin", editora: " Bantam Spectra"}
Prisioneiras: {quantidadePaginas: 232, autor: " Drauzio Varella", editora: " Letra"}
SobrevivendoInferno: {quantidadePaginas: 128, autor: " Racionais MC's", editora: " Bloomsbury Academic"}*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro "+ book("Clash of Kings").titulo + " tem " + book("Clash of Kings").quantidadePaginas + " páginas");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro "+ book("Sobrevivendo no Inferno").titulo + " é " + book("Sobrevivendo no Inferno").autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro " + book("Prisioneiras").titulo + " foi publicado pela editora " + book("Prisioneiras").editora);

