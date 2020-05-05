# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = (param)=>{
    if(!!param){
        return true;
    }
    return false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy();
isTruthy(null);
isTruthy('');
isTruthy("");
isTruthy(NaN);
isTruthy(false);
isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('1')
isTruthy(1);
isTruthy(true);
isTruthy(!NaN)
isTruthy('false');
isTruthy('0');
isTruthy(10);
isTruthy("false");
isTruthy(1<10);
isTruthy(1=='1');

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
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'E1T4K6T',
    ano: 1994,
    cor: 'verde',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(param){
    this.cor = param;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
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
carro.adicionarPessoas = function(numero){
    let assentosRestantes = this.assentos - this.quantidadePessoas;
    let flexaoPlural1 = assentosRestantes>1 ? 'm': '';
    let flexaoPlural2 = assentosRestantes>1 ? 's': '';
    if(typeof numero !== 'number' || numero<0){
        return 'Valor inválido -> valor não-numérico ou negativo!';
    }
    let pessoas = this.quantidadePessoas + numero;
    if(pessoas <= this.assentos){
        this.quantidadePessoas = pessoas;
        if(this.quantidadePessoas === this.assentos){
            return 'O carro já está lotado!';
        }
        return `Já temos ${this.quantidadePessoas} pessoa${flexaoPlural2} no carro!`;
    }else if(this.quantidadePessoas === this.assentos){
        return 'O carro já está lotado!';
    }else{
        return `Só cabe${flexaoPlural1} mais ${assentosRestantes} pessoa${flexaoPlural2}!`;
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); //verde

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); //Esse carro é um Fiat Uno

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); //Já temos 2 no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); //Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.adicionarPessoas(3)); //O carro já está lotado!

// Tire 4 pessoas do carro.
carro.removerPessoas = function(numero){
    if(typeof numero !== 'number' || numero<0){
        console.log('Valor inválido!');
        return;
    }
    if(this.quantidadePessoas===0){
        console.log('Carro vazio!');
        return;
    }
    let pessoas = this.quantidadePessoas - numero;
    if(pessoas >= 0 && this.quantidadePessoas >= numero && numero>=0 && numero<=this.assentos){
        this.quantidadePessoas = pessoas;
    }else{
        console.log('Valor inválido!');
    }
}

carro.removerPessoas(4);

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); //Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log('quantidade de pessoas no carro: ', carro.quantidadePessoas); // quantidade de pessoas no carro:  1
```
