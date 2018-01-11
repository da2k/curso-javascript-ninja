/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var meuArray = ['curso', 2018, true, false, '18:48'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

returnArray(meuArray)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function returnIndiceArray(array, indice){
    return array[indice];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

newArray = ['Feliz ano novo', 2018, true, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

returnArray(newArray);

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
    var livros = {
        'guiajavascript': {
            quantidadePaginas: 599,
            autor: 'Maurício Samy Silva',
            editora: 'Novatec'
        },
        'segredosninjajavascript': {
            quantidadePaginas: 488,
            autor: 'John Resig',
            editora: 'Novatec'
        },
        'mean': {
            quantidadePaginas: 584,
            autor: 'Simon Holmes',
            editora: 'Novatec'
        }  
    };

    return !nome ? livros : livros[nome];
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

var nomelivro = "MEAN";
console.log("O Livro " + nomelivro + " tem " + book('mean').quantidadePaginas + " páginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var nomelivro2 = "Guia Javascript";
console.log("O autor do livro " + nomelivro2 + " é a " + book('guiajavascript').autor +"."); 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var nomelivro3 = "Segredos do Ninja Javascript";
console.log("O livro " + nomelivro3 + " foi publicado pela editora " + book('segredosninjajavascript').editora + ".");