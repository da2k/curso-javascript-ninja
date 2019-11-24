/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['Menandro', 43, 105, 1.78, 'Analista de Sistemas'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var minhaFuncao = function(arg){ 
    return arg
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(minhaFuncao(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var minhaFuncaoComDoisParametros = function(vetor, indice){
    return indice !== undefined ? vetor[indice] : vetor;
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var minhaVariavelTiposDiferentes = [
    'string', 
    1.9, 
    8, 
    ['arrayInterno', 'texto', 5],
    function(){},
    {
        nome: 'Menandro Neto', 
        peso: 105,
        altura: 1.78
    }
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(minhaFuncaoComDoisParametros(minhaVariavelTiposDiferentes));

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
var book = function(nomeLivro){
    var livros = {
        Biblia: {
            quantidadePaginas: 10000,
            autor: 'jeová',
            editora: 'catolica'
        },
        Alcorao: {
            quantidadePaginas: 10000,
            autor: 'alah',
            editora: 'mulçumana'
        },
        Tora: {
            quantidadePaginas: 10000,
            autor: 'yahweh',
            editora: 'judeu'
        }
    };

    if (nomeLivro === undefined) {
        return livros;
    }
    else if (nomeLivro === 'biblia'){
        return livros.Biblia;
    }
    else if (nomeLivro === 'alcorao'){
        return livros.Alcorao;
    }
    else if (nomeLivro === 'tora'){
        return livros.Tora;
    }
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
    'O livro Biblia tem ' + book('biblia').quantidadePaginas + ' paginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
    'O livro Biblia tem ' + book('biblia').autor + ' paginas!'
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
    'O livro Biblia foi publicado pela editora ' + book('biblia').editora + '.'
);
