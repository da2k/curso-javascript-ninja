# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(p) {
    /*var retorno = false;
    if (p) {
        retorno = true;
    }
    return retorno;*/

    //return p ? true : false;

    return !!p;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);
isTruthy('');
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy({});
isTruthy([]);
isTruthy("eu");
isTruthy(3);
isTruthy(4);
isTruthy(true);
isTruthy(5.1);
isTruthy("olá");
isTruthy({ teste: 'oi' });
isTruthy([1, 3, 5]);

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
    modelo: 'Argo',
    placa: 'ABCD-0042',
    ano: 2018,
    cor: 'Azul',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(newCor) {
    carro.cor = newCor;
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
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
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
carro.adicionarPessoas = function(numPessoas) {
    var retorno = "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
    var pessoasCabem = carro.assentos - carro.quantidadePessoas;

    if (carro.quantidadePessoas === carro.assentos && pessoasCabem < numPessoas) {
        retorno += "\nO carro já está lotado!";
    }
    else if (pessoasCabem < numPessoas) {
        /*var pessoa = "pessoa"
        if (pessoasCabem !== 1) {
            pessoa = "pessoas";
        }*/
        var pessoa = pessoasCabem === 1 ? "pessoa" : "pessoas";

        retorno += "\nSó cabem mais " + pessoasCabem + " " + pessoa + "!";
    }
    else {
        carro.quantidadePessoas += numPessoas;
        retorno += numPessoas >= 0 ? "\nMais " + numPessoas + " " + (numPessoas === 1 ? "foi adicionada" : "foram adicionadas") + " no carro!" : "\n" + (-numPessoas) + " " + (numPessoas === -1 ? "foi retirada" : "foram retiradas") + " do carro!";
    }

    return retorno;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); //"Azul"

// Mude a cor do carro para vermelho.
carro.mudarCor("Branco");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //"Branco"

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //"Verde Musgo"

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); //"Esse carro é um FIAT Argo"

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); //"Já temos 0 pessoas no carro! Mais 2 foram adicionadas no carro!"

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); //"Já temos 2 pessoas no carro! Só cabem mais 3 pessoas!"

// Faça o carro encher.
console.log(carro.adicionarPessoas(3)); //"Já temos 2 pessoas no carro! Mais 3 foram adicionadas no carro!"

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); //"Já temos 1 pessoas no carro! Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); //1
```
