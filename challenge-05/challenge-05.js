/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var teste = [7, 4, 21, 12];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcaoTeste(x) {
    return x;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcaoTeste(teste)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myArray = [21, 3, 5];
function minhaFuncao(arr, i) {
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = [2, 'Stefanie', true, 5, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(minhaFuncao(myVar, 0));
console.log(minhaFuncao(myVar, 1));
console.log(minhaFuncao(myVar, 2));
console.log(minhaFuncao(myVar, 3));
console.log(minhaFuncao(myVar, 4));
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
    var livros = {
        'Javascript: O Guia Definitivo': {
            quantidadePaginas: 650,
            autor: 'David Flanagan',
            editora: 'OReilly'
        },
        'Segredos do Ninja Javascript': {
            quantidadePaginas: 350,
            autor: 'John Resig e Bear Bibeault',
            editora: 'Novatec'
        },
        'Javascript e Jquery': {
            quantidadePaginas: 245,
            autor: 'Jon Duckett',
            editora: 'Pitagoras'
        }
    }
    if (nome) {
        return livros[nome];
    } else {
        return livros;
    }
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
var bookName = 'Javascript: O Guia Definitivo';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName +  ' é ' + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName +  ' foi publicado pela editora ' + book(bookName).editora);
