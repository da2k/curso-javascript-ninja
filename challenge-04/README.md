# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var  istruthy = function(paramet) {
    if (paramet) {
        return true; 
    }
    return false;
}
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
istruthy(false);
istruthy(null);
istruthy(undefined);
istruthy('');                         
istruthy(0)
istruthy(-0);
istruthy(nan);



/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
istruthy(1);
istruthy('vitor');
istruthy([]);
istruthy('carro');
istruthy({});
istruthy('curso');
istruthy('javascript');
istruthy(4 + 5 );
istruthy('ninja');
istruthy(' god of war')


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
var carro2 = {marca: 'toyota',
           modelo: 'Etios',
           placa: 'ibe-1620',
           ano: 2021, 
           cor: 'cinza',
           quantasPortas: 4,
           assentos: 5 ,
           quantidadesPessoas: 0, };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function( cor ) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return car.cor;
}


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return car.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return car.marca;
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return ' Esse car é um '+ car.obterMarca +' '+ car.obterModelo +''
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
carro.adicionarPessoas = function(numeroPessoas) { 
    var totalPessoas = carro.quantidadesPessoas + numeroPessoas; 
    if( carro.quantidadesPessoas === carro.assentos && totalpessoas >= carro.assentos) {
        return ' o carro está lotado';
    }
    if(totalpessoas > carro.assentos ) {
        var quantasPessoasCabem = carro.assentos - carrro.quantidadePessoas;
        var pluralouSingular = quantasPessoasCabem === 1 (interrogaçao) 'pessoas' : 'pessoa' ;
        return ' só cabem mias '+ quantasPessoasCabem + pluralousingular + ' !  ';
    }
     carro.quantidadePessoas += numeroPesoas;
    return ' já temos ' + totalPessoas  +'  pessoas no carro !';
};               

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // vermelho 

// Mude a cor do carro para vermelho.
carro.obterCor('azul');  // 'azul' 

// E agora, qual a cor do carro?
carro.obterCor(); // 'verde musgo''

// Mude a cor do carro para verde musgo.
carro.obterCor( ' verde musgo'); //  'verde musgo'

// E agora, qual a cor do carro?
carro.obterCor();   // ' verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'esse carro é um toyota Etos"

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // "já temos 2 pessoas no carro !"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // "só cabem mais 3 pessoas !"

// Faça o carro encher.
carro.adicionarPessoas(3) // "já temos 5 pessoas no carro"

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // "ja temos 1 pessoa no caro"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // só cabem mais 4 pessoas 

// Quantas pessoas temos no carro?
carro.quantidadedePessoas; 
```
