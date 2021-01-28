# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = function(par) {
    return !!par
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
is
isTruthy();
isTruthy('');
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);
isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy('Dez');
isTruthy('José Ivo');
isTruthy(5 * 2);
isTruthy(true);
isTruthy(Boolean);
isTruthy({});
isTruthy([]);
isTruthy(function(){});
isTruthy(()=>{});

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
const car = {
    brand: 'BMW',
    model: 'M3 - sport',
    board: 'IVO-1995',
    year: 2013,
    color: 'white',
    howManyDoors: 2,
    seat: 5,
    amountOfPeople: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
car = {
  changeColor: (color) => { return car.color = color}
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car = {
   getColor: () => {return car.color}
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car = {
  getModel: () => {return car.model}
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car = {
  getBrand: () => {return car.brand}
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
car = {
    getBrandModel: () => {
      return `This car is a ${car.getBrand()} ${car.getModel()}`
  }
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
car = {
  addPerson: (person) => {
        let capacity = car.amountOfPeople + person;
        
        if(car.seat === car.amountOfPeople && capacity >= car.seat){
            return 'O carro já está lotado!';
        }

        if( capacity > car.seat) {
            let remainingSeats = car.seat - car.amountOfPeople;            
            let plural = remainingSeats === 1 ? `pessoa` : `pessoas`;
            return `Só cabem mais ${remainingSeats} ${plural}!`;
        }
        
        car.amountOfPeople += person;
        
        return `Já temos ${capacity} pessoas no carro!`;

    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(car.color);
// white

// Mude a cor do carro para vermelho.
car.changeColor('red');

// E agora, qual a cor do carro?
console.log(car.color);
// red

// Mude a cor do carro para verde musgo.
car.changeColor('Verde Musgo');

// E agora, qual a cor do carro?
// Verde Musgo

// Qual a marca e modelo do carro?
console.log(car.brand); // BMW
console.log(car.model); // M3 -sport

// Adicione 2 pessoas no carro.
car.addPerson(2);
// "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
car.addPerson(4);
// "Só cabem mais 3 pessoas!"

// Faça o carro encher.
car.addPerson(3);
// "Já temos 5 pessoas no carro!"


// Tire 4 pessoas do carro.
car.addPerson(-4);
// "Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
car.addPerson(10);
// "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
console.log(car.amountOfPeolple);
// 1
```
