/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "NBA";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ "Chicago Bulls" , "Cleveland Cavaliers" , "New York Knicks" , "Miami Heat" , "Oklahoma City Thunder" ];
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
function showTeamPosition ( posicao ) {
    
    if( posicao < 1 || posicao > 5)
    	return "Não temos a informação do time que está nessa posição.";

    return "O time que esta em " + posicao + "º lugar é o " + teams[ posicao - 1] + ".";

};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que esta em 1º lugar é o Chicago Bulls."
showTeamPosition(0); //"Não temos a informação do time que está nessa posição."
showTeamPosition(2); //"O time que esta em 2º lugar é o Cleveland Cavaliers."
showTeamPosition(3); //"O time que esta em 3º lugar é o New York Knicks."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;
while ( contador < 31 ) {

	console.log(contador++);

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
function convertToHex ( color ) {

	var hexadecimal = "";

	switch(color) {

		case "pink":
			hexadecimal = "#111111";
			break;
		case "black":
			hexadecimal = "#FFFFFF";
			break;
		case "grey":
			hexadecimal = "#444444";
			break;
		case "green":
			hexadecimal = "#111112";
			break;
		case 'white':
			hexadecimal = '#FFF000';
			break;
		default:
			return 'Não temos o equivalente hexadecimal para ' + color + '.';

	}
		return 'O hexadecimal para a cor ' + color + ' é ' + hexadecimal + '.';
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('white'); //"O hexadecimal para a cor white é #FFF000."
convertToHex('a'); //"Não temos o equivalente hexadecimal para a."
convertToHex('pink'); //"O hexadecimal para a cor pink é #111111."
convertToHex('black'); //"O hexadecimal para a cor black é #FFFFFF."
convertToHex('green'); //"O hexadecimal para a cor green é #111112."
convertToHex('grey'); //"O hexadecimal para a cor grey é #444444."
convertToHex('purple'); //"Não temos o equivalente hexadecimal para purple."
convertToHex('jyn'); //"Não temos o equivalente hexadecimal para jyn."
