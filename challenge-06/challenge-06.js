/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Champions League";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Barcelona", "Real Madrid", "Manchester United", "Juventos",
  "Milan"
];

console.log('Times que estão participando do campeonato:', teams);

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
var showTeamPosition = (param) => {
  if (param < 1 || param > 5) {
    return console.log(
      "Não temos a informação do time que está nessa posição.");
  }
  return console.log("O time que está em " + param + "º lugar é o " + teams[
    param - 1]);
}

showTeamPosition(2);
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1);
showTeamPosition(3);
showTeamPosition(4);
showTeamPosition(7);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;

while(i <= 30){
    console.log(i++);
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
var convertToHex = (cor) => {
    var hex;
    switch(cor){
        case "Vermelho": {
            hex = "#ff0000";
            break;
        }
        case "Azul": {
            hex = "#0000ff";
            break;
        }
        case "Verde": {
            hex = "#24da1e";
            break;
        }
        case "Roxo": {
            hex = "#993399";
            break;
        }
        case "Amarelo": {
            hex = "#ffff00";
            break;
        } 
        default: return console.log( "Não temos o equivalente hexadecimal para " + cor);
    }
    console.log("O hexadecimal para a cor "+ cor +" é "+ hex);
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("Verde");
convertToHex("Amarelo");
convertToHex("Roxo");
convertToHex("Azul");
convertToHex("Vermelho");
convertToHex("Marrom");
convertToHex("Preto");
convertToHex("Branco");