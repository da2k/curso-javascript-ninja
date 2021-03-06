# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?
var isTruthy = function(x){

    if(x){
        return true;
    }else{
        return false;
    }
}


// Outras maneiras de fazer, passados pelo Fernando

let eVerdadeiro =  function(param){

    return param ? true : false;

}


let outraManeira = function(param){

    return !!param;
}
//Aqui estamos retornando o equivalente booleano
// Se passar 'true' retornara 'true' e se for 'false' retornara 'false'


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
isTruthy(undefined)
isTruthy("")
isTruthy(null)
isTruthy(false)
isTruthy(0)
isTruthy(-0)
isTruthy(NaN)
isTruthy(20 * 0) // aqui retorna ZERO, o que e false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy("0")
isTruthy("Gilmara")
isTruthy(1)
isTruthy(2)
isTruthy([])
isTruthy({})
isTruthy(true)
isTruthy(255)
isTruthy([255, 5])
isTruthy({ primeiro:"255", segundo:"255"})
isTruthy(function() {});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
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
    modelo: 'Matrix Xr',
    placa: 'Ubj41b',
    ano: '2006',
    cor: 'Prata',
    quantasPortas: '4',
    assentos: '5',
    quantidadesPessoas: '0'

}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor passado por parâmetro.
*/
carro.mudarCor = function(x){
    carro.cor = x;
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

    return 'Este carro é um' + ' ' + carro.obterMarca() + ' ' +  carro.obterModelo() + '!';
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
carro.adicionarPessoas  = function(y) {

    var pessoas = 'pessoas';    
    var assentosSobrando = carro.assentos - carro.quantidadesPessoas;
    if(assentosSobrando === 1) { pessoas = 'pessoa'}

    if(assentosSobrando == 0){
        return 'O carro já está lotado ! Já temos'+ ' '+ carro.quantidadesPessoas + ' '+ 'pessoas no carro !'
    } else if 
        (assentosSobrando <=5 && y === assentosSobrando  ) {
            carro.quantidadesPessoas += y; 
        
    return 'Já temos'+ ' '+ carro.quantidadesPessoas + ' '+ 'pessoas no carro !'

        } else if
            (assentosSobrando <=5 && y < assentosSobrando){
                carro.quantidadesPessoas += y; 
        
        return 'Já temos'+ ' '+ carro.quantidadesPessoas + ' '+ 'pessoas no carro !'


        }  else if (assentosSobrando <=5 && y > assentosSobrando){

            return 'Só cabem mais' + ' '  + assentosSobrando + ' ' + pessoas + '!'
        } else if 

            (assentosSobrando ===1 ) 
        
            return 'Só cabem mais' + ' ' + assentosSobrando + ' ' + pessoas + '!'
            
        }
    

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor
prata


// Mude a cor do carro para vermelho.

carro.mudaCor('Vermelho')

// E agora, qual a cor do carro?
carro.cor
'Vermelho'

// Mude a cor do carro para verde musgo.

carro.mudaCor('Verde Musgo')
// E agora, qual a cor do carro?
carro.cor
'Verde Musgo'

// Qual a marca e modelo do carro?
 carro.obterMarcaModelo()
'Este carro é um Toyota Matrix Xr!

// Adicione 2 pessoas no carro.
> carro.adicionarPessoas(2)
'Já temos 2 pessoas no carro !'

// Adicione mais 4 pessoas no carro.
> carro.adicionarPessoas(4)
'Só cabem mais 3 pessoas!'

// Faça o carro encher.
> carro.adicionarPessoas(3)
'Já temos 5 pessoas no carro !'

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
