/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

(function(){

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
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
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function() { return name + " " +  lastName };
  this.getAge = function () { return age };
  this.addAge = function (anos) { return age + anos };
};

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );
var mellina = new Person('Mellina', 'Yonashiro', 25);
var bruna = new Person('Bruna', 'Gil', 25);
var lucia = new Person('Lucia', 'Gil Yogui', 48);
console.log(mellina);
console.log(bruna);
console.log(lucia);

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(mellina.name);
console.log(bruna.name);
console.log(lucia.name);

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(mellina.getFullName() + " tem " + mellina.getAge() + " anos");
console.log(bruna.getFullName() + " tem " + bruna.getAge() + " anos");
console.log(lucia.getFullName()) + " tem " + lucia.getAge() + " anos";

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
console.log(mellina.getFullName() + " agora tem " + mellina.addAge(5) + " anos." );
console.log(bruna.getFullName() + " agora tem " + bruna.addAge(5) + " anos." );
console.log(lucia.getFullName() + " agora tem " + lucia.addAge(5) + " anos." );

}());