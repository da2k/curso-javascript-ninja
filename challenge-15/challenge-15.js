(function () {/*

Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
 //Aquecimento challenge-15 chamando o this exemplo com referencia o objeto
   var obj = {
      nome: 'Anderson',
      idade: 41,
      mostraNomeIdade: function () {
        return this.idade
      }
   }
   console.log(obj.mostraNomeIdade())
/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;s
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
function Person(name, lastName, age) {
  this.name = name
  this.lastName = lastName
  this.age = age
  this.getFullName = function getFullName() {
    return this.name + ' ' + this.lastName
  }
  this.getAge = function getAge() {
    return this.age
  }
  this.addAge = function addAge() {
    this.age += arguments[0]
    return this
  }
}
/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/

var pessoa1 = new Person('Anderson', 'Pereira', 41)
var pessoa2 = new Person('Andrew', 'Henrique', 11)
var pessoa3 = new Person('Fabiana', 'Duarte', 34)

console.log( '\nNovas pessoas criadas à partir de Person:', pessoa1);
console.log( '\nNovas pessoas criadas à partir de Person:', pessoa2);
console.log( '\nNovas pessoas criadas à partir de Person:', pessoa3);
// ?

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:', pessoa1.getFullName() );
console.log( '\nNomes das pessoas:', pessoa2.getFullName() );
console.log( '\nNomes das pessoas:', pessoa3.getFullName() );

// ?

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:', pessoa1.getFullName() + ' tem ' + pessoa1.getAge() );
console.log( '\nIdade das pessoas:', pessoa2.getFullName() + ' tem ' + pessoa2.getAge() );
console.log( '\nIdade das pessoas:', pessoa3.getFullName() + ' tem ' + pessoa3.getAge() );
// ?

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
pessoa1.addAge(1)
pessoa2.addAge(1)
console.log( '\nNova idade das pessoas:', pessoa1.getFullName() + ' agora tem ' + pessoa1.getAge() );
console.log( '\nNova idade das pessoas:', pessoa2.getFullName() + ' agora tem ' + pessoa2.getAge() );
//pode ser usando metodo encadeado  usando encadeamento
console.log( '\nNova idade das pessoas:', pessoa3.getFullName() + " agora tem " + pessoa3.addAge(1).getAge() );
// ?
})()
