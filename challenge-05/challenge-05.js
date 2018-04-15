/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarr = [1,'jogo',true,10.5,null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArrFun(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArrFun(myarr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mostraAlgumIndiceArray(arr,num){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresArray = ['string', true, 10, null , undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(mostraAlgumIndiceArray(valoresArray,0));
console.log(mostraAlgumIndiceArray(valoresArray,1));
console.log(mostraAlgumIndiceArray(valoresArray,2));
console.log(mostraAlgumIndiceArray(valoresArray,3));
console.log(mostraAlgumIndiceArray(valoresArray,4));

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
function book (titulo){
    var objeto = {
        livro01 : {
            quantidadePaginas: 100,
            autor: 'ivo',
            editora: 'pro'
        },
        livro02 : {
            quantidadePaginas: 200,
            autor: 'rui',
            editora: 'mimos'
        },
        livro03 : {
            quantidadePaginas: 100,
            autor: 'mel',
            editora: 'sino'
        }
    };

    if(!titulo){
        return objeto;
    }

    return objeto[titulo];
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
console.log("O livro livro01 tem "+ book('livro01').quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro01 é " + book('livro01').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livro01 foi publicado pela editora "+ book('livro01').editora);
