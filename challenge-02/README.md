# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2) {
  return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var calcula = soma(3, 2) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var tmp;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function novoValor() {
  tmp = 'DBZ'
  return 'O valor da variavel agora e ' + tmp
}

// Invoque a função criada acima.
novoValor();

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variavel agora e
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calcula(num1, num2, num3) {
  if (num1 != undefined || num2 != undefined || num3 != undefined)
    return 'Preencha todos os valores corretamente!';
    
   return num1 * num2 * num3;

}

// Invoque a função criada acima, passando só dois números como argumento.
calcula(3,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
function calcula(3,5,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
30

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function calcula(arg1, arg2, arg3){
    var args = [];
    for (i = 0; i < arguments.length; i++) {
         if(arguments[i]!= undefined && arguments[i] != null){
            args.push(arguments[i]);
         }
     }
    if(args.length == 3)
        return (arg1 + arg2) / arg3;
    else if (args.length ==2)
            return args[0] + args [1];
    else if (args.length == 1)
            return args[0];
    else if (args.length == 0)
            return false;
    else return null;  

}

console.log(calcula(1,2,3,4));

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcula(1);
calcula(1,2);
calcula(1,2,3);
calcula(1,2,3,4);
```
