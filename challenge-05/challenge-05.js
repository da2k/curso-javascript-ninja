/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var minhaArray = ['Melissa', 'Moreira', 25, 07, 1989];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray([5,10,15,20,25])[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayNum(arr,num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = ['Melissa','Moreira', 28, true, 1989];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayNum(arr,0);        //"Melissa"
arrayNum(arr,1);        //"Moreira"
arrayNum(arr,2);        //28
arrayNum(arr,3);        //true
arrayNum(arr,4);        //1989

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
        "The Demon-Haunted World" : {
            "quantidadePaginas" : 457,
                        "autor" : "Carl Sagan",
                      "editora" : "Random House"
        },
        "A Brief History of Time:From the Big Bang to Black Holes" : {
            "quantidadePaginas" : 256,
                        "autor" : "Stephen Hawking",
                      "editora" : "Bantam Dell Publising Group"
        },
        "Sapiens: A Brief History of Humankind" : {
            "quantidadePaginas" : 443,
                        "autor" : "Yuval Noah Harari",
                      "editora" : "Harper"
        }
    }

    if (!nomeLivro) {
        return livros;
    }

    return livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*
     {  'The Demon-Haunted World':
        { quantidadePaginas: 457,
            autor: 'Carl Sagan',
            editora: 'Random House' },
        'A Brief History of Time:From the Big Bang to Black Holes':
        { quantidadePaginas: 256,
            autor: 'Stephen Hawking',
            editora: 'Bantam Dell Publising Group' },
        'Sapiens: A Brief History of Humankind':
        { quantidadePaginas: 443,
            autor: 'Yuval Noah Harari',
            editora: 'Harper' }  }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro "The Demon-Haunted World" tem '+book('The Demon-Haunted World')['quantidadePaginas']+' páginas!';

//'O livro "The Demon-Haunted World" tem 457 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro "The Demon-Haunted World" é '+ book('The Demon-Haunted World')['autor']+'.';

//'O autor do livro "The Demon-Haunted World" é Carl Sagan.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

'O livro "The Demon-Haunted World" foi publicado pela editora '+ book('The Demon-Haunted World')['editora']+'.';

//'O livro "The Demon-Haunted World" foi publicado pela editora Random House.'