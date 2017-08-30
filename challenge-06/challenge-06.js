/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Premier League';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Tottenham', 'Chelsea', 'City', 'United', 'Liverpool' ];

console.log( 'Times que estão participando do campeonato:', teams );
Times que estão participando do campeonato: [ 'Tottenham', 'Chelsea', 'City', 'United', 'Liverpool' ]
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
function showTeamPosition(numPar){
	if ( numPar > 0 && numPar < 6 ) { 
	    return 'O time que está em ' + numPar + 'º ' + 'lugar é o ' + teams[--numPar] + '.';
	  }else {
	  	return 'Não temos a informação do time que está nessa posição.';
	  }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
> console.log(showTeamPosition(1));
O time que está em 1º lugar é o Tottenham.
undefined
> console.log(showTeamPosition(2));
O time que está em 2º lugar é o Chelsea.
undefined
> console.log(showTeamPosition(5));
O time que está em 5º lugar é o Liverpool.
undefined
> console.log(showTeamPosition(6));
Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while (num < 31){
	console.log(num);
	num++;
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
function convertToHex(cor) {
	switch(cor){
		case 'red': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #ff0000.';
		    breack;
		case 'black': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #000000.';		    
		    breack;
		case 'green': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #49b675.';		
		    breack;
		case 'yellow': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #fce903.';		
		    breack;
		case 'white': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #ffffff.';	
		    breack;
		case 'orange': 
		    return 'O hexadecimal para a cor ' + cor +  ' é #fc9303.';	
		    breack;
	  default:
	      return 'Não temos o equivalente hexadecimal para ' + cor + '.';
	  }
	}  
		    		    
		    			    	    		    


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
> console.log(convertToHex('red'));
O hexadecimal para a cor red é #ff0000.
undefined
> console.log(convertToHex('green'));
O hexadecimal para a cor green é #49b675.
undefined
> console.log(convertToHex('blue'));
Não temos o equivalente hexadecimal para blue.
undefined
> console.log(convertToHex('orange'));
O hexadecimal para a cor orange é #fc9303.
undefined
> console.log(convertToHex('yellow'));
O hexadecimal para a cor yellow é #fce903.
undefined
> console.log(convertToHex('white'));
O hexadecimal para a cor white é #ffffff.
undefined
> console.log(convertToHex('black'));
O hexadecimal para a cor black é #000000.
undefined
> console.log(convertToHex('pink'));
Não temos o equivalente hexadecimal para pink.
undefined
>
