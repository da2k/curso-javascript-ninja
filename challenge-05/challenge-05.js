/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var recebe =['arroz',
1,
null,
true,
1.83];
 
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(recebe){
    return recebe;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(minhaFuncao(recebe)[1] ) ;

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function receber(arrayval,num){
    return arrayval[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array =['cachorro',1, 'casa',false,1.83];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(receber (array, 0));
console.log(receber (array, 1));
console.log(receber (array, 2));
console.log(receber (array, 3));
console.log(receber (array, 4));

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
function book(nomeLivro){
    var livros ={
            'Dracula': {
             quantidadePaginas: 380,
             autor: 'Bram Stoker',
             editora: 'Landmark'
            },
            'Assasinato na casa do pastor': {
                quantidadePaginas: 520,
                autor: 'Agatha Cristhie',
                editora:'Record'
            },
            'Senhor dos aneis': {
                quantidadePaginas:1022,
                autor: 'Tolkien',
                editora: 'linfe'
            }
    };
    return !nomeLivro ? livros : livros[nomeLivro];
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
console.log('O livro Senhor dos aneis tem ' + book('Senhor dos aneis').quantidadePaginas + 'páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Dracula é '+ book('Dracula').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Draculo foi publicado pela editora '+book('Dracula').editora)
