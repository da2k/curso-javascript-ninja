# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
?

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
?

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
?

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
?

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
?

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
?

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var vetor =  [ "matriz" ,"vetor de vetor", 1 , 2 ,3]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function returnArray(arg){
    return arg;
 };


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(vetor[1]); // "vetor de vetor"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/


 function twoParam ( param1 , param2 ) {
      param2 = param1;
      return param1;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array =["value" , [1], null, 1,false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

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
function book(nomeDoLivro) {
    var livro ={
        senhorDosAneis: {
            quantidadePaginas: 1212,
            autor: "J. R. R. Tolkien",
            editora: "Martins Fontes"
        },
        oSilmarillion:{
            quantidadePaginas: 480,
            autor: "J. R. R. Tolkien",
            editora: "Martins Fontes"
        },
        oHobbit:{
             quantidadePaginas: 328,
             autor: "J. R. R. Tolkien",
             editora: "Martins Fontes"
        }
    };
    return ivro;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
booK();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book();

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?