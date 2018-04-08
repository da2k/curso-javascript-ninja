(function(){/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var arryson = [true, 10, false, 2.2, 'oi', [1,2]];
console.log( 'O array em formato de string é: '+arryson.toString() );

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná'];
var sudeste = ['São Paulo', 'Rio de Janeiro', 'Espirito Santo', 'Minas Gerais'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = sul.concat(sudeste);
console.log( '\nAlguns Estados do Brasil:' + brasil);

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
var brasil = brasil.concat('Pará', 'Amazonas', 'Amapá');
console.log( '\nMais estados adicionados:'+brasil);

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
var excluido = brasil.shift();
console.log( '\nEstado removido:'+excluido);


/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = [excluido, brasil.slice(0,1).toString(), brasil.slice(1,2).toString()];

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil: ' + newSul );

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil: ' + brasil.join(', '));

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste: ' + nordeste.join(', ') );

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.splice(2,4);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste: ' + newSudeste );

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil: ' + brasil );

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = []; 
brasil.forEach(function(item, index){
	var obj = {id: index, estado: item};
	newBrasil.push(obj);
})
/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil: '+ newBrasil );


/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
var sete = brasil.every(function(item, index, array){
	return brasil[index].length > 7 ;
});
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?: ' + (function(){return sete === true ? 'Sim, todos os estados tem mais de 7 letras!':'Nem todos os estados tem mais de sete letras!';})())


/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
var ceara = brasil.some(function(item, index, array){return brasil[index] === 'Ceará';})

console.log( '\nCeará está incluído em `brasil`? ' + (function(){return ceara === true ? 'Ceará está incluído!' : 'Ceará não foi incluído :('})() );

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = [];
var id = 0;
brasil.map(function(item, index, array ){
	id = index+1;
	item += ' pertence ao Brasil'
	map.push({id, item});
})               
/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações: '+ map );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var filter = [];
map.filter(function(item, index, array){
	if(map[index].id % 2 === 0){
		filter.push(map[index].item);
	}	
})

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par: '+ filter );

})();

//CÓDIGO LIMPO//
(function(){

	var arryson = [true, 10, false, 2.2, 'oi', [1,2]];
	console.log( 'O array em formato de string é: '+arryson.toString() );

	var sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná'];
	var sudeste = ['São Paulo', 'Rio de Janeiro', 'Espirito Santo', 'Minas Gerais'];

	var brasil = sul.concat(sudeste);
	console.log( '\nAlguns Estados do Brasil:' + brasil);

	var brasil = brasil.concat('Pará', 'Amazonas', 'Amapá');
	console.log( '\nMais estados adicionados:' + brasil);

	var excluido = brasil.shift();
	console.log( '\nEstado removido:' + excluido);

	var newSul = [excluido, brasil.slice(0,1).toString(), brasil.slice(1,2).toString()];
	console.log( '\nEstados do Sul do Brasil: ' + newSul );
	console.log( '\nAlguns Estados do Brasil: ' + brasil.join(', '));

	var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']
	console.log( '\nEstados do Nordeste: ' + nordeste.join(', ') );

	var newSudeste = brasil.splice(2,4);
	brasil = brasil.concat(nordeste);
	console.log( '\nEstados em newSudeste: ' + newSudeste );
	console.log( '\nAlguns estados do Brasil: ' + brasil );

	var newBrasil = []; 
	brasil.forEach(function(item, index){
		var obj = {id: index, estado: item};
		newBrasil.push(obj);
	})
	console.log( '\nnewBrasil: \n' + newBrasil );

	var sete = brasil.every(function(item, index, array){
		return brasil[index].length > 7 ;
	});
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?: ' + (function(){return sete === true ? 'Sim, todos os estados tem mais de 7 letras!':'Nem todos os estados tem mais de sete letras!';})())

	var ceara = brasil.some(function(item, index, array){return brasil[index] === 'Ceará';})
	console.log( '\nCeará está incluído em `brasil`? ' + (function(){return ceara === true ? 'Ceará está incluído!' : 'Ceará não foi incluído :('})() );

	var map = [];
	var id = 0;
	brasil.map(function(item, index, array ){
		id = index + 1;
		item += ' pertence ao Brasil'
		map.push({id, item});
	})               
	console.log( '\nnewBrasil agora com mais informações: ' + map );

	var filter = [];
	map.filter(function(item, index, array){
		if(map[index].id % 2 === 0){
			filter.push(map[index].item);
		}	
	})
	console.log( '\nEstados com ID par: ' + filter );
})();
