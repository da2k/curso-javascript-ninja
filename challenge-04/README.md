# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (arg){
    return !!arg
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)
false
isTruthy(-0)
false
isTruthy(NaN)
false
isTruthy(undefined)
false
isTruthy(``)
false
isTruthy("")
false
isTruthy('')
false
isTruthy(null)
false
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy([])
true
isTruthy({})
true
isTruthy(1)
true
isTruthy("Lucas")
true
isTruthy(20)
true
isTruthy('Lucas')
true
isTruthy(11)
true
isTruthy("Lucas")
true
isTruthy("Duarte")
true
isTruthy("Git")
true

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
var carro = { marca: null, modelo: null, placa: null, ano: null, cor: null, quantasPortas: null, assentos: 5, quantidadePessoas: 0}

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
carro.obterCor = function (){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function (){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function (){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function (){
    return "Esse carro é um "+carro.marca+" "+carro.modelo;
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
carro.addPessoasNoCarro = function (x){
    if(x == null){
        return "Já temos "+ (5 - carro.assentos) +" pessoas no carro"
    }
    if(x > carro.assentos){
        return "O carro tem apenas "+carro.assentos+" de assintos disponiveis"
    } else {
        carro.assentos = carro.assentos - x;
        var msg = "pessoas";
        if (carro.assentos === 1){
            msg = "pessoa";
        }
        if(carro.assentos === 0 ){
        return "O carro está lotado."
    }
        return "Só cabe mais "+carro.assentos+" "+msg+" no carro"
    }
}




/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor
//null

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
carro.cor
//"vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
carro.cor
//verde musgo

// Qual a marca e modelo do carro?
carro.modelo
//null

// Adicione 2 pessoas no carro.
carro.addPessoasNoCarro(2)
//"Só cabe mais 3 pessoas no carro"

// Adicione mais 4 pessoas no carro.
carro.addPessoasNoCarro(4)
//"O carro tem apenas 3 de assintos disponiveis"

// Faça o carro encher.
carro.addPessoasNoCarro(3)
//"O carro está lotado."

// Tire 4 pessoas do carro.
carro.addPessoasNoCarro(-4)
//"Só cabe mais 4 pessoas no carro"

// Adicione 10 pessoas no carro.
carro.addPessoasNoCarro(10)
//"O carro tem apenas 4 de assintos disponiveis"

// Quantas pessoas temos no carro?
carro.addPessoasNoCarro()
//"Já temos 1 pessoas no carro"
```
