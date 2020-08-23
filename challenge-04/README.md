# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = function (arg) {
    return arg ? true : false;
}
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(undefined);
isTruthy(null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy('a');
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy(function(){});
isTruthy(100);
isTruthy([2,1]);
isTruthy({'cor': 'vermelho', 'sexo': 'masculino'});
isTruthy('André');

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
let carro = {
    'marca': 'Audi',
    'modelo': 'A3 Sedan',
    'placa': 'PPJ-0011',
    'ano': 2019,
    'cor': 'Branco',
    'quantasPortas': 4,
    'assentos': 5,
    'quantidadePessoas': 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (arg) {
    this.cor = arg;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return `Esse carro é um ${this.marca} ${this.modelo}`;
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
carro.adcPessoa = function (arg) {
    let qtdPessoa = arg;
    let totalPessoas = qtdPessoa + this.quantidadePessoas;
    let assentosVagos = this.assentos - this.quantidadePessoas;
    let pessoa;
    let caber;

    assentosVagos == 1  ? pessoa = 'pessoa' : pessoa = 'pessoas';
    assentosVagos == 1  ? caber = 'cabe' : caber = 'cabem' ;


    if (totalPessoas <= this.assentos) {
        this.quantidadePessoas += qtdPessoa;
        return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
    }

    else if (this.assentos <= this.quantidadePessoas) {
        return 'O carro já está lotado!';
    }

    else { return `Só ${caber} mais ${assentosVagos} ${pessoa}!`; }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); //Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //Verde Musgo

// Qual a marca e modelo do carro?
carro.obterMarca(); //Audi

// Adicione 2 pessoas no carro.
carro.adcPessoa(2);

// Adicione mais 4 pessoas no carro.
carro.adcPessoa(4);

// Faça o carro encher.
carro.adcPessoa(3);

// Tire 4 pessoas do carro.
/*Como no exercício não havia nenhuma instrução para criação de um método para remover pessoas,
tive a liberdade de criar um para facilitar o processo */
carro.removePessoa = function (arg) {
   let qtdPessoa = arg;
   this.quantidadePessoas -= qtdPessoa; 
}

carro.removePessoa(4); //Execução do método para remover a quantidade de pessoas pedido no enunciado

// Adicione 10 pessoas no carro.
carro.adcPessoa(10);

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1 pessoa
//Limitei para que caiba somente uma pessoa por assento no carro, como manda a lei... ;)
```