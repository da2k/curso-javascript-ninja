Escreva aqui sua dúvida
Fazendo como você fez, criando a variável "reduceP" e atribuindo a ela o name.reduce deu certo e quando eu não criei a variável "reduceP", mas tão somente reatribui a variavel "name = name.reduce" deu errado? Veja as imagens e me ajude a entender o que deu errado por favor.

Deu certo:
 
  console.log('\nSeu nome na língua do "P":');
  var name = ['ro','dri','go'];
  var reduceP = name.reduce(function(acumulado, atual){
    return acumulado + ('p' + atual);
  },'')
  console.log(name)

  /*
  Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
  e atribuirá o seu nome invertido (usando o array criado acima).
  */
  console.log('\nInversed Name:');
  var inversedName = name.reduceRight(function(acumulado, atual){
    return acumulado + atual
  })
  console.log(inversedName)

SAÍDA
Seu nome na língua do "P":
[ 'ro', 'dri', 'go' ]

Inversed Name:
godriro
---------------------------------------------------------------------------------------------------------------------
Deu errado: 
console.log('\nSeu nome na língua do "P":');
  var name = ['ro','dri','go'];
  name = name.reduce(function(acumulado, atual){
    return acumulado + ('p' + atual);
  },'')
  console.log(name)

  /*
  Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
  e atribuirá o seu nome invertido (usando o array criado acima).
  */
  console.log('\nInversed Name:');
  var inversedName = name.reduceRight(function(acumulado, atual){
    return acumulado + atual
  })
  console.log(inversedName)

SAÍDA --------------

TypeError: name.reduceRight is not a function
    at c:\Users\Rodrigo\Documents\curso-javascript-ninja\challenge-14\challenge-14.js:102:27
    at Object.<anonymous> (c:\Users\Rodrigo\Documents\curso-javascript-ninja\challenge-14\challenge-14.js:140:2)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)

<!-- Não apague daqui pra baixo! -->
@fdaciuk
