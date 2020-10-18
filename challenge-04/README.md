# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function newFunction(a){
    if(a){
        return true;
    } return false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(NaN);
isTruthy(undefined);
isTruthy(0);
isTruthy(-0);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(' ');
isTruthy('string');
isTruthy('0');
isTruthy(1);
isTruthy(2);
isTruthy(3);
isTruthy(4);
isTruthy(5);
isTruthy(6);

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
var carro = { marca: 'Ford', modelo: 'Ka', placa: 'QGD7129', ano: 2015, cor: 'Branco', quantasPortas: 4, assentos: 5, quantidadePessoas: 0 };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
mudarCor = function(cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
obterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
obterMarca = function() {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
obterMarcaModelo = function() {
    return 'Esse carro é um ' + obterMarca() + ' ' + obterModelo() + '';
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas que entrarão no carro. Esse
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
addPessoasCarro = function(x){
    if(x <= carro.assentos && (carro.quantidadePessoas + x) <= carro.assentos && x === 1){
        carro.quantidadePessoas += x ;
        return "Já temos " + carro.quantidadePessoas + ' pessoa no carro!';
    }
    if(x <= carro.assentos && (carro.quantidadePessoas + x) <= carro.assentos){
        carro.quantidadePessoas += x ;
        return "Já temos " + carro.quantidadePessoas + ' pessoa no carro!';
    }
    if((carro.quantidadePessoas + x) > (carro.assentos - carro.quantidadePessoas) && (carro.assentos - carro.quantidadePessoas) === 1){
        return "Só cabe mais " + (carro.assentos - carro.quantidadePessoas) + ' pessoa!';
    }    
    if((carro.quantidadePessoas + x) > (carro.assentos - carro.quantidadePessoas) && (carro.quantidadePessoas < carro.assentos)){
        return "Só cabem mais " + (carro.assentos - carro.quantidadePessoas) + ' pessoas!';
    }
    return "O carro já está lotado!";
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor(); // "Branco"

// Mude a cor do carro para vermelho.
mudarCor("Vermelho");

// E agora, qual a cor do carro?
obterCor(); // "Vermelho"

// Mude a cor do carro para verde musgo.
mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
obterCor(); // "Verde Musgo"

// Qual a marca e modelo do carro?
obterMarcaModelo(); // "Esse carro é um Ford Ka"

// Adicione 2 pessoas no carro.
addPessoasCarro(2); // "Já temos 2 pessoa no carro!"

// Adicione mais 4 pessoas no carro.
addPessoasCarro(4); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
addPessoasCarro(3); // "Já temos 5 pessoa no carro!"


// Tire 4 pessoas do carro.
carro.quantidadePessoas - 4;

// Adicione 10 pessoas no carro.
addPessoasCarro(10); // "O carro já está lotado!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 5

```
