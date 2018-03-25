/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var ninja = ['Santos', 'São Vicente', 'Três Lagoas', 'Campinas', 'Mogi-Guaçu', 'Hortolândia', 'Jagiariúna'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var funcaoNinja = function(arr){
    return arr;
} 

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcaoNinja(ninja)[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var funcaoArray = function (arr, index){
    return arr[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['Teste', 3, true, { nome: 'Deni', idade: 21 }, 4.2];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funcaoArray(valores, 0));
console.log(funcaoArray(valores, 1));
console.log(funcaoArray(valores, 2));
console.log(funcaoArray(valores, 3));
console.log(funcaoArray(valores, 4));

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
var book = function(nome){

    var livro = {
        'Inferno':{
            'quantidadePaginas': 549,
            'autor': 'Dan Brown',
            'editora': 'Sextante'
        },
        'A Zona Morta':{
            'quantidadePaginas': 320,
            'autor': 'Stephen King',
            'editora': 'Nova'
        },
        'O Alquimista':{
            'quantidadePaginas': 132,
            'autor': 'Paulo Coelho',
            'editora': 'Abril'
        }
    };

    if (typeof nome == 'undefined'){
        return livro;
    }
    return livro[nome]; 
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
console.log('O livro Inferno tem '+ book('Inferno').quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro A Zona Morta é '+ book('A Zona Morta').autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Alquimista foi publicado pela editora '+book('O Alquimista').editora+'.');
