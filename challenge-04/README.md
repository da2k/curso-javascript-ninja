# Desafio Semana #3

```js

// Aluno: Bruno Benício de Andrade Lima

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
✔
    var isTruthy = function (a) {
        
        if (a === 0 || a === -0 || a === undefined || a === NaN || a === ''|| a === "") {
            return false;
        } else {
            return true;
        };
    }
    isTruthy();
✔✔
//Forma simplificada 
    var isTruthy = function (x) {
    return !!x;
    };

    isTruthy();
    
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
✔
    isTruthy(0);
    isTruthy(-0); 
    isTruthy("");
    isTruthy('');
    isTruthy(false);
    isTruthy(NaN);
    isTruthy(null);
    isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
✔
    isTruthy(1);
    isTruthy(2);
    isTruthy(3);
    isTruthy(4);
    isTruthy(5);
    isTruthy(6);
    isTruthy(6 + 1);
    isTruthy({});
    isTruthy([]);
    isTruthy('BRUNO');
    isTruthy("2");

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
✔
    var carro = {
        marca: "fiat",
        modelo: "escada",
        placa: "piz-1200",
        ano: 2020,
        cor: "preto",
        quantasPortas: 4,
        assentos: 5,
        quantidadePessoas: 0
    };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
✔
    carro.mudarCor = function(novacor) {
        carro.cor = novacor;
    }
    carro.mudarCor("azul");
    carro

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
✔
    carro.obterCor = function() {
        return 'a cor do carro é ' + carro.cor;
    }
    carro.obterCor();

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/  
✔
    carro.obterModelo = function() {
        return 'o modelo do carro é ' + carro.modelo;
    }
    carro.obterModelo();

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
✔
    carro.obterMarca = function() {
        return 'a marca do carro é ' + carro.marca;
    }
    carro.obterMarca();

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
✔
    carro.obterMarcaModelo = function() {
        return carro.obterMarca() + ' e ' + carro.obterModelo();
    }
    carro.obterMarcaModelo();

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
✔
    carro.addPessoas = function( numPessoas ) {
        var totPessoas = carro.quantidadePessoas + numPessoas;
        if ( carro.quantidadePessoas === carro.assentos && totPessoas >=carro.assentos ) {
            return 'O carro já está lotado!';
        }
        
        if ( totPessoas > carro.assentos ) {
            var pessoasRestantes = carro.assentos - carro.quantidadePessoas;
            var pluralOuSingular = pessoasRestantes === 1 ? ' pessoa' : ' pessoas';
            var pluralOuSingularA = pessoasRestantes === 1 ? ' cabe' : ' cabem';
            return 'Só'+ pluralOuSingularA +' mais ' + pessoasRestantes + pluralOuSingular + ' no carro!';
        }

        carro.quantidadePessoas += numPessoas;
        return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
    };

    carro.quantidadePessoas = 0 //zerar o valor primeiro
    carro.addPessoas(4); //fazer os testes
    carro.addPessoas(6); //fazer os testes

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
✔
    carro.obterCor(); // a Cor do carro é azul


// Mude a cor do carro para vermelho.
✔
    carro.mudarCor("Vermelho"); 

// E agora, qual a cor do carro?
✔
    carro.obterCor() // 'a Cor do carro é Vermelho'
    
// Mude a cor do carro para verde musgo.
✔
    carro.mudarCor("Verde Musgo"); 

// E agora, qual a cor do carro?
✔
    carro.obterCor(); //'a Cor do carro é Verde Musgo'

// Qual a marca e modelo do carro?
✔
    carro.obterMarcaModelo(); //'Esse carro é um fiat escada'

// Adicione 2 pessoas no carro.
✔
    carro.addPessoas(2); //'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
✔
    carro.addPessoas(4); //'Só cabem mais 3 pessoas no carro!'

// Faça o carro encher.
✔
    carro.addPessoas(3); //'Já temos 5 pessoas no carro!'
// Tire 4 pessoas do carro.
✔
    carro.addPessoas(-4); //'Já temos 1 pessoas no carro!'
// Adicione 10 pessoas no carro.
✔
    carro.addPessoas(10) //'Só cabem mais 4 pessoas no carro!'
// Quantas pessoas temos no carro?
✔
    carro.quantidadePessoas //1
```
