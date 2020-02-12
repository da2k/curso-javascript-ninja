# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (x) {
    if (x) {
         return true;
    } 
    else { 
        return false;
    };
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy('');
isTruthy("");
isTruthy(false);
isTruthy(NaN);
isTruthy(undefined);
isTruthy(null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('Julia');
isTruthy(10);
isTruthy(true);
isTruthy('0');
isTruthy('Stefanoni');
isTruthy(3.14);
isTruthy(-10);
isTruthy(120 - 60);
isTruthy({ exercicio: 'Julia' });
isTruthy(['Stefanoni']);

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
var car = {
    marca: 'Ford',
    modelo: 'Eco Sport',
    placa: 'EJS7142',
    ano: 2010,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
car.setCor = function (novaCor) {
    car.cor = novaCor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car.getCor = function () {
    return car.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car.getModelo = function () {
    return car.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car.getMarca = function () {
    return car.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
car.getMarcaModelo = function () {
    return `Esse carro é um ${car.getModelo()} ${car.getMarca()}`;
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
car.addPessoas = function (numberPersonAdd) {
    if (car.quantidadePessoas < 5) {
        if (numberPersonAdd + car.quantidadePessoas > 5) {
            var lugaresVagos = car.assentos - car.quantidadePessoas;
            var plural = lugaresVagos === 1 ? ' pessoa!' : ' pessoas!';
            return `Só cabem mais ${lugaresVagos} ${plural}`;
        }
        car.quantidadePessoas += numberPersonAdd;
    } else {
        return "O carro já está lotado!";
    }
    return `Já temos ${car.quantidadePessoas} no carro!`;


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
car.getCor(); // Preto

// Mude a cor do carro para vermelho.
car.setCor('Vermelho');

// E agora, qual a cor do carro?
car.getCor(); // Vermelho

// Mude a cor do carro para verde musgo.
car.setCor('Verde Musgo');

// E agora, qual a cor do carro?
car.getCor(); // Verde Musgo

// Qual a marca e modelo do carro?
car.getMarcaModelo();

// Adicione 2 pessoas no carro.
car.addPessoas(2);

// Adicione mais 4 pessoas no carro.
car.addPessoas(4); // O carro já está lotado! 

// Faça o carro encher.
car.addPessoas(3);

// Tire 4 pessoas do carro.
car.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
car.addPessoas(10); // O carro já está lotado!

// Quantas pessoas temos no carro?
car.quantidadePessoas; // 1
```
