# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( x,y ){
	return  x + y;
}
soma (15, 8);


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var total = soma (15, 8)+5;

// Qual o valor atualizado dessa variável?
28

// Declare uma nova variável, sem valor.
var semvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornavalor(semvalor){
	var semvalor;
  return semvalor;
	
}
// Invoque a função criada acima.
retornavalor("valor");


// Qual o retorno da função? (Use comentários de bloco).
/*
Fiz uma função chamada retornavalor com um argumento semvalor. 
Abaixo coloquei a varíavel semvalor. E retornei ele.
*/

valor

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tree( w, z, s){
  
  if( !w || !z || !s ){
   
    return "Preencha todos os valores corretamente!";
		
	}else{
		return (w*z*s)+2;
	}

}

// Invoque a função criada acima, passando só dois números como argumento.
tree( 2, 4, '' );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//como o valor do terceiro é nulo, aparece a mensagem "Preencha todos os valores corretamente!".
Preencha todos os valores corretamente!


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tree( 1, 2, 3 );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//entra na condição do else logo os valores multiplicaram e depois soma com 2.
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
-01
function valores(valor1,valor2, valor3){


  //com um argumento 
  if(valor1 && !valor2 && !valor3){
  
    return valor1; 
  }
  //RESULTADO 1
  /*=-------------------------*/
  //com dois argumentos 
  else if(valor1 && valor2 && !valor3){
    return valor1+valor2;
  
  }
  //RESULTADO 3
  /*=-------------------------*/
  //com tres argumentos
  else if( valor1 && valor2 && valor3){
    return (valor1+valor2)/3;
  }
  //RESULTADO 4
  /*=-------------------------*/
  //com nenhum argumento
  else if(!valor1 && !valor2 && !valor3){
    return false;
  }
  //RESULTADO false
  /*=-------------------------*/
  
  else{
    return null;
  }


}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
//com um argumento 
valores(1,'',''); // Resultado 1

//com dois argumentos
valores(1,2,'');  // resultado 3

//com tres argumentos
valores(3,9,5); // resultado 4

//com nenhum argumento
valores('','',''); // resultado false

