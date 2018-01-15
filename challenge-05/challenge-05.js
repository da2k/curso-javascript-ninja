/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var list = [ 2, 4, "dani", true, 10 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arg){

    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(list)[1]); 


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunction2(arr, index){
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var list2 = [1, true, "dani", [2,3], {a:1, b:2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(list2, 0));
console.log(myFunction2(list2, 1));
console.log(myFunction2(list2, 2));
console.log(myFunction2(list2, 3));
console.log(myFunction2(list2, 4));


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
function book(nome){
    var books = {
        "Livro 1":{
            quantidadePaginas: 100,
            autor: "Dani",
            editora: "seilabooks"
        },
        "Livro 2":{
            quantidadePaginas: 200,
            autor: "Daniaagag",
            editora: "seilabooksaaa"
        },
        "Livro 3":{
            quantidadePaginas: 345,
            autor: "Daniaoijsd",
            editora: "seilabooksaios"
        }
    };

    return !nome ? books : books[nome];
}   
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeBook = "Livro 1";
console.log("O livro " +  nomeBook +  " tem " + book(nomeBook).quantidadePaginas + " páginas.");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do " + nomeBook  + " é " + book(nomeBook).autor + ".");



/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeBook + " foi publicado pela editora " + book(
      nomeBook).editora +

  ".");

