# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = functionn(value){
    return !!value;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy(NaN);
isTruthy('');
isTruthy(document.all)[1];

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy(10);
isTruthy('string');
isTruthy(-10);
isTruthy(Infinity);

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
    marca: 'Audi',
    modelo: 'A3',
    placa: 'AET200',
    ano: '2019',
    cor: 'Preto',
    quantasPortas: 2,
    assentos: '4',
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    carro.cor = cor;
    return 'Cor do carro mudou';
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return 'A cor do carro é ' + carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return 'O modelo do carro é ' + carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return 'A marca do carro é ' + carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return 'Esse carro é um '+carro.marca+' '+carro.modelo+'.';
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
carro.adicionarPessoas = function(numeroPessoas){
    var espaco = carro.assentos - carro.quantidadePessoas;
    var pessoas = 'pessoas';
    var totalPessoas;

    if(carro.assentos === carro.quantidadePessoas){
        return 'O carro já está lotado!';
    }

    if(carro.quantidadePessoas < carro.assentos && numeroPessoas > espaco){
        if(espaco === 1){ pessoas = 'pessoa'; }
        return 'Só cabem mais '+espaco+' '+pessoas+'!';
    }

    carro.quantidadePessoas += numeroPessoas;
    totalPessoas = carro.quantidadePessoas

    return 'Já temos '+totalPessoas+' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // "A cor do carro é Preto"

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // "A cor do carro é Vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // "A cor do carro é Verde Musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // "Esse carro é um Audi A3."

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4) // "Só cabem mais 2 pessoas!"

// Faça o carro encher.
carro.adicionarPessoas(2) // "Já temos 4 pessoas no carro!"

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4) // "Já temos 0 pessoas no carro!"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10) // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 0
```
