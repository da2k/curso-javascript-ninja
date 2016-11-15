# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function myFunc(x, y){
  return x + y;
}
  
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var varFunc = myFunc(5, 5);
varFunc += 5;

// Qual o valor atualizado dessa variável?

// 5

// Declare uma nova variável, sem valor.

var myVar1;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function myFunc1(x){
  myVar1 = x;
  return " O valor da variável agora é: " + myVar1; 
}

// Invoque a função criada acima.

myFunc1(10);

// Qual o retorno da função? (Use comentários de bloco).

/* O valor da variável agora é : 10 */  

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function myFunc2(x, y, z){
  var a = x;
  var b = y;
  var c = z;
  if(a == null || b == null || c == ull){
    return " Preencha todos os valores corretamente! ";
  }else{
    return a * b * c + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.

myFunc2(5, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

myFunc2(5, 5, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 127

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function myFunc3(x, y, z){
  var a = x;
  var b = y;
  var c = z;
  if(a == null && b == null && c == null){
    return false;
  }else if(a != null && b != null && c != null){
    return (a + b) / c;
  }else if( (a != null || b != null || c != null) ){
    var arr = [a, b, c];
    var arrTam = arr.length;
    switch(arrTam){
      case 1:
      arrTam == 1 return arr; break;
      case 2:
      arrTam == 2 return arr[0] + arr[1] + arr[2]; break;
      default:
      return null;
    }
   }
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

myFunc3(); // false
myFunc3(2,2,2); // 2
myFunc3(2); // 2 
myFunc3(2,2); // 4
```
