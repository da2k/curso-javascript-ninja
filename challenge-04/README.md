# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
            var isTruthy = function(argument){
            if(argument){
                return true
            }else{
                return false
            }
        }

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
        console.log(isTruthy(0))
        console.log(isTruthy(false))
        console.log(isTruthy(''))
        console.log(isTruthy(""))
        console.log(isTruthy(-0))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
        console.log(isTruthy(1))
        console.log(isTruthy('Pedro'))
        console.log(isTruthy(true))
        console.log(isTruthy([]))
        console.log(isTruthy({}))

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
     marca: 'Toyota',
     modelo: 'Corolla',
     placa: 'JSP-4550',
     ano: 2008,
     cor: 'Prata',
     qntPortas: 4,
     assentos: 5,
     qntPessoas: 0
 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

 carro.mudarCor = function(cor){
     this.cor = cor
 }

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

 carro.obterCor = function(){
     console.log(this.cor)
     return this.cor
 }

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
 carro.obterModelo = function(){
     console.log(this.modelo)
     return this.modelo
 }

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
 carro.obterMarca = function(){
     console.log(this.marca)
     return this.marca
 }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
 carro.obterMarcaModelo = function(){
     console.log('Esse carro é um '+this.marca+' '+this.modelo)
     return 'Esse carro é um '+this.marca+' '+this.modelo;
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

     carro.addPessoas = function(qnt){
     if(this.qntPessoas >= this.assentos){
         console.log('Esse carro já está lotado')
         return false
     }

     if(this.qntPessoas < this.assentos && qnt > (this.assentos-this.qntPessoas)){
         if(this.assentos-this.qntPessoas == 1){
            console.log('Só cabem mais '+(this.assentos-this.qntPessoas)+'pessoa no carro')
            return 'Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoa no carro'
         }
         console.log('Só cabem mais '+(this.assentos-this.qntPessoas)+'pessoas no carro')
         return 'Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoas no carro'
     }
    console.log('Já temos: '+this.qntPessoas+' no carro')

 }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

    console.log(carro.obterCor())  // Prata

// Mude a cor do carro para vermelho.

    carro.mudarCor('Vermelho')

// E agora, qual a cor do carro?

    Vermelho

// Mude a cor do carro para verde musgo.

    carro.mudarCor('Verde Musgo')

// E agora, qual a cor do carro?
    Verde Musgo

// Qual a marca e modelo do carro?

    carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
    carro.addPessoas(2)

// Adicione mais 4 pessoas no carro.

    carro.addPessoas(4) // Só temos 3 lugares no carro

// Faça o carro encher.

    carro.addPessoas(3)

// Tire 4 pessoas do carro.
 
 carro.qntPessoas -= 4

// Adicione 10 pessoas no carro.

 carro.addPessoas(10) //Só temos 4 lugares no carro

// Quantas pessoas temos no carro?
        //1
```
