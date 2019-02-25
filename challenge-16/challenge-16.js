(function() {

  "use strict"

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.

  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */

  let name = "herton"
  let nomeCompleto = name.split("")
  for (var letra in nomeCompleto) {
    console.log(name.charAt(letra) + " é a " + name.indexOf(name.charAt(letra)) + "ª letra do meu nome.");
  }

  // ?

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
  let fullName = "herton-mota"

  function space(full) {
    return full.replace("-", " ")
  }

  function capitalize(full) {
    let capitalized = full.charAt(0).toUpperCase() + full.slice(1)
    return capitalized
  }

  console.log(fullName)
  console.log(capitalize(space(fullName)))

  // ?

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  let amigos = ["João", "Maria", "Roberto", "Pedro", "Marcos"]
  let amigosTexto = amigos.join(",")

  function sindotoToFormal(text) {
    let index = text.lastIndexOf(",")
    let first = text.substring(0, index)
    let last = text.substring(index + 1, text.length)
    return first + " e " + last
  }

  let novosAmigos = sindotoToFormal(amigosTexto)

  console.log(novosAmigos.concat(" são meus amigos."));
  // ?

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  let updateAmigos = novosAmigos.replace("Roberto", "Roberta")
  let inicio = updateAmigos.indexOf("Roberta")
  let fim = (updateAmigos.indexOf("Roberta") + "Roberta".length)

  console.log('Era "Roberto", agora é:' + updateAmigos.slice(inicio, fim));
  // ?

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  let fernando = "Fernando"
  console.log(fernando.substring(fernando.indexOf("nando"), fernando.length));
  // ?

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  // console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
  // ?

  let myName = "herton"

  function intercaled(name) {
    let parts = name.split("")
    
    for (var index in parts) {
      (index % 2 == 0) ? parts[index] = parts[index].toUpperCase(): parts[index] = parts[index].toLowerCase()
    }

    return parts.join()
  }

  console.log(intercaled(myName));

})();
