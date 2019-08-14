# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos
function soma(x, y) {
x = x + y;
return x;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
function soma(x, y) {
x = x + y + 5;
return x;
}

// Qual o valor atualizado dessa variável?
x = 27;
y = 20;

// Declare uma nova variável, sem valor.
var a = null

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor(a) {
a = 15;
return("\n O valor da variável agora é valor: ", a);
}

// Invoque a função criada acima.
adicionarValor()

// Qual o retorno da função? (Use comentários de bloco).
/*O retorno da função será de 15*/
return("\n O valor da variável agora é valor: /n", a);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar(x, y, z){
   if( x === null){
   return("\n Preencha todos os argumentos corretamente: /n", x);
       } else if(y === null) {
          return("\n Preencha todos os argumentos corretamente: /n", y);
             } else if(z === null) {
                 return("\n Preencha todos os argumentos corretamente: /n", z);
       }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(5, 10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O primeiro valor
x = 5;
//O segundo valor
y = 10;

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(5, 10, 15)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O primeiro valor
x = 5;
//O segundo valor
y = 10;
//O terceiro valor
z = 15

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function multiplicar(x, y, z){
   if( x !== null){
   return x;
       } else if(y !== null) {
        y = (x + y) / z; 
          return("\n A soma dos elementos é: /n", y);
             } else if(x === null, y === null, z === null) {
                 return false;
             } else if () {
             return null;
       }
   }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
multiplicar(5)          //resultado de x = 5
multiplicar(5, 10)      //resultado de x = 5 e y = 10
multiplicar(5, 10, 15)  //resultado de x = 5, y = 10 e z = 15
