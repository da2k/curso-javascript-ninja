( function() {
  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

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
  function Person( name, lastName, age ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullname = function getFullname() {
      return this.name + ' ' + this.lastName;
    }

    this.getAge = function getAge() {
      return this.age;
    }

    this.addAge = function addAge() {
      // Uso o arguments[0] pq ele vai pegar somente o primeiro;
      this.age += arguments[0];
      // Retorno this pq tenho que retornar o objeto que será instanciado
      return this;
    }
  }

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  var matheus = new Person( 'Matheus', 'Martins', 19 );
  var joao = new Person( 'Joao', 'Lore', 29 );
  var marcio = new Person( 'Marcio', 'Castelho', 55 );

  console.log( matheus );
  console.log( joao );
  console.log( marcio );

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log( matheus.getFullname() );
  console.log( joao.getFullname() );
  console.log( marcio.getFullname() );

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  console.log(  matheus.getFullname() + ' tem ' + matheus.getAge() + ' anos.' );
  console.log(  joao.getFullname() + ' tem ' + joao.getAge() + ' anos.' );
  console.log(  marcio.getFullname() + ' tem ' + marcio.getAge() + ' anos.' );

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  matheus.addAge( 10 );
  joao.addAge( 22 );
  marcio.addAge( 47 );
  console.log( matheus.getFullname() +  ' agora tem ' + matheus.getAge() + ' anos.' );
  console.log( joao.getFullname() +  ' agora tem ' + joao.getAge() + ' anos.' );
  console.log( marcio.getFullname() +  ' agora tem ' + marcio.getAge() + ' anos.' );
  // ?
} )();
