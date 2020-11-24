# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = function(){};

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
    nome: "Emmanuel",
    sobrenome: "Tavares",
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
fazerAniversário: function(){pessoa.idade++;},
// Resultado fica...
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
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
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
}


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
parar: function(){pessoa.andando = false;},  // METODO ADICIONADO

var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},  // METODO ADICIONADO
}


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome, //METODO ADICIONADO
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome,
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
mostrarIdade: "Olá, eu tenho" + " " + pessoa.idade + " " + "anos!", // METODO ADICIONADO
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome,
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},
    mostrarIdade: "Olá, eu tenho" + " " + pessoa.idade + " " + "anos!",
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
mostrarPeso: "Eu peso" + " " + pessoa.peso + " " + "Kg.", // METODO ADICIONADO
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome,
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},
    mostrarIdade: "Olá, eu tenho" + " " + pessoa.idade + " " + "anos!",
    mostrarPeso: "Eu peso" + " " + pessoa.peso + " " + "Kg.", 
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
mostrarAltura: "Minha altura é" + " " + pessoa.altura + " " + "m.", // METODO ADICIONADO
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome,
    sexo: "Masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},
    mostrarIdade: "Olá, eu tenho" + " " + pessoa.idade + " " + "anos!",
    mostrarPeso: "Eu peso" + " " + pessoa.peso + " " + "Kg.",
    mostrarAltura: "Minha altura é" + " " + pessoa.altura + " " + "m.", 
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto // 'Olá! Meu nome é Emmanuel Tavares'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.idade // '43'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.peso // '80'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.altura // 1.72

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversário()
pessoa.fazerAniversário()
pessoa.fazerAniversário()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.idade // 46

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(5)
pessoa.andar(10)
pessoa.andar(3)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando  // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros  // 18

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
var pessoa = {
    nome: "Emmanuel",
    sobrenome: "Tavares",
    nomeCompleto: "Olá! Meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome,
    sexo: "masculino",
    idade: "43",
    altura: 1.72,
    peso: "80",
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversário: function(){pessoa.idade++;},
    andar: function(metros){pessoa.caminhouQuantosMetros += metros; pessoa.andando = true},
    parar: function(){pessoa.andando = false;},
    mostrarIdade: "Olá, eu tenho" + " " + pessoa.idade + " " + "anos!",
    mostrarPeso: "Eu peso" + " " + pessoa.peso + " " + "Kg.",
    mostrarAltura: "Minha altura é" + " " + pessoa.altura + " " + "m.",
    apresentação: function(){
        var artigo;
        var ano;
        if(pessoa.sexo == 'feminino'){
            artigo = "a";
        }else{
            artigo = 'o'
        }
        if(pessoa.idade == '1'){
            ano = "ano";
        }else{
            ano = 'anos'
        }
        return "Olá," + " eu sou " + artigo+ " " + 
        pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + " " + ano + " " + pessoa.altura + 
        ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " metros!"
    
    }
}

// Agora, apresente-se ;)
pessoa.apresentação()  //'Olá, eu sou o Emmanuel Tavares, tenho 43 anos 1.72, meu peso é 80 e, só hoje, eu já caminhei 0 metros!'
//
```

