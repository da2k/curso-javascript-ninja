(function () {
  'use strict';

  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log('As letras do seu nome:');
  let name = 'Felipe';
  for (let index = 0, len = name.length; index < len; index++) {
    console.log(name.charAt(index) + ' é a ' + (index + 1) +
      'ª letra do meu nome.')
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log('\nNome convertido à partir de um slug:');
  let fullName = 'nina-lopes-medeiros'

  let fullNameSplitted = fullName.split('-');
  let fullNameUppered = '';

  fullNameSplitted.forEach(element => {
    let firstLetter = element.charAt(0).toUpperCase()
    element = firstLetter + element.slice(1);
    fullNameUppered = fullNameUppered + element + ' ';
  });

  console.log(fullName);
  console.log(fullNameUppered);


  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log('\nMeus amigos:');
  let friends = ['Carol', 'Mobral', 'Mhz', 'Deison', 'Piu']

  let friendsString = friends.join();
  let friendsComma = friendsString.lastIndexOf(',');
  friendsString = friendsString.substring(0, friendsComma) + ' e ' +
    friendsString.substr(friendsComma + 1)
  console.log(friendsString.concat(' são meus amigos.'))

  let phrase = friends.reduce(function(acumulado, atual, index) {
    let separator = friends.length - 1 === index ? ' e ' : ', ';
    return acumulado + separator + atual;
  }).concat(' são meus amigos.')

  console.log(phrase);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log('\nEra "Roberto", agora é:');
  let nameRoberto = 'Roberto'
  let secondO = nameRoberto.lastIndexOf('o');

  nameRoberto = nameRoberto.slice(0, secondO) + 'a';

  console.log(nameRoberto);
  console.log('Roberto'.replace('to', 'ta'));

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log('\nParte de uma string:');
  let fer = 'Fernando'

  console.log(fer.substring(3))

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
  let myName = 'gabriEla'
  let styledName = ''
  myName = myName.toLowerCase();

  for (let index = 0; index < myName.length; index++) {
    let letter = myName.charAt(index);

    if (index % 2 != 1) {
      styledName = styledName + letter.toUpperCase();
    } else {
      styledName = styledName + letter;
    }
  }
  console.log(styledName);

})();
