// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

(function(){


/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/

var once = false;
var count = 0

// while(once != true){
//   console.log('Entrou ao menos uma vez!');
// }

while(count < 10){

  once = false;
  console.log(count);
  console.log('once é:', once);

  if(count === 5) {
    once = true;
    console.log('Entrou ao menos uma vez!', once);
  }

  count++;


}

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
var person = {
  'name': 'Luciano',
  'age': 29,
  'weight': 1.82,
  'birthday': '15/06/1988'
}

/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/

var count = 0;

for( var property in person ){
  console.log('The ' + property + ' of ' + 'person is ' + person[property]);
  count++;
}

console.log('The person has ' + count + ' properties');


/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/

function moreThan ( value ){
  return person.age > value;
}

console.log('The person has more than 25 years old? ', moreThan(20));

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/

var count = 0;
var numbers = [];

while( count <= 20 ){

  if(count > 10){
    break;
  }

  numbers.push(count);

  count++;
}


console.log( 'De 0 a 10:', numbers );


/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/

var numbers = [];

for( var count = 0; count <= 20; count++ ) {

  if( count % 2 !== 0 ) {
    continue;
  }

  numbers.push(count);
}


console.log( 'Pares de 0 a 20:', numbers );

})();

