# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var praia = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
  nome: 'João',
  sobrenome: 'da Silva',
  sexo: 'Masculino',
  idade: 63,
  altura: 1.81,
  peso: 73,
  andando: false,
  caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function ( aniversarios ) {
  if ( aniversarios !== undefined && aniversarios <= 1 ) {
    pessoa.idade++;
  } else if ( ! isNaN( aniversarios ) ) {
    pessoa.idade += aniversarios;
  } else {
    console.log( 'Insira um valor válido.' );
  }
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function (distancia) {
  pessoa.caminhouQuantosMetros += distancia;
  pessoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
  if( pessoa.andando === true ) {
    pessoa.andando = false;
  } else {
    console.log('Whoops! ' + pessoa.nome + 'já está parada.');
  }
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function () {
  return '"Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome +'!"';
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function () {
  return '"Olá, eu tenho ' + pessoa.idade + ' anos!"';
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function () {
  return '"Eu peso ' + pessoa.peso + 'Kg."';
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function () {
  return '"Minha altura é ' + pessoa.altura + '."';
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto(); // "Olá! Meu nome é João da Silva"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade(); // "Olá, eu tenho 63 anos!"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso(); // "Eu peso 73Kg."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura(); // "Minha altura é 1.81."

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario( 3 );

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.idade; // 66

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar( 3 );
pessoa.andar( 5 );
pessoa.andar( 10 );

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando; // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
if ( pessoa.andando === true ) {
  pessoa.parar();
}

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando; // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros; // 18

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function () {
  
  // Verifica o sexo
  if ( pessoa.sexo.toLowerCase() === 'feminino' ) {
    sexoMasculinoOuFeminino = 'a';
  } else if (pessoa.sexo.toLowerCase() === 'masculino') {
    sexoMasculinoOuFeminino = 'o';
  }

  // Verifica a idade
  if ( pessoa.idade === 1 ) {
    idadePluralOuSingular = 'ano';
  } else if ( pessoa.idade > 1 ) {
    idadePluralOuSingular = 'anos';
  }
  // Verifica distancia caminhada
  if ( pessoa.caminhouQuantosMetros === 1 ) {
    distanciaPluralOuSingular = 'metro';
  } else if ( pessoa.caminhouQuantosMetros > 1 ) {
    distanciaPluralOuSingular = 'metros';
  }

  // Prepara mensagem de saida
  saida = '"Olá, eu sou ' + sexoMasculinoOuFeminino + ' ' + pessoa.nome + ' ' + pessoa.sobrenome + ', ';
  saida += 'tenho ' + pessoa.idade + ' ' + idadePluralOuSingular + ', ';
  saida += pessoa.altura + ', ';
  saida += 'meu peso é ' + pessoa.peso + 'Kg e, ';
  saida += 'só hoje, eu já caminhei ' +pessoa.caminhouQuantosMetros+ ' ' +distanciaPluralOuSingular+ '!"';

  // Retorna mensagem de saida
  return saida;
};

// Agora, apresente-se ;)
pessoa.apresentacao();
/*
"Olá, eu sou o João da Silva, tenho 66 anos, 1.81, meu peso é 73Kg e, só hoje, eu já caminhei 18 metros!"
*/
```
