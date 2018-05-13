/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Gaúcho';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// Fonte: https://pt.wikipedia.org/wiki/Campeonato_Ga%C3%BAcho_de_Futebol_de_2018_-_S%C3%A9rie_A

var teams = ['Brasil de Pelotas', 'Caxias do Sul', 'Internacional', 'São José', 'Veranópolis']

console.log( 'Times que estão participando do campeonato:', teams );

/*
[
	'Brasil de Pelotas',
	'Caxias do Sul',
	'Internacional',
	'São José',
	'Veranópolis'
]

*/
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
function showTeamPosition(position) {
	var index = position - 1;

	if(index >= 0 && index < teams.length) {
		return `O time que está em ${position} lugar é o ${teams[index]}.`;
	}

	return "Não temos a informação do time que está nessa posição."
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0); // Não temos a informação do time que está nessa posição.
showTeamPosition(1); // "O time que está em 1 lugar é o Brasil de Pelotas.
showTeamPosition(4); // O time que está em 4 lugar é o São José.
showTeamPosition(6); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
function increment() {
	var i = 20;

	while(i >= 20 && i <= 30) {
		console.log(i);
		i++;
	}
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
function convertToHex(colorName) {
	var colorPhrase = `O hexadecimal para a cor ${colorName} é`;

	switch(colorName) {
		case 'blue':
			console.warn(`${colorPhrase} #0000FF.`);
			break;
		case 'red':
			console.warn(`${colorPhrase} #B22222.`);
			break;
		case 'yellow':
			console.warn(`${colorPhrase} #DAA520.`);
			break;
		case 'green':
			console.warn(`${colorPhrase} #9ACD32.`);
			break;
		case 'black':
			console.warn(`${colorPhrase} #000000.`);
			break;
		default:
			console.warn(`Não temos o equivalente hexadecimal para ${colorName}.`);
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('yellow'); // O hexadecimal para a cor yellow é #DAA520.
convertToHex('black');  //O hexadecimal para a cor red é #000000.
convertToHex('red');    //O hexadecimal para a cor red é #B22222.
convertToHex('green');  // O hexadecimal para a cor blue é #9ACD32.
convertToHex('blue');   //O hexadecimal para a cor blue é #0000FF.
convertToHex('white');  // Não temos o equivalente hexadecimal para white.
convertToHex('gray');   // Não temos o equivalente hexadecimal para gray.
convertToHex('Black');  // Não temos o equivalente hexadecimal para Black.
