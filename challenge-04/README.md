# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(param){
    return param ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy('a');
isTruthy(-10);
isTruthy("eaê");
isTruthy(!false);
isTruthy(2);
isTruthy(3);
isTruthy(4);
isTruthy(5);

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
    marca: "Chevrolet",
    modelo: "Onix",
    placa: "KLB-0101",
    ano: 2019,
    cor: "Branco",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
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
carro.adicionarPassageiros = function(qtd){

    if (qtd > 0 && carro.quantidadePessoas === 5){
        return "O carro já está lotado!";
    } else if(carro.quantidadePessoas < 5 && (qtd + carro.quantidadePessoas) > 5){
        return Math.abs(carro.assentos - carro.quantidadePessoas) === 1 ? "Só cabem mais " + Math.abs(carro.assentos - carro.quantidadePessoas) + " pessoa!" : "Só cabem mais " + Math.abs(carro.assentos - carro.quantidadePessoas) + " pessoas!";
    } else {
        if(carro.quantidadePessoas + qtd >= 0) carro.quantidadePessoas += qtd;
        return carro.quantidadePessoas === 1 ? "Já temos " + carro.quantidadePessoas + " pessoa no carro!" : "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
    }

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor; //'Branco'

// Mude a cor do carro para vermelho.
carro.cor = "Vermelho";

// E agora, qual a cor do carro?
'Vermelho'

// Mude a cor do carro para verde musgo.
carro.cor = "Verde Musgo"; 

// E agora, qual a cor do carro?
"Verde Musgo"

// Qual a marca e modelo do carro?
carro.marca; //'Chevrolet'
carro.modelo; //'Onix'

// Adicione 2 pessoas no carro.
carro.adicionarPassageiros(2);

// Adicione mais 4 pessoas no carro.
carro.adicionarPassageiros(4);

// Faça o carro encher.
carro.adicionarPassageiros(3);

// Tire 4 pessoas do carro.
carro.adicionarPassageiros(-4);

// Adicione 10 pessoas no carro.
carro.adicionarPassageiros(10);

// Quantas pessoas temos no carro?
1
```
