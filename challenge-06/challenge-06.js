/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship ='Campeonato Carioca';
console.log(championship); // 'Campeonato Carioca'

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams =['Flamengo','Fluminense','Vasco','Botafogo','Madureira'];
console.log( 'Times que estão participando do campeonato:', teams );
//'Times que estão participando do campeonato: [ 'Flamengo', 'Fluminense', 'Vasco', 'Botafogo', 'Madureira' ]'
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
function showTeamPosition(position){
  var time = teams[position-1];
  var frase = 'O time que está em '+ position +'º lugar é o ' + time;
  var frase2 = 'Não temos a informação do time que está nessa posição.';
  
  return (position<=5 && position>=1)?frase:frase2;
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); //'O time que está em 1º lugar é o Flamengo'
console.log(showTeamPosition(2)); //'O time que está em 2º lugar é o Fluminense'
console.log(showTeamPosition(3)); //'O time que está em 3º lugar é o Vasco'
console.log(showTeamPosition(4)); //'O time que está em 4º lugar é o Botafogo'
console.log(showTeamPosition(6)); //'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter =20;
while(counter<=30){
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
function convertToHex(color){
         var hexCode = {
             black: '#000000',
             blue: '#0000ff',
             green: '#00ff00',
             red: '#ff0000',
             white: '#ffffff'
         };
  
	var fullFrase = 'O Hexadecimal para a cor ' + color + ' é ' + hexCode[color];
	var emptyFrase = 'Não temos o equivalente hexadecimal para ' + color + ' .';	
  
	switch(color){
		case 'black':
			return fullFrase; 
			break;
		case 'blue':
			return fullFrase; 
			break;
		case 'green':
			return fullFrase; 
			break;
		case 'red':
			return fullFrase;
			break;
		case 'white':
			return fullFrase;
			break;
		default:
			return emptyFrase;
			
	}
};


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('blue')); //'O Hexadecimal para a cor blue é #0000ff'
console.log(convertToHex('red')); //'O Hexadecimal para a cor red é #ff0000'
console.log(convertToHex('black')); //'O Hexadecimal para a cor black é #000000'
console.log(convertToHex('green')); //'O Hexadecimal para a cor green é #00ff00'
console.log(convertToHex('yellow')); //'Não temos o equivalente hexadecimal para yellow .'
console.log(convertToHex('white')); //'O Hexadecimal para a cor white é #ffffff'
console.log(convertToHex('cyan')); //'Não temos o equivalente hexadecimal para cyan .'
console.log(convertToHex('gray')); //'Não temos o equivalente hexadecimal para gray .'
