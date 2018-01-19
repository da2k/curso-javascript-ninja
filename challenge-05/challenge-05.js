/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = [5,4,3,2,1];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaVetor(vector) {
    return vector;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaVetor(vetor)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornarIndice(vector, indice) {
    return vector[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetorDiferente = [1, 'abc', null, false, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornarIndice(vetorDiferente, 0);
retornarIndice(vetorDiferente, 1);
retornarIndice(vetorDiferente, 2);
retornarIndice(vetorDiferente, 3);
retornarIndice(vetorDiferente, 4);

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
    var livros = {
        
        'livro1': {
            quantidadePaginas : 10,
            autor : 'fulano',
            editora : 'ursa menor'
        },
        
        'livro2': {
            quantidadePaginas : 20,
            autor : 'fulano2',
            editora : 'ursa menor2'
        },
        
        'livro3': {
            quantidadePaginas : 30,
            autor : 'fulano3',
            editora : 'ursa menor3'
        }
    }

    if (nomeLivro === undefined) {
        return livros;

    } else return livros[nomeLivro];

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
console.log('O livro livro1 tem ' + book('livro1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livro1 é' + book('livro1').autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro2 foi publicado pela editora ' + book('livro2').editora + '.');
