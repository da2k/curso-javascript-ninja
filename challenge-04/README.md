# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isThruthy = function(result) {
    return result ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isThruthy(0);
isThruthy('');
isThruthy(undefined);
isThruthy(null);
isThruthy(NaN);
isThruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isThruthy('string');
isThruthy(true);
isThruthy({});
isThruthy([]);
isThruthy(function a() { return 'a'});

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
    marca: 'Fiat',
    modelo: 'Palio',
    placa: 'ABC 1234',
    ano: '2018',
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;
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
carro.adicionarPessoas = function(qntPessoas) {

    var totalPessoas = carro.quantidadePessoas + qntPessoas;
     
    if(carro.quantidadePessoas === carro.assentos) {
        return `O carro está lotado!`
    }
    
    if(totalPessoas > carro.assentos) {
        var lugares = carro.assentos - carro.quantidadePessoas;
        return `Só há lugar para ${lugares} ${isPlural(lugares, 'pessoa')} no carro!`
    }
    
    carro.quantidadePessoas += qntPessoas;

    return `Já temos ${totalPessoas} ${isPlural(totalPessoas, 'pessoa')} no carro`;
}

// Função para verificar se é plural
var isPlural = function(obj, palavra) {
        return obj !== 1 ? palavra + 's' : palavra;
    }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // preto

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //"Esse carro é um Fiat Palio"

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // "Já temos 2 pessoas no carro"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // "Só há lugar para 3 pessoas no carro!"

// Faça o carro encher.
carro.adicionarPessoas(3); // "Já temos 5 pessoas no carro"

// Tire 4 pessoas do carro.
carro.removerPessoas = function(qntPessoas) {

    if(carro.quantidadePessoas === 0) {
        return `O carro está vazio!`;
    }

    if(qntPessoas > carro.quantidadePessoas) {
        return `Podemos remover somente ${carro.quantidadePessoas} ${isPlural(carro.quantidadePessoas, 'pessoa')} do carro!`;
    }

    if(qntPessoas <= carro.quantidadePessoas) {
        carro.quantidadePessoas -= qntPessoas;
        return `${qntPessoas} ${isPlural(qntPessoas, 'pessoa')} ${isPlural(qntPessoas, 'removida')}! Agora temos ${carro.quantidadePessoas} ${isPlural(carro.quantidadePessoas, 'pessoa')} no carro`;
    }

};

carro.removerPessoas(4); // "4 pessoas removidas! Agora temos 1 pessoa no carro"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // "Só há lugar para 4 pessoas no carro!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1

```
