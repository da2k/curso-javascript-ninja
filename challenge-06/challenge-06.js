/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthias', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Sport'];

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
function showTeamPosition(arg){
	switch(arg){
        case 1: 
		return "O time que está em "+ arg +"º lugar é o "+ teams[0];
    	break;
		case 2: 
		return "O time que está em "+ arg + "º lugar é o "+ teams[1];
    	break;
		case 3: 
		return "O time que está em "+ arg + "º lugar é o "+ teams[2];
    	break;
		case 4: 
		return "O time que está em "+ arg + "º lugar é o "+ teams[3];
    	break;
		case 5: 
		return "O time que está em "+ arg + "º lugar é o "+ teams[4];
    	break;
        default:
		return "Não temos a informação do time que está nessa posição.";
	}
}	

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
"O time que está em 1º lugar é o Corinthias"
console.log(showTeamPosition(2));
"O time que está em 2º lugar é o Cruzeiro"
console.log(showTeamPosition(3));
"O time que está em 3º lugar é o Flamengo"
console.log(showTeamPosition(4));
"O time que está em 4º lugar é o Fluminense"
console.log(showTeamPosition(5));
"O time que está em 5º lugar é o Sport"
console.log(showTeamPosition(6));
"Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter <= 30){
    console.log(counter);
	counter++;
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
function convertToHex(cor){
	switch(cor){
		case "Red":
		return 'O Hexadecimal de Vemelhor é #FF0000';
		break;
        case "Blue":
		return 'O Hexadecimal de Blue é #0000FF';
		break;
        case "Yellow":
		return 'O Hexadecimal de Yellow é #FFFF00';
		break;
        case "Green":
		return 'O Hexadecimal de Green é #008000';
		break;
        case "Pink":
		return 'O Hexadecimal de Pink é #FFC0CB';
		break;
        default: 
		return "Não temos o equivalente hexadecimal para" + cor;
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Red');
"O Hexadecimal de Vemelhor é #FF0000"
convertToHex('Blue');
"O Hexadecimal de Blue é #0000FF"
convertToHex('Yellow');
"O Hexadecimal de Yellow é #FFFF00"
convertToHex('Green');
"O Hexadecimal de Green é #008000"
convertToHex('Black');
"Não temos o equivalente hexadecimal paraBlack"
convertToHex('Purple');
"Não temos o equivalente hexadecimal paraPurple"
convertToHex('Gray');
"Não temos o equivalente hexadecimal paraGray"
convertToHex('Brown');
"Não temos o equivalente hexadecimal paraBrown"
convertToHex('White');
"Não temos o equivalente hexadecimal paraWhite"