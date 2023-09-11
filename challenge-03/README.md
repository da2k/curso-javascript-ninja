# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

var qualquer;

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

var pessoa = { nome: 'Caio', sobrenome: 'Camizao', sexo: 'Masculino', idade: 30, altura: 1.71, peso: 78, andando: false, caminhouQuantosMetros: 0 };

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function() {
    pessoa.idade ++ ;
}

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

pessoa.andar = function(metros) {
   pessoa.caminhouQuantosMetros += metros;
   pessoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function() {
   if(pessoa.andando === true) {
      return pessoa.andando = false;
   } else {
       return pessoa.andando = true;
   }
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompletado = function() {
... return "Olá! Meu nome é " + pessoa.nome + ' ' + pessoa.sobrenome + "!";
... }

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function() {
... return "Olá! Eu tenho " + pessoa.idade + " anos!";
... }

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function() {
... return "Eu peso " + pessoa.peso + " Kg.";
... }

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function() {
... return "Minha altura é " + pessoa.altura + " m.";
... }

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

'Olá! Meu nome é Caio Camizao!'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

'Olá! Eu tenho 30 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

'Eu peso 78 kg.'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

'Minha altura é 1.71 m.'

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario = function() {
    pessoa.idade += 3;

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

34

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar = function(metros) {
   pessoa.caminhouQuantosMetros *= metros;

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

sim!

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.andar = function(metros) {
   pessoa.caminhouQuantosMetros *= metros;
   pessoa.andando = false;
};

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

Não!

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

9

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

pessoa.apresentacao = function() {
    pessoa.apresentacao = function() {
  if(pessoa.sexo === 'Masculino') {
        return "Olá, eu sou a " + pessoa.nome + ' ' + pessoa.sobrenome + ", tenho " + pessoa.idade + " anos, " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " metros!";
  } else if {
    
  } else if {
    
  } else if {
    
  } else {
    return "Olá, eu sou o " + pessoa.nome + ' ' + pessoa.sobrenome + ", tenho " + pessoa.idade + " anos, " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " metros!";
  }
};

// Agora, apresente-se ;)
?
```
