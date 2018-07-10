/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [5, "Vinicius", null, 0, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getValorIndice(arr, i) {
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var testArray = [2.7, "abc", undefined, NaN, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var i=0; i<=4; i++) {
    console.log(getValorIndice(testArray, i));
};

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
function book(nomeLivro) {
    var livros = {
        /*PercyJackson: {
            quantidadePaginas: 100,
            autor: 'Vinicius',
            editora: 'Nem Eu Sei'
        },
        HarryPotter: {
            quantidadePaginas: 53,
            autor: 'Pedro',
            editora: 'Sei Lá'
        },
        TheHungerGames: {
            quantidadePaginas: 172,
            autor: 'Nicole',
            editora: 'PJO-THG-HP'
        }*/

        //O nome da propriedade pode ser string, assim é possível colocar espaços para os nomes dos livros.
        'Percy Jackson': {
            quantidadePaginas: 100,
            autor: 'Vinicius',
            editora: 'Nem Eu Sei'
        },
        'Harry Potter': {
            quantidadePaginas: 53,
            autor: 'Pedro',
            editora: 'Sei Lá'
        },
        'The Hunger Games': {
            quantidadePaginas: 172,
            autor: 'Nicole',
            editora: 'PJO-THG-HP'
        }
    }
    var retorno;

    //! (NOT) - Retorna false se a operação única pode ser convertida para true, se não puder, retorna true;
    if (!nomeLivro) {
        retorno = livros;
    }
    else {
        /*Sempre que não souber nome da propriedade de um objeto, ou o nome da propriedade do objeto for string, 
        deve usar a notação de array: obj[propriedade] ou obj['propriedade'].*/
        if (!livros[nomeLivro]) {
            retorno = "Este livro não existe!";
        }
        else {
            retorno = livros[nomeLivro];
        }
    }
    return retorno;

    //return !nomeLivro ? livros : !livros[nomeLivro] ? "Este livro não existe!" : livros[nomeLivro];
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
console.log("O livro Percy Jackson tem " + book('Percy Jackson').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Harry Potter é " + book('Harry Potter').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro The Hunger Games foi publicado pela editora " + book('The Hunger Games').editora + ".");
