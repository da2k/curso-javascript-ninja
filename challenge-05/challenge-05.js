/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [2023, 'Cris' , true, 'CursoJSNinja', 123, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function qualquerFuncao(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(qualquerFuncao(meuArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function segundaFuncao(array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var segundoArray = ['Pereira' , 28, {a: 'CursoJSNinja'}, [2021, 2022, 2023], true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(segundaFuncao(segundoArray, 0));
console.log(segundaFuncao(segundoArray, 1));
console.log(segundaFuncao(segundoArray, 2));
console.log(segundaFuncao(segundoArray, 3));
console.log(segundaFuncao(segundoArray, 4));

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
function book(bookName){
    var trilogiaLivros = {
        'O inferno de Gabriel': {
            quantidadePaginas: 512,
            autor: 'SYLVAIN REYNARD',
            editora: 'EDITORA ARQUEIRO'
        },
        
        'O julgamento de Gabriel': {
            quantidadePaginas: 384,
            autor: 'SYLVAIN REYNARD',
            editora: 'EDITORA ARQUEIRO'
        },

        'A redenção de Gabriel': {
            quantidadePaginas: 432,
            autor: 'SYLVAIN REYNARD',
            editora: 'EDITORA ARQUEIRO'
        }
    };

    if( !bookName){
        return trilogiaLivros;
    }

    return trilogiaLivros[bookName];
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
console.log("O livro O inferno de Gabriel tem " + book('O inferno de Gabriel').quantidadePaginas + " páginas.")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'O julgamento de Gabriel';
console.log("O autor do livro " + bookName +" é " + book(bookName).autor + ".")


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName +" foi publicado pela editora " + book(bookName).editora + ".")

