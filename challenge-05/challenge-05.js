/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = ["Danilo", 10, 20, 30, 40]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function recebeArray (parametro) {
    return parametro;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log ( recebeArray (myArray)[1] );
//20

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function agenteDuplo (umArray, umNumero) {
    return umArray[umNumero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var variavelAGrande = ["Danilo", true, false, 26, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log (agenteDuplo (variavelAGrande, 0));
console.log (agenteDuplo (variavelAGrande, 1));
console.log (agenteDuplo (variavelAGrande, 2));
console.log (agenteDuplo (variavelAGrande, 3));
console.log (agenteDuplo (variavelAGrande, 4));


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

function book (titleBook) {
    var livros = {
        "HTML5 e CSS3:guia prático e visual":  {
            quantidadePaginas: 576,
            autor: "Elizabeth Castro & Bruce Hyslop",
            editora: "Alta Books",
        },
        "JavaScript: O Guia Definitivo": {
            quantidadePaginas: 1080, 
            autor: "David Flanagan",
            editora: "BookMan",
        },
        "Eloquent Javascript": {
            quantidadePaginas: 472, 
            autor: "Marijn Haverbeke",
            editora: "No Starch Press",
        }
    }

    return !titleBook ? livros : livros[titleBook];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log (book ());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log ("O livro Eloquente Javascript tem " + book ("Eloquent Javascript").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
 
console.log ("O autor do livro JavaScript: O Guia Definitivo é " + book ("JavaScript: O Guia Definitivo").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log ("O livro HTML5 e CSS3:guia prático e visual foi publicado pela editora " + book ("HTML5 e CSS3:guia prático e visual").editora +".")

/*
