/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
  'Resende',
  'America RJ',
  'Macaé',
  'Bomsucesso',
  'Goytacaz'
];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function(position) {
  
  if(position > 0 && position <= 5) {
  
    var team = teams[position - 1];
  
    if (team !== undefined)  
      return "O time que está em " + position + "º lugar é o " + team + "."
    return "Não temos a informação do time que está nessa posição.";  
  }
  return "Necessário passar posição válida. Entre 1 e 5, apenas";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // "O time que está em 1º lugar é o Resende."
showTeamPosition(2); // "O time que está em 2º lugar é o America RJ."
showTeamPosition(3); // "O time que está em 3º lugar é o Macaé."
showTeamPosition(4); // "O time que está em 4º lugar é o Bomsucesso."
showTeamPosition(7); // "Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numberTest = 20;

while(numberTest <= 30) {
  console.log(numberTest);
  numberTest++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex= function(color) {
  
  var hex = null;
  
  switch (color) {
    case "red":
        hex = "#ff0000";      
      break;
    case "blue":
        hex = "#3399ff";        
      break;  
    case "orange":    
        hex = "#ff6600";        
      break;
    case "yellow":    
        hex = "#ffff00";        
      break;
    case "pink":    
        hex = "#ff00ff";  
      break;
    default:    
        return "Não temos o equivalente hexadecimal para " + color;      
  }
  
  return "O hexadecimal para a cor " + color + " é " + hex + ".";
  
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex("red"); // O hexadecimal para a cor red é #ff0000.
convertToHex("blue"); // O hexadecimal para a cor blue é #3399ff.
convertToHex("green"); // Não temos o equivalente hexadecimal para green
convertToHex("yellow"); // O hexadecimal para a cor yellow é #ffff00.
convertToHex("orange"); // O hexadecimal para a cor orange é #ff6600.
convertToHex("pink"); // O hexadecimal para a cor pink é #ff00ff.
convertToHex("purple"); // Não temos o equivalente hexadecimal para purple
convertToHex("black"); //Não temos o equivalente hexadecimal para black
