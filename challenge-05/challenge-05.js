/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myVar = ['Juliana', false, 1.71, 'Js Ninja', true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var myFunction = function (array) {
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(myVar[3]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

var recebeArg = function (array, indice) {
    return array[indice];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myArray = [1, true, 'string', {}, 1.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(myArray));

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

function book(nome){
    var livro;
    var livrosLista = {
        harryPotter: {
            quantidadedePaginas:550,
            autor:'J.K Rolling',
            editora:'Rocco'},
        extraordinario: {
            quantidadedePaginas:320,
            autor:'J.R Palacio',
            editora:'Intrinseca'},
        poderDoHabito: {
            quantidadedePaginas:160,
            autor:'Sun Tzu',
            editora:'Jardim Livros'}
    };
    if (nome == 'harryPotter'){
        livro = livrosLista.harryPotter;
    } 
    else if(nome == 'extraordinario'){
        livro = livrosLista.extraordinario;
    }
    else if(nome == 'poderDoHabito'){
        livro = livrosLista.poderDoHabito;
    }
    else {
        livro = livrosLista;
    }
    return livro;
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

console.log("O livro Harry Potter tem " + book('harryPotter').quantidadedePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("A autora de Harry Potter é " + book('harryPotter').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro Harry Potter foi publicado pela editora " + book('harryPotter').editora + ".");