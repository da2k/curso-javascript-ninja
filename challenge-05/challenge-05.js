/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 3, function(){ var terra = earth; return terra; }, { fruit1: 'banana', fruit2: 'apple' }, " 12.", true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log( myFunction(["Terra", 345, true])[1] );  // 345

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunc(a,b) {
    return a[b];
}

myFunc([2,4,6],0) // 2

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr1 = [ 4, function(a,b){ var calc = a + b; return calc; }, { planet1: 'Mars', fruit2: 'Mercury' }, "Matheus", undefined ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc(arr1, 2) // {planet1: "Mars", fruit2: "Mercury"}

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
// function book(livros){
//     var livros =  { 
//         BrancadeNeve:{ 
//             quantidadePaginas: 56 , 
//             autor:" Willian Wood ", 
//             editora: " Cota "
//         },

//         Cinderela:{ 
//             quantidadePaginas: 89, 
//             autor:" Pitolomeu ", 
//             editora: " Saraiva " 
//         },

//         Shrek:{ 
//             quantidadePaginas: 43, 
//             autor:" Jentor ", 
//             editora: " Editorial " 
//         } 
//     }   
//     return livros;
// }

function book(nomelivro){
    var livros =  { 
        'Branca de Neve':{ 
            quantidadePaginas: 56 , 
            autor:" Willian Wood ", 
            editora: " Cota "
        },

        'Cinderela':{ 
            quantidadePaginas: 89, 
            autor:" Pitolomeu ", 
            editora: " Saraiva " 
        },

        'Shrek':{ 
            quantidadePaginas: 43, 
            autor:" Jentor ", 
            editora: " Editorial " 
        } 
    }   
    return !nomelivro ? livros : livros[nomelivro];
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
console.log("O livro Branca de Neve  tem " + book('Branca de Neve').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomelivro = "Branca de Neve";

console.log("O autor do livro " + nomelivro + " é " + book(nomelivro).autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomelivro + " foi publicado pela editora " + book(nomelivro).editora + ".")

