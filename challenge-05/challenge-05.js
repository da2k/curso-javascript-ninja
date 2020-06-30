/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array2 = [ 1, 'ianca', true, null,{b:2} ];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function meuArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(meuArray(array2)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function meuArray2(array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['vic',{g:54}, [0,1],42.9,null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

 console.log(meuArray2(array2, 0));
 console.log(meuArray2(array2, 1));
 console.log(meuArray2(array2, 2));
 console.log(meuArray2(array2, 3));
 console.log(meuArray2(array2, 4));
    


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
function book(nome){
    var livros = {
        livro1: {
            quantidadePaginas: 2,
            autor: 'joão',
            editora: 'Abril'
        },
        livro2: {
            quantidadePaginas,
            autor,
            editora
        },
        livro3: {
            quantidadePaginas,
            autor,
            editora
        }
    }

    var encontrado = livros[nome];

    if (encontrado) {
        return encontrado;
    }

    return livros;
};

/*PARTE DOIS AULA*/
function book(bookName) {
    var objeto = {
       'Maria e João':{
           quantidadePaginas: 545,
           autor:'Antonio Silva',
          editora:'Brasil',
       },
       'Gato Mimado':{
        quantidadePaginas: 584,
        autor:'Leonadro Santos',
       editora:'São Paulo Tec',
       },
        'Pedro e Thiago':{
            quantidadePaginas:682,
            autor:'Mario Corvas',
           editora:'Kilomais',
        }


    }

} ;

return!bookName ? objeto : objeto[bookName];

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName ='Maria e João';
console.log("O livro + bookName + tem " + book( bookName ).quantidadePaginas + "páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro" + bookName +  " é " + book(bookName).autor +".");
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro" + bookName +  " foi publicado pela editora " + book(bookName).editora +".");
