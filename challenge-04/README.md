# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (valor){
    var comparacao = valor ? true : false;
    return comparacao;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(1)
isTruthy(0)
isTruthy('')
isTruthy('a')


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(!true)
isTruthy(!1)
isTruthy(!false)
isTruthy(!!true)
isTruthy(!!0)
isTruthy(!!2)
isTruthy(!!'fernando')
isTruthy(!'')
isTruthy(!!'')
isTruthy(!!'')



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
var carro = {
    marca: 'honda',
    modelo: 'Civic',
    placa: 'faf1349',
    ano: 2012,
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(corCarro){
    carro.cor = corCarro;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function(){
    carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
    carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
    carro.marca
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
    return "Esse carro é um " + carro.marca + " " + carro.modelo;
}

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
var adicionarPessoas = function(pessoas) {
    carro.quantidadePessoas += pessoas;
    if (carro.quantidadePessoas === 5){
        return "O carro já está lotado!";
    }
    if(pessoas > carro.quantidadePessoas){
        var valor = pessoas - carro.quantidadePessoas;
        var pText = "pessoas"
        if(valor === 1){
            pText = " pessoa";
        }
        return "Só cabem mais" + valor + pText + "!"
    }
    return "Já temos " + pessoas + " pessoas no carro!"
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor //'preto'

// Mude a cor do carro para vermelho.
mudarCor("vermelho")

// E agora, qual a cor do carro?
//'vermelho'

// Mude a cor do carro para verde musgo.
 mudarCor("verde musgo")

// E agora, qual a cor do carro?
//'verde musgo'

// Qual a marca e modelo do carro?

carro.marca //'honda'
carro.modelo //'Civic'

// Adicione 2 pessoas no carro.
adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
adicionarPessoas(4);

// Faça o carro encher.
adicionarPessoas(5);

// Tire 4 pessoas do carro.
adicionarPessoas(carro.quantidadePessoas - 4);

// Adicione 10 pessoas no carro.
adicionarPessoas(10);

// Quantas pessoas temos no carro?
// 16
```
