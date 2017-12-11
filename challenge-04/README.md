# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (parameter) {
    return parameter ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy('');
isTruthy("");
isTruthy(undefined);
isTruthy(NaN);
isTruthy(null);
isTruthy(0);
isTruthy(-0);
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTrhuthy('0');
isTruthy(10);
isTruthy('marcelo');
isTruthy(true);
isTruthy('js');
isTruthy([]);
isTruthy({});
isTruthy('truthy');
isTruthy('falsy');
isTruthy('ten');

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
    marca: 'Peugeot',
    modelo: '208',
    placa: 'MVP1982',
    ano: 2015,
    cor: 'branco',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (novaCor) {
    this.cor = novaCor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
    return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    var marca = this.obterMarca();
    var modelo = this.obterModelo();
    return 'Esse carro é um ' + marca + ' ' + modelo;
};

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
carro.adicionarPessoas = function (pessoas) {

    var numInicial = this.quantidadePessoas;
    var numFinal = numInicial + pessoas;
    var numMax = this.assentos;
    var singularOuPlural = 'pessoas';

    if (numInicial === numMax && pessoas >= 1) {
        return 'O carro já está lotado!';
    }
    else if (numFinal > numMax) {
        var quantidadeMax = numMax - numInicial;
        if (quantidadeMax === 1) {
            singularOuPlural = 'pessoa';
        }
        return 'Só cabem mais ' + quantidadeMax + ' ' + singularOuPlural + '!';
    }
    else {
        this.quantidadePessoas = numFinal;
        return 'Já temos ' + numFinal + ' pessoas no carro!';
    }

};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // branco

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // Esse carro é um Peugeot 208

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.adicionarPessoas(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // Já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
```
