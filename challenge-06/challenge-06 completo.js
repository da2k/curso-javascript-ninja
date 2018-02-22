//1

var championship = 'Campeonato Gaucho';
console.log(championship);


//2

var teams = ['gremio', 'inter', 'SP', 'Flamengo', 'Palmeiras'];

console.log( 'Times que estão participando do campeonato:', teams );

//3

function showTeamPosition(position) {
	return 'O time que está em '+ position +'º lugar é o ' + teams[position] + '.';
	
}