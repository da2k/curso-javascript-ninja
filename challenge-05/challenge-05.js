/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ['Marcelo', 20, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function um ( arg ) {
    return console.log(arg);
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
um( myVar[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function dois ( primeiro, segundo ) {
    return console.log( primeiro[segundo] );
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var segundaVar = ['Javascript Ninja', 2018, null, undefined, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
dois(segundaVar, 0);
dois(segundaVar, 1);
dois(segundaVar, 2);
dois(segundaVar, 3);
dois(segundaVar, 4);

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
function book ( livro ) {
    var caracteristicas = {
        'O vendedor de sonhos' : {
            quantidadePaginas: 212,
            autor: 'Augusto Cury',
            editora: 'Nobel'
        },
        'O poder do habito' : {
            quantidadePaginas: 231,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        },
        'O poder da ação' : {
            quantidadePaginas: 210,
            autor: 'Paulo Vieira',
            editora: 'Gente'
        }
    }
    return livro ?  caracteristicas [livro]  :  caracteristicas  ;
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book ();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro O poder da ação tem ' + book( 'O poder da ação' ).quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro O vendedor de sonhos é ' + book( 'O vendedor de sonhos' ).autor + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro O poder do hábito foi publicado pela editora ' + book( 'O poder do habito' ).editora + '.'