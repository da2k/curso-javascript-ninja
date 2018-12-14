(function() {
  "use strict";
  /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse  à ele.
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
  console.log("As letras do seu nome:");
  var name = "Leo";
  for (var i = 0; i < name.length; i++) {
    console.log(name[i] + " é a " + (i + 1) + "ª letra do meu nome.");
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
  console.log("\nNome convertido à partir de um slug:");
  var fullName = "leonardo-antonio-de-deus";
  function transformName(name) {
    var name = name.charAt(0).toUpperCase() + name.slice(1);
    while (name.indexOf("-") > -1) {
      var index = name.indexOf("-") + 1;
      name = name.replace("-", " ");
      name =
        name.slice(0, index) +
        name.charAt(index).toUpperCase() +
        name.slice(index + 1);
    }
    return name;
  }
  console.log(fullName);
  console.log(transformName(fullName));

  console.log("\nNome convertido à partir de um slug: --versão correção--");
  var newFullName = fullName
    .split("-")
    .map(function(name) {
      return name[0].toUpperCase() + name.slice(1);
    })
    .join(" ");

  console.log(fullName);
  console.log(newFullName);
  /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
  console.log("\nMeus amigos:");

  var amigos = ["João", "Maria", "Roberto", "Pedro", "Marcos", "Tião"];
  function amigosString(arr) {
    var amigos = arr.join(", ");
    var amigos =
      amigos.slice(0, amigos.lastIndexOf(",")) +
      " e" +
      amigos.slice(amigos.lastIndexOf(",") + 1);
    return amigos.concat(" são meus amigos");
  }

  console.log(amigosString(amigos));

  console.log("\nMeus amigos: --versão correção--");
  var frase = amigos
    .reduce(function(acumulado, atual, index) {
      var separador = amigos.length - 1 === index ? " e " : ", ";
      return acumulado + separador + atual;
    })
    .concat(" são meus amigos");
  console.log(frase);
  /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
  console.log('\nEra "Roberto", agora é:');
  console.log("Roberto".replace("to", "ta"));

  /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
  console.log("\nParte de uma string:");
  console.log("Fernando".substring(8, 3));

  /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
  console.log("\nNome com letras intercaladas entre caixa alta e baixa:");
  var myName = "LEONARDO";
  function doido(name) {
    for (var i = 0; i <= name.length; i++) {
      if (i % 2 === 0) {
        name =
          name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      } else {
        name =
          name.slice(0, i) + name.charAt(i).toLowerCase() + name.slice(i + 1);
      }
    }
    return name;
  }

  console.log(doido(myName));

  console.log(
    "\nNome com letras intercaladas entre caixa alta e baixa: --versão correção--"
  );
  var myNewName = [];
  for (var i = 0; i < myName.length; i++) {
    myNewName.push(
      i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase()
    );
  }
  console.log(myNewName.join(""));
})();
