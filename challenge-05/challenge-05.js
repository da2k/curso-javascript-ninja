/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arrVal = ['banana', 'maçã', 'mamão', 'uva', 'laranja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArr(arg) {
    let arr = arg;
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebeArr(arrVal[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function valIndice(arg1, arg2) {
    let arr = arg1;
    let indice = arg2;

    return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let valDiferente = ['uva', true, 3, {}, function () {}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
valIndice(valDiferente,0);
valIndice(valDiferente,1);
valIndice(valDiferente,2);
valIndice(valDiferente,3);
valIndice(valDiferente,4);

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
let nomeLivro = 'Aprendendo C';

function book(arg) {
    let nomeLivro = arg;

    let listaLivros = {
        'Aprendendo Javascript': {
            'quantidadePaginas': 300,
            'autor': 'Fabricio Queiroz',
            'editora': 'Aprender'
        },

        'Aprendendo C':{
            'quantidadePaginas': 100,
            'autor': 'Rafael Pereira',
            'editora': 'Aprender'
        },
        
        'Aprendendo Java': {
            'quantidadePaginas': 250,
            'autor': 'Priscilla Hunz',
            'editora': 'Aprender'
        } 
    };
    
    return !nomeLivro ? listaLivros : listaLivros[nomeLivro];
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
`O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas!`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}.`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}.`
