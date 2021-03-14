/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = ["ovo", 2, 3.45, false, 'n'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornar(vetorParametro){
    return vetorParametro;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornar(vetor)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarDadoMatriz(vetor, indice){
    return vetor[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetorDois = ["pão", 1, 2.56, false, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornarDadoMatriz(vetorDois,0)
retornarDadoMatriz(vetorDois,1)
retornarDadoMatriz(vetorDois,2)
retornarDadoMatriz(vetorDois,3)
retornarDadoMatriz(vetorDois,4)

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
function book(nomeDoLivro){
    var livro = {

        Nineteen_Eighty_Four: {
            quantidadePaginas: 343,
            autor: "George Orwell",
            editora: "Secker and Warburg, Londres",
        },

        The_Lion_The_Witch_and_the_Wardrobe: {
            quantidadePaginas: 133,
            autor: "C. S. Lewis",
            editora: "Martins Fontes",
        },

        livro_teste:{
            quantidadePaginas: 300,
            autor: "Autor Teste",
            editora: "Editora Teste",
        },

    };

    if(nomeDoLivro == 'Nineteen_Eighty_Four'){
        return livro.Nineteen_Eighty_Four;

    } else if (nomeDoLivro == 'The_Lion_The_Witch_and_the_Wardrobe'){
        return livro.The_Lion_The_Witch_and_the_Wardrobe;

    } else if (nomeDoLivro == 'livro_teste'){
        return livro.livro_teste;

    } else if (nomeDoLivro == undefined){
        return livro;

    } else{
        return 'Este livro não foi encontrado';

    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Nineteen Eighty Four tem ${book('Nineteen_Eighty_Four').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Nineteen Eighty Four é ${book('Nineteen_Eighty_Four').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Nineteen Eighty Four foi publicado pela editora ${book('Nineteen_Eighty_Four').editora}.`)
