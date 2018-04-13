# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var myVar = {};

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
  nome: 'Joel',
  sobrenome: 'Spinelli',
  sexo: 'Masculino',
  idade: 29,
  altura: 1.72,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){
  this.idade++;
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
pessoa.andar = function(metros){
  this.caminhouQuantosMetros += metros;
  this.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
  this.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
  return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostraIdade = function(){
  return "Olá, eu tenho " + this.idade + " anos!";
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function() {
  return "Eu peso " + this.peso + "Kg.";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(){
  return "Minha altura é " + this.altura + "m.";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto(); //'Olá! Meu nome é Joel Spinelli!'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostraIdade(); //'Olá, eu tenho 29 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso(); //'Eu peso 90Kg.'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura(); //'Minha altura é 1.72m.'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.idade;

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(3);
pessoa.andar(1);
pessoa.andar(2);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando; //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando; //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros; //6

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
pessoa.apresentacao = function(){
  return "Olá, eu sou o "+ this.nome + " " + this.sobrenome + ", tenho " + this.idade + " anos, " + this.altura + ", meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metros!";
}


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
pessoa.apresentacao = function(){
  var retorno = "Olá, ";
  if(this.sexo === "Feminino"){
    retorno += "eu sou a "+ this.nome + " " + this.sobrenome;
  }else{
    retorno += "eu sou o "+ this.nome + " " + this.sobrenome;
  }
  
  if(this.idade === 1) {
     retorno += ", tenho " + this.idade + " ano, ";
  }else {
     retorno += ", tenho " + this.idade + " anos, ";
  }
    
  retorno += this.altura + ", meu peso é " + this.peso + " e só hoje, eu já caminhei ";
  
  if(this.caminhouQuantosMetros === 1){
    retorno += this.caminhouQuantosMetros + " metro!";
  }else{
    retorno += this.caminhouQuantosMetros + " metros!";
  }
  return retorno;
}

// Agora, apresente-se ;)
?
```
