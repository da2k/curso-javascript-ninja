/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var buracoNegro = ['física', 3.1415, NaN, undefined, function() { return null; }];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornarArray(buracoNegro)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(arrayUm, arrayDois) {
    return arrayUm[arrayDois];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var caixa = ['livro', 0, null, {}, [0, 0, 0]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
doisParametros(caixa, 0);
doisParametros(caixa, 1);
doisParametros(caixa, 2);
doisParametros(caixa, 3);
doisParametros(caixa, 4);

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
function book(nomeDoLivro){

    var catalogo = {
        oCaminhoDosReis: {
            quantidadeDePaginas: 1200,
            autor: "Brandon Sanderson",
            editora: "Trama"
        },
        annaKarienina: {
            quantidadeDePaginas: 850,
            autor: "Liev Tolstoi",
            editora: "Companhia das Letras"
        },
        oCeifador: {
            quantidadeDePaginas: 400,
            autor: "Neal Shusterman",
            editora: "Seguinte"
        }
    };

    if(nomeDoLivro === undefined){
        return catalogo;
    }

    return catalogo[nomeDoLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro O Caminho dos Reis tem " + book()["oCaminhoDosReis"]["quantidadeDePaginas"] + " páginas!"; 
// não consegui retornar o nome no livro(propriedade) como string visto que eles recebm objetos.

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro O Ceifador é " + book()["oCeifador"]["autor"] + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro Anna Karienina foi publicado pela editora " + book()["annaKarienina"]["editora"] + ".";
