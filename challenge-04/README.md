# Desafio da semana #4

```js
/*
(1) Declare uma variável chamada `isTruthy`, (2) e atribua a ela uma função que recebe
um único parâmetro como argumento. (3) Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy 
isTruthy = function (a){
    return !!a;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(-0);
isTruthy(0);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy("");
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(10);
isTruthy(100);
isTruthy(1000);
isTruthy(10000);
isTruthy('1');
isTruthy("1");
isTruthy('oi');
isTruthy("oi");
isTruthy('@');

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
    modelo: 'Puto',
    placa: 'FMD 1223',
    ano: 2011,
    cor: 'Vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro é um " + carro.obterMarca() + " modelo " + carro.obterModelo() + "!";
}

/*
(1) Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
(2) - Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
(3) - O método deve retornar a frase: "Já temos [X] pessoas no carro!"
(4) - Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
(5) - Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
(6) - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(ocupantes){

    var vagas = carro.assentos - carro.quantidadePessoas;
   
    if(carro.quantidadePessoas === carro.assentos){

        return "O carro já está lotado!";

    } else if (ocupantes > vagas){

        return "Só " + (vagas > 1 ? 'cabem' : 'cabe') + " mais " + vagas + " " + (vagas > 1 ? 'pessoas' : 'pessoa') + "!";

    } else if (ocupantes <= 0 || ocupantes == NaN || ocupantes == '' || ocupantes == null || ocupantes == ""){

        return "Inválido! Informe o valor correto";

    } else {

        carro.quantidadePessoas += ocupantes;

    }
    
    return "Já temos " + carro.quantidadePessoas + " " + (carro.quantidadePessoas == 1 ? 'pessoa' : 'pessoas') + " no carro!";
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // 'vermelho'

// Mude a cor do carro para vermelho.
carro.mudaCor('azul');

// E agora, qual a cor do carro?
carro.obterCor(); // azul

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // 'Verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro é um Fiat modelo Puto!'

// Adicione 2 pessoas no carro.
carro.addPessoas(2); // 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); // 'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.addPessoas(3); // 'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.quantidadePessoas = (carro.quantidadePessoas - 4);

// Adicione 10 pessoas no carro.
carro.addPessoas(10); // 'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
```
