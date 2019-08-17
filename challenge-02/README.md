# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x,y){
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var vSoma = soma(1,2) + 5;

// Qual o valor atualizado dessa variável?
 8

// Declare uma nova variável, sem valor.
var vValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor(){
  vValor = 'VALOR'.
  return 'O valor da variável agora é VALOR.';
}

// Invoque a função criada acima.
 addValor();

// Qual o retorno da função? (Use comentários de bloco).
/*  
O valor da variável agora é VALOR.  
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
 
 function validar(x,y,z){
  if( !x || !y || !z ){
    return 'Preencha todos os valores corretamente!';
  }else{
    return x * y * z + 2;
  }
 
 }

// Invoque a função criada acima, passando só dois números como argumento.
  validar(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  // resultado retornado da função validar(1,2); é 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
  validar(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  //o Resultado da função validar(1,2,3); é 8;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

  function calcParam(x,y,z){
  
    if( x && y && z){//Verifica se todos parametros estao preenchidos
      return (x + y) / z;
      
    }else if( !x && !y && !z){//Verifica se nenhum parametro esta preenchido.
      return false;
      
    }else if( (x && !z && !y) || (x && z && !y) || (x && !z && y) ){
      if(z){
        return x + z;
      }else if(y){
        return x + y;
      }else{
        return x;
      }
    }else if((!x && z && !y) || (x && z && !y) || (!x && z && y)){
      if(y){
        return y + z;
      }else if(x){
        return x + z;
      }else{
        return z;
      }    

    }else if((!x && !z && y) || (x && !z && y) || (!x && z && y)){
      if(z){
        return y + z;
      }else if(x){
        return x + y;
      }else{
        return y;
      }       
    }else{
      return null;
    }
    
  }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
  calcParam();      //Resultado null
  calcParam(1);     //Resultado 1;
  calcParam(1,2);   //Resultado 3;
  calcParam(1,2,3); //Resultado 1
```
