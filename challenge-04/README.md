# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (param) {
    if (param)
        return true;
    else
        return false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(2);
isTruthy(3);
isTruthy(4);
isTruthy(5);
isTruthy(6);
isTruthy(true);
isTruthy('verdadeiro');
isTruthy([1]);
isTruthy({});


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
    marca: "FIAT",
    modelo: "Siena Fire 1.0",
    placa: "123456",
    ano: "2009",
    cor: "Preto",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo() {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo() {
    return "Esse carro é um " + carro.marca + " " + carro.modelo;
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
function addPassageiro(numeroPessoas) {
    if (numeroPessoas) {
        if (carro.quantidadePessoas == 5)
            return "O carro já está lotado!";

        var qtdLugaresVagos = (5 - carro.quantidadePessoas);
        if (numeroPessoas > qtdLugaresVagos)
            return "Só cabem mais " + qtdLugaresVagos + (qtdLugaresVagos === 1 ? " pessoa!" : " pessoas!");

        carro.quantidadePessoas += numeroPessoas;
        return "Já temos " + carro.quantidadePessoas + " pessoas no carro!"
    }
};

function removePassageiro(numeroPessoas) {
    if (numeroPessoas && numeroPessoas < 6) {
        if (numeroPessoas > carro.quantidadePessoas)
            carro.quantidadePessoas = 0;
        else
            carro.quantidadePessoas -= numeroPessoas;

        if(carro.quantidadePessoas === 0)
            return "O carro esta vazio."

        return "Temos " + carro.quantidadePessoas + (carro.quantidadePessoas === 1 ? " pessoa" : " pessoas") + " no carro!";
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor(); // Preto

// Mude a cor do carro para vermelho.
mudarCor('Vermelho');

// E agora, qual a cor do carro?
obterCor(); // Vermelho

// Mude a cor do carro para verde musgo.
mudarCor('Verde musgo');

// E agora, qual a cor do carro?
obterCor(); // Verde musgo

// Qual a marca e modelo do carro?
obterMarca();   //FIAT
obterModelo();  //Siena Fire 1.0

// Adicione 2 pessoas no carro.
addPassageiro(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
addPassageiro(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
addPassageiro(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
removePassageiro(4); // Temos 1 pessoa no carro!

// Adicione 10 pessoas no carro.
addPassageiro(10); // So cabem mais 4 pessoas no carro!

// Quantas pessoas temos no carro?
1
```
