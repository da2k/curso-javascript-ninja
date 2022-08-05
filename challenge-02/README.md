// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let recebe = soma(10, 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(`O valor de recebe é ${recebe}`);//17

// Declare uma nova variável, sem valor.
let vazio;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function mudar(){
  vazio = "O valor da variável agora é VALOR.";
  return vazio;
}

// Invoque a função criada acima.
mudar();

// Qual o retorno da função? (Use comentários de bloco).
 //O valor da variável agora é VALOR.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(x,y,z){
  if(x && y && z){
    return (x*y*z)+2;
  }else{
    return console.log(" Preencha todos os valores corretamente! ");
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(1,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//"Preencha todos os valores corretamente!";

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(1,5,8);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function ex02(n1,n2,n3){
    if(n1 && n2 && n3){
        return console.log((n1 + n2)/2)
    }else if(n2){
        return console.log(n1 + n2)
    }else if(n1){
        return console.log(n1);
    }else if(!(n1)){
        return false
    }else{
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
ex02(10);      //10
ex02(5,10);    //15
ex02(5,10,15); //7.5
ex02();        //fale