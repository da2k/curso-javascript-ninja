# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(parameter) { return !!parameter; }

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(); //undefined
isTruthy(null);
isTruthy('');
isTruthy("");
isTruthy(false);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(!undefined); 
isTruthy(true);
isTruthy(1);
isTruthy(" ");
isTruthy(2);
isTruthy(55);
isTruthy([]);
isTruthy({});
isTruthy(-9);
isTruthy('0');

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
marca: 'Nissan',
modelo: 'March',
placa: 'XXX-9999',
ano: '2014',
cor: 'Preto',
quantasPortas: 4,
assentos: 5,
quantidadePessoas: 0,
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
    return 'Esse carro é um ' + carro.marca + carro,modelo;
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
carro.addPassageiros = function(qtdPessoas){
    
    if (qtdPessoas > 0 && carro.quantidadePessoas === carro.assentos){
        return 'O carro já está lotado';
    }
    if (carro.quantidadePessoas + qtdPessoas > carro.assentos){
        var qtdDisponiveis = carro.assentos - carro.quantidadePessoas;
        return 'só cabem mais ' + qtdDisponiveis + (qtdDisponiveis? ' pessoas': ' pessoa');
    }
    carro.quantidadePessoas+=qtdPessoas;
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor; // Preto

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.cor; //vermelho;

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.cor; // verde musgo

// Qual a marca e modelo do carro?
carro.modelo; // March

// Adicione 2 pessoas no carro.
carro.addPassageiros(2);

// Adicione mais 4 pessoas no carro.
carro.addPassageiros(4);

// Faça o carro encher.
carro.addPassageiros(3);

// Tire 4 pessoas do carro.
carro.addPassageiros(-4);

// Adicione 10 pessoas no carro.
carro.addPassageiros(10);

// Quantas pessoas temos no carro?
//1;
```
