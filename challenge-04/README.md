# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = checkParam(parametro){
    return parametro ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(null);
isTruthy(undefined);
isTruthy(false);
isTruthy('');
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy('testeteasdfasdf');
isTruthy('a');
isTruthy([]);
isTruthy({});
isTruthy(function() {});
isTruthy(5);
isTruthy(10 * 2);
isTruthy(2 / 2);

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

var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
    mudaCor: function(novaCor){
        return this.cor = novaCor;
    }
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
    mudaCor: function(novaCor){
        return this.cor = novaCor;
    },
    obterCor: function() {
        return this.cor;
    }
};
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
    mudaCor: function(novaCor){
        return this.cor = novaCor;
    },
    obterCor: function() {
        return this.cor;
    },
    obterModelo: function(){
        return this.modelo;
    }
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
    mudaCor: function(novaCor){
        return this.cor = novaCor;
    },
    obterCor: function() {
        return this.cor;
    },
    obterModelo: function(){
        return this.modelo;
    },
    obterMarca: function(){
        return this.cor;
    }
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var carro = 
{
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
    mudaCor: function(novaCor){
        return this.cor = novaCor;
    },
    obterCor: function() {
        return this.cor;
    },
    obterModelo: function(){
        return this.modelo;
    },
    obterMarca: function(){
        return this.cor;
    },
    obterMarcaModelo: function(){
        return 'Este carro é um ' + this.marca + ' ' + this.modelo+ '.';
    }
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!" - OK
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
var carro = {
    marca: 'Honda',
    modelo: 'Civc',
    placa: 'BABA-2122',
    ano: 2016,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
    mudaCor: function(novaCor) {
        this.cor = novaCor;
    },
    obterCor: function () {
        return this.cor;
    },
    obterModelo: function () {
        return this.modelo;
    },
    obterMarca: function () {
        return this.cor;
    },
    obterMarcaModelo: function () {
        return 'Este carro é um ' + this.marca + ' ' + this.modelo+ '.';
    },
    adicionarPessoas: function (pessoas){
        
        var totalPessoas = this.quantidadePessoas + pessoas;

        if(this.quantidadePessoas === this.assentos)
        {
            return 'O carro já está lotado.';
        }

        if(totalPessoas > this.assentos)
        {
           var numVagas = this.assentos - this.quantidadePessoas;
           var tipo = numVagas === 1 ? 'pessoa' : 'pessoas';

           return 'Só cabem mais ' + numVagas + tipo + '!';
        }

        this.quantidadePessoas += pessoas;
        return 'Já temos ' + this.quantidadePessoas + ' no carro.';
    }
};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();

// Mude a cor do carro para vermelho.
carro.mudaCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); //vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //Este carro é um Civic honda

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); //"Só cabem mais 3pessoas!"

// Faça o carro encher.
carro.adicionarPessoas(3); //"Já temos 5 no carro."

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); //"O carro já está lotado."

```
