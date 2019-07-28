/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 50, 88, 7, 98, 120, 14];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

var printList = function(list) {
    return list;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
printList(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var values = function(list, num) {
    return list[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['hahaha', 15, true, [1,2], 5.106];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i=0; i < arr2.length; i++) {
    console.log(values(arr2, i));
}

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
var book = function(bookName)
{ //achei a descrição do exercício confusa

    var list = {
        'Silvio Santos Vem Aí': {
                quantidadePaginas: 500,
                autor: "Plutônio Xenônio Argônio",
                editora: "ErreideTV"
        },
        'Oh my God they killed Kenny': {
            quantidadePaginas: 68,
            autor: "Cartman Smith Jr",
            editora: "MTVbooks"
        },
        'Mafi Osa': {
            quantidadePaginas: 150,
            autor: "Carmen San Diego",
            editora: "Gambino"
        },
        'Receitas da tia Nena': {
            quantidadePaginas: 135,
            autor: "Magali",
            editora: "Panini"
        }        
    };

    if(bookName) {
        return list[bookName];
    }
    
    return list;
    
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
var silvio ='Silvio Santos Vem Aí';
var livroDoSilvio = book(silvio);
console.log("O livro "+ silvio +" tem "+ livroDoSilvio.quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+ silvio +" é "+ livroDoSilvio.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+ silvio +" é "+ livroDoSilvio.editora);
