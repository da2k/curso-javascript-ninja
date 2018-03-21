# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
    return a ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy("");
    
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy("0");
isTruthy([]);
isTruthy({});
isTruthy("Paulo");
isTruthy(1231275);
isTruthy(1+1);
isTruthy(isTruthy(1+1));
isTruthy([null,undefined,false,0]);


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
    marca:  'General Motors',
    modelo: 'Corsa',
    placa:  'LUZ 3500',
    ano:    2013,
    cor:    'branca',
    quantasPortas:  4,
    assentos:   5,
    quantidadePessoas:  0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(x){ carro.cor = x;}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){ return carro.cor;}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){ return carro.modelo;}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){ return carro.marca;}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){ return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();}

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
carro.addPessoas = function(x){

                               
    if (x === 0){
        return "Ué? Ninguém quer uma carona?";
                               
    } else if (x > 0) {
    
        var boarding = carro.quantidadePessoas + x;
        (boarding >= 4) ? isSingular = ' pessoa!' : isSingular = ' pessoas!';    
    
        if (boarding == carro.assentos){
            carro.quantidadePessoas = x + carro.quantidadePessoas;
            return "Ok. Mas carro lotou agora!";
        } else if (boarding < carro.assentos){
            carro.quantidadePessoas = x + carro.quantidadePessoas;
            return "Ok. Agora temos " + carro.quantidadePessoas + " no carro! Só há espaço para mais " + (carro.assentos - carro.quantidadePessoas) + isSingular;
        } else if (carro.quantidadePessoas < carro.assentos && boarding > carro.assentos){
            return "Desculpe. Já temos " + carro.quantidadePessoas + " no carro! Só há espaço para mais " + (carro.assentos - carro.quantidadePessoas) + ".";
        } else if (carro.quantidadePessoas == carro.assentos){
            return "Desculpe. O carro já está lotado!";     
        } 
    } else if (x < 0) {
    
        (carro.quantidadePessoas > 1) ? grammarFix = ' pessoa!' : grammarFix = ' pessoas!';    
                
        carro.quantidadePessoas = carro.quantidadePessoas + x;
        return "Ok. Agora temos " + carro.quantidadePessoas + grammarFix + " Ganhamos espaço para  " + (carro.assentos - carro.quantidadePessoas);
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
*/

// Qual a cor atual do carro? 
carro.obterCor(); // "branca"

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // "vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // "verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //"Esse carro é um General Motors Corsa"

// Adicione 2 pessoas no carro.
carro.addPessoas(2);
// "Ok. Agora temos 2 pessoas no carro! Só há espaço para mais 3 pessoas!"

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4);
// "Desculpe. Já temos 2 pessoas no carro! Só há espaço para mais 3."

// Faça o carro encher.
carro.addPessoas(3);
// "Ok. Mas carro lotou agora!"

// Tire 4 pessoas do carro.
carro.addPessoas(-4);
// "Ok. Agora temos 1 pessoa! Ganhamos espaço para  4"

// Adicione 10 pessoas no carro.
carro.addPessoas(10);
// "Desculpe. Já temos 1 pessoas no carro! Só há espaço para mais 4."

// Quantas pessoas temos no carro?
carro.quantidadePessoas
// 1



```
