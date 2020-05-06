/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
let array =[1,'texto', true, 90, '0', false];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function arrayFunction(arr){
    return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
console.log(arrayFunction(array)[1]); //texto

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
function arrayWithParameterFunction(arr,num){
    return num ? arr[num] : arr;
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 
let array2 = [1,'um',false,{tipo: 'objeto',teste:true},null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
console.log('Function 2: ', arrayWithParameterFunction(array2));
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
// 
function book(bookName, author = false, qtdPg = false, edit = false){
    let biblioteca = {
        'Auto da Compadecida':{
            quantidadePaginas: 208,
            autor: 'Ariano Suassuna',
            editora: 'Nova Fronteira'
        },
        'Macunaíma':{
            quantidadePaginas: 192,
            autor: 'Mário de Andrade',
            editora: 'Lafonte'
        },
        'O Sítio do Picapau Amarelo':{
            quantidadePaginas: 150,
            autor: 'Monteiro Lobato',
            editora: 'Brasiliense'
        }
    }
    for(let livro in biblioteca){
        if (bookName && livro.toLowerCase()===bookName.toLowerCase()){
            if(author){
                return `O autor do livro ${livro} é ${biblioteca[livro].autor}.`
            }
            if(qtdPg){
                return `O livro ${livro} tem ${biblioteca[livro].quantidadePaginas} páginas!`
            }
            if(edit){
                return `O livro ${livro} foi publicado pela editora ${biblioteca[livro].editora}.`
            }
            return `Livro: ${livro} | Quantidade de páginas: ${biblioteca[livro].quantidadePaginas} - Autor: ${biblioteca[livro].autor} - Editora: ${biblioteca[livro].editora}`;
        }
    }
    return biblioteca;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// 
console.log(book('O Sítio do Picapau Amarelo',false,true)); // O livro O Sítio do Picapau Amarelo tem 150 páginas!
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
console.log(book('O Sítio do Picapau Amarelo',true)); // O autor do livro O Sítio do Picapau Amarelo é Monteiro Lobato.
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 
console.log(book('O sítio do Picapau Amarelo',false,false,true)); // O livro O Sítio do Picapau Amarelo foi publicado pela editora Brasiliense.
