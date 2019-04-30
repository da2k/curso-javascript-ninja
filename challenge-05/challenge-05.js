/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var dados = [2,60,"texto",null,undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function pegaDados(dados){
    return dados;
}
pegaDados(dados); //[ 2, 60, 20, 30, 40 ]

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
pegaDados(dados[1]); //60

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function parns(dadosValores,valor1){
    return dadosValores[valor1];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = [false,20,"ednaldo",null,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
parns(valores,1);

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
function book(Nomelivro){
    var livros = {
        jobs:{
            quantidadePaginas: 100,
            autor: "bruno",
            editora: "abril"
        },
        einstein:{
            quantidadePaginas: 200,
            autor: "julio",
            editora: "veja"
        },
        pabloPicasso:{
            quantidadePaginas: 300,
            autor: "ana",
            editora: "globo"
        }
    }
    if(Nomelivro == livros.jobs){
        return livros.jobs
    }else if(Nomelivro == livros.einstein){
        return livros.einstein
    }else if(Nomelivro == livros.pabloPicasso){
        return livros.pabloPicasso
    }else{
        return Nomelivro;
    }
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(livros)

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book("O livro " + "jobs" + " tem " + livros.jobs.quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book("O autor do livro " + "jobs" + " é " + livros.jobs.autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book("O livro " + "jobs" + " foi publicado pela editora " + livros.jobs.editora)