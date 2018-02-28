/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
(function () {

  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function getFullName() {
      return this.name + ' ' + this.lastName;
    }

    this.getAge = function getAge() {
      return this.age;
    }

    this.addAge = function addAge() {
      this.age += arguments[0];
      return this;
    }
  }

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log('Novas pessoas criadas à partir de Person:');
  var christian = new Person('Christian', 'Krzekotowski', 25);
  var priscilla = new Person('Priscilla', 'Frasnelli', 24);
  var castatatas = new Person('Castatatas', 'Beuzebu', 666);

  console.log(christian);
  console.log(priscilla);
  console.log(castatatas);

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log('\nNomes das pessoas:');
  console.log(christian.getFullName());
  console.log(priscilla.getFullName());
  console.log(castatatas.getFullName());

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log('\nIdade das pessoas:');
  console.log(christian.getFullName() + ' tem ' + christian.getAge() + ' anos.');
  console.log(priscilla.getFullName() + ' tem ' + priscilla.getAge() + ' anos.');
  console.log(castatatas.getFullName() + ' tem ' + castatatas.getAge() + ' anos.');

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log('\nNova idade das pessoas:');
  console.log(christian.getFullName() + ' agora tem ' + christian.addAge(1).getAge() + ' anos.');
  console.log(priscilla.getFullName() + ' agora tem ' + priscilla.addAge(4).getAge() + ' anos.');
  console.log(castatatas.getFullName() + ' agora tem ' + castatatas.addAge(7).getAge() + ' anos.');

})();
