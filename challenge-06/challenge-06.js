/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Ponte Preta'];

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
// usando switch
function showTeamPosition(posicao) {
	    switch (posicao - 1) {
		case 0:
			return 'O time está em ' +  posicao + '° lugar é o time ' + teams[posicao-1];
			break;
		
		case 1:
			return 'O time está em ' +  posicao + '° lugar é o time ' + teams[posicao-1];
			break;
	         case 2:
			return 'O time está em ' +  posicao + '° lugar é o time ' + teams[posicao-1];			
			break;
		 case 3: 
			return 'O time está em ' +  posicao + '° lugar é o time ' + teams[posicao-1];
			break;
		 case 4:
		        return 'O time está em ' +  posicao + '° lugar é o time ' + teams[posicao-1];
			break;
  		 default:
		        return 'Não temos informação do time que está nessa posição';
			break;
	    }								
}
// usando operador ternário
function showTeamPosition(posicao) {
	return posicao < 1 || posicao > 5 ? 'Não temos informações do time que está nessa posição' : ' O time que  está em ' + posicao + '° lugar é o ' + teams[posicao -  1] + '.'; 
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(2))
console.log(showTeamPosition(4))
console.log(showTeamPosition(1))
console.log(showTeamPosition(6))

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while (counter <= 30) {
	console.log(counter++);
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
function convertToHex(color) {
	 var message = 'O hexadecimal da cor ' + color + ' é ';
	    switch(color) {
			            case 'black':
			                return message + '#000000';
			                break;
			            case 'white':
			                return message + '#ffffff';
			                break;
			            case 'red':
			                return message + '#ff0000';
			               	break;
			            case 'blue':
			                return message + '#0000ff';
			                break;
			            case 'gray':
			            	return message + '#808080';
			                break;
			            default:
			                return 'Não temos o equivalente hexadecimal para ' + color + '.';
			        }


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red')) // "O hexadecimal da cor red é #ff0000"
console.log(convertToHex('green')) // "Não temos o equivalente hexadecimal para green."
console.log(convertToHex('blue')) // "O hexadecimal da cor blue é #0000ff"
console.log(convertToHex('black')) // "O hexadecimal da cor black é #000000"
console.log(convertToHex('yellow')) // "Não temos o equivalente hexadecimal para yellow."
console.log(convertToHex('gray')) // "O hexadecimal da cor gray é #808080"
console.log(convertToHex('white')) // "O hexadecimal da cor white é #ffffff"
console.log(converToHex('dark-blue')) // "Não temos o equivalente hexadecimal para dark-blue."

