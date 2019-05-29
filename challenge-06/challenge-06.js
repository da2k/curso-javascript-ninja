/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Brasileirão";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ["Cruzeiro", "Atletico", "Flamengo", "Grêmio","Palmeiras", ];
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
function showTeamPosition(param){
	return param <= teams.length ? "O time que esta em " + param + "º lugar é o " + teams[param - 1] : "Não temos a informação do time que está nessa posição.";
}

console.log(showTeamPosition(5));

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
aux = 1;
while(aux <= teams.length + 1){
	console.log(showTeamPosition(aux));
	aux++;
}

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
aux = 20;
while(aux <= 30){
	console.log(aux);
	aux++;
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
				case 'vermelho': 
		return("O hexadecimal para a cor vermelho é FF0000.");
		break;
				case 'branco': 
		return("O hexadecimal para a cor branco é FFFFFF.");
		break;
				case 'preto': 
		return("O hexadecimal para a cor preto é 000000.");
		break;
				case 'rosa': 
		return("O hexadecimal para a cor rosa é FFC0CB.");
		break;
				default: 
		return("Não temos o hexadecimal  equivalente para " + cor + ".");
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho'));
console.log(convertToHex('branco'));
console.log(convertToHex('preto'));
console.log(convertToHex('rosa'));
console.log(convertToHex('azul'));