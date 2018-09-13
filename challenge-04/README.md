# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
    return a ? true: false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)//return false
isTruthy(undefined)//return false
isTruthy(null)//return false
isTruthy(-0)//return false
isTruthy(false)//return false
isTruthy('')//return false
isTruthy(NaN)//return false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy({})//return true
isTruthy(true)//return true
isTruthy([])//return true
isTruthy('deborah')//return true
isTruthy(1)//return true
isTruthy(2*3)//return true
isTruthy(1+1)//return true
isTruthy([1,2,3])//return true
isTruthy(function() {})//return true
isTruthy({a:1, b: 2});

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
    modelo: 'Uno',
    placa: 'edf-2138',
    ano: 2014,
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoa: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(c){
    carro.cor = c;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function (){
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function (){
    return 'Esse carro é um ' +carro.obterMarca()+ ' ' +carro.obterModelo();
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
carro.addPessoas = function(num){
    var cont = carro.quantidadePessoa + num;
                                   
    if(carro.quantidadePessoa === carro.assentos && cont >= carro.assentos){
        return 'O carro já está lotado!';
    } //nao precisa do else, pois as comparaçoes sao diferentes!

    if(cont > carro.assentos){
        var cabem = carro.assentos - carros.quantidadePessoa;
        var umaPessoa = cabem ==== 1 ? 'pessoa' : 'pessoas';
        return 'Só cabem mais' +cabem+ um Pessoa+ ' !';
    }    

    carro.quantidadePessoa += num;
    return 'Já temos ' +carro.quantidadePessoa+ ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor()
//return preto

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')
//return preto

// E agora, qual a cor do carro?
carro.obterCor()
//return preto

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')


// E agora, qual a cor do carro?
carro.obterCor()
//return verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()
//return Esse carro é um Fiat Uno

// Adicione 2 pessoas no carro.
carro.addPessoas(2)
//return Já temos 2 pessoas no carro

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4)
//return Só cabem mais 3 pessoas

// Faça o carro encher.
carro.addPessoa(3)
//return Já temos 5 pessoas no carro

// Tire 4 pessoas do carro.
carro.addPessoa(-4)
//return Já temos 1 pessoa no carro

// Adicione 10 pessoas no carro.
carro.addPessoa(10)
//return Só cabem mais 4 pessoas

// Quantas pessoas temos no carro?
carro.quantidadePessoa
//return 1
```
