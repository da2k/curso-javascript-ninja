/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const lista = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray (arg)
{
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(lista)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArrayComIndice (array, index)
{
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrayDeMuitosTipos = [1, "string", true, [3,4], {a: 1, b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArrayComIndice(arrayDeMuitosTipos, 0));
console.log(retornaArrayComIndice(arrayDeMuitosTipos, 1));
console.log(retornaArrayComIndice(arrayDeMuitosTipos, 2));
console.log(retornaArrayComIndice(arrayDeMuitosTipos, 3));
console.log(retornaArrayComIndice(arrayDeMuitosTipos, 4));

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
function book (bookName)
{
    const bookObject = 
    {
        "Senhor Dos Anéis: A Sociedade do Anel": 
        {
            quantidadePaginas: 468,
            autor: "J. R. R. Tolkien",
            editora: "Artenova"
        },
        "Harry Potter e a Pedra Filosofal":
        {
            quantidadePaginas: 223,
            autor: "J. K. Rowling",
            editora: "Rocco"
        },
        "Game Of Thrones":
        {
            quantidadePaginas: 592,
            autor: "George R. R. Martin",
            editora: "LeYa"
        }
    }
    return !!bookName ? bookObject[bookName] : bookObject;
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
// Serei um pouco ousado agora professor Fernando, usarei o recurso para literals para  inserir o conteúdo
// das variáveis diretamente nas strings melhorando a leitura sem concatenação usando o sinal de +.
// Espero que não seja um empecilho.
const book1 = "Senhor Dos Anéis: A Sociedade do Anel";
console.log(`O livro ${book1} tem ${book(book1).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const book2 = "Game Of Thrones";
console.log(`O autor do livro ${book2} é ${book(book2).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const book3 = "Harry Potter e a Pedra Filosofal";
console.log(`O livro ${book3} foi publicado pela editora ${book(book3).editora}.`);