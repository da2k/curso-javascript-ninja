# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
    if(!!a){
        return true;
    }
    return false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0),
isTruthy(-0),
isTruthy(NaN),
isTruthy(''),
isTruthy(""),
isTruthy(undefined),
isTruthy(null)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1)
isTruthy([])
isTruthy({})
isTruthy('calleu')
isTruthy(2)
isTruthy(3)
isTruthy(4)
isTruthy(6)
isTruthy(8)
isTruthy('0')


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
    marca: 'GM',
    modelo: 'Camaro',
    placa: 'RUJ-0034',
    ano: 66,
    cor: 'Amarelo',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var  mudaCor = function(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function(){
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
    return carro.marca;
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
    return obterMarca() + ' - ' + obterModelo();
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
var addPessoa = function(n){
    var qtyPessoasCabem = (carro.assentos - carro.quantidadePessoas);
    if(carro.quantidadePessoas === carro.assentos){
        return "O Carro já esta lotado!"
    }
    if(n > qtyPessoasCabem){
        if(qtyPessoasCabem > 1){
            return 'Só cabem mais ' + qtyPessoasCabem + ' pessoas!'; 
        }else{
            return 'Só cabem mais ' + qtyPessoasCabem + ' pessoa';
        }
    }
    carro.quantidadePessoas += n;
    if(carro.quantidadePessoas > 1){
        return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';    
    }
    return 'Já temos ' + carro.quantidadePessoas + ' pessoa no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor(); // Amarelo

// Mude a cor do carro para vermelho.
mudaCor('Vermelho');

// E agora, qual a cor do carro?
obterCor() // Vermelho

// Mude a cor do carro para verde musgo.
mudaCor('verde musgo');

// E agora, qual a cor do carro?
obterCor() // verde musgo

// Qual a marca e modelo do carro?
obterMarcaModelo() // GM - Camaro

// Adicione 2 pessoas no carro.
addPessoa(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
addPessoa(4) //'Só cabem mais 3 pessoas!'

// Faça o carro encher.
addPessoa(3) // 'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.quantidadePessoas -=4;

// Adicione 10 pessoas no carro.
addPessoa(10); //'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro?
1
```
