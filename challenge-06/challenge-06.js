/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulistão';
console.log( championship );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['São Paulo', 'Santos', 'Palmeiras', 'Ponte Preta','Portuguesa'];

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
function showTeamPosition(rank){
	switch(rank){
		case 1:
		var position = rank - 1;
		console.log('O time que está em ' + rank + 'º lugar é o ' + teams[position] + '.');
		break;
		case 2:
		var position = rank - 1;
		console.log('O time que está em ' + rank + 'º lugar é o ' + teams[position] + '.');
		break;
		case 3:
		var position = rank - 1;
		console.log('O time que está em ' + rank + 'º lugar é o ' + teams[position] + '.');
		break;
		case 4:
		var position = rank - 1;
		console.log('O time que está em ' + rank + 'º lugar é o ' + teams[position] + '.');
		break;
		case 5:
		var position = rank - 1;
		console.log('O time que está em ' + rank + 'º lugar é o ' + teams[position] + '.');
		break;
		default:
		console.log('Não temos a informação do time que está nessa posição.');

	}
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1) // O time que está em 1º lugar é o São Paulo.
showTeamPosition(3) // O time que está em 3º lugar é o Palmeiras.
showTeamPosition(4) // O time que está em 4º lugar é o Ponte Preta.
showTeamPosition(5) // O time que está em 5º lugar é o Portuguesa.
showTeamPosition(6) // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 19
while( cont < 30 ){
	cont++;
	console.log(cont);
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
	case 'gray':
	console.log( 'O hexadecimal para a cor ' + cor + ' é #808080.');
	break;
	case 'navy':
	console.log( 'O hexadecimal para a cor ' + cor + ' é #000080.');
	break;
	case 'gold':
	console.log( 'O hexadecimal para a cor ' + cor + ' é #FFD700.');
	break;
	case 'green':
	console.log( 'O hexadecimal para a cor ' + cor + ' é #008000.');
	break;
	case 'chocolate':
	console.log( 'O hexadecimal para a cor ' + cor + ' é #D2691E.');
	break;
	default:
	console.log('Não temos o equivalente hexadecimal para ' + cor + '.');
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('gray') //O hexadecimal para a cor gray é #808080.
convertToHex('navy') //O hexadecimal para a cor navy é #000080.
convertToHex('gold') //O hexadecimal para a cor gold é #FFD700.
convertToHex('green') //O hexadecimal para a cor green é #008000.
convertToHex('chocolate') //O hexadecimal para a cor chocolate é #D2691E.
convertToHex('red') //Não temos o equivalente hexadecimal para red.
convertToHex('blue') //Não temos o equivalente hexadecimal para blue.
convertToHex('black') //Não temos o equivalente hexadecimal para black.
