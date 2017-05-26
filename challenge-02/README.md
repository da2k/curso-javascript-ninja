# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(param1, param2){
  return param1 + param2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var soma = soma(30,10) + 5;

// Qual o valor atualizado dessa variável?
45

// Declare uma nova variável, sem valor.
var num;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor(){
 num = 10;
  return "O valor da variável agora é: " + num + "." + " Onde " + num + " é o novo valor da variável";
}

// Invoque a função criada acima.
valor();

// Qual o retorno da função? (Use comentários de bloco).
> O valor da variável agora é: 10. Onde 10 é o novo valor da variável

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function resulMult(param1, param2, param3){
  if(param1 == undefined || param2 == undefined || param3 == undefined){
    return "Preencha todos os valores corretamente!"
  }else{
    return (param1 * param2 * param3) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(resulMult(2, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
> Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(resulMult(2, 2, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testeArgumentos(param1, param2, param3){
  if(param1 !== undefined && param2 == undefined && param3 == undefined){
    return "O valor do primeiro argumento é: " + param1;

  }else if(param1 !== undefined && param2 !== undefined && param3 == undefined){
    return "A soma dos dois argumentos são: " + (param1 + param2);

  }else if(param1 !== undefined && param2 !== undefined && param3 !== undefined){
    return (param1 + param2) / param3;

  } else if(param1 == undefined && param2 == undefined && param3 == undefined){
    return false;

  } else {
    return null
  }
}

console.log(testeArgumentos(20, 10, 50));

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

testeArgumentos(20)
> O valor do primeiro argumento é: 20

testeArgumentos(20, 10)
> A soma dos dois argumentos são: 30

testeArgumentos(20, 10, 50)
> 0.6

testeArgumentos()
> false

```
