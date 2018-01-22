/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [1, 'pastel', 3, 4, 'pontos'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(value) {
    return value;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getArrayIndex(value, index) {
    return value[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = ['sempre', 'nunca', 'talvez', 12, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArrayIndex(otherArray, 0));
console.log(getArrayIndex(otherArray, 1));
console.log(getArrayIndex(otherArray, 2));
console.log(getArrayIndex(otherArray, 3));
console.log(getArrayIndex(otherArray, 4));

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
function book(nome) {
    var estante = {
        "it, a coisa": {
            quantidadePaginas: 300,
            autor: 'Rei Stive',
            editora: 'Amazon'
        },
        "como pastel": {
            quantidadePaginas: 255,
            autor: 'Fabio',
            editora: 'Excel'
        },
        "sem pressa de correr": {
            quantidadePaginas: 22,
            autor: 'Usain Bolt',
            editora: 'Correndo na Chuva'
        }
    }
    if (!nome) {
        return estante;
    }
    return estante[nome];
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
var nome = "it, a coisa";
console.log('O livro ' + nome + ' tem ' + book(nome).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nome + ' é ' + book(nome).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nome + ' foi publicado pela editora ' + book(nome).editora);
