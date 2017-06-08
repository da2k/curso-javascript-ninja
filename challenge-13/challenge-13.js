(function(){
	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	console.log( 'O array em formato de string é:' );
	var arr = [1, 2, 3, 4, 5];
	console.log(arr.toString());

	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	
	var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];

	var sudeste = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo'];

	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	var brasil = sul.concat(sudeste);
	console.log(brasil);

	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	console.log( '\nMais estados adicionados:' );
	brasil.unshift('Amazonas', 'Acre', 'Amapá');
	console.log(brasil);

	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	console.log(brasil.shift())

	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	
	var newSul = brasil.slice(3,6);

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	console.log(newSul);

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	console.log(brasil);

	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	
	var nordeste = ['Maranhão', 'Piaui', 'Bahia', 'Ceará', 'Sergipe', 'Alagoas', 'Pernambuco', 'Paraiba', 'Rio Grande do Norte'];

	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	
	console.log(nordeste);

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	var newSudeste = brasil.splice(5, 8);

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	
	brasil = brasil.concat(nordeste);

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );
	
	console.log(newSudeste);

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	
	console.log(brasil);

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/
	
	brasil.forEach( function(item, index) {
		 newBrasil = [{id: index, estado: item}];
	});

	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );
	console.log(newBrasil);

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	
	var teste = brasil.every(function(item){
		return item.length < 7;
	})
	teste ? console.log('Sim, todos os estados tem mais de 7 letras!') : console.log('Nem todos os estados tem mais de 7 letras!');

	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
	
	var verificar = brasil.some(function(item){
		brasil.item === 'Ceará';
	})

	verificar ? console.log('Ceará está incluído!') : console.log('Ceará não foi incluído :(');
	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/
	var map = newBrasil.map(function(item){
		return {
			id: item.id + 1,
			estado: item.estado + ' pertence ao Brasil.'
		};
	})

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\nnewBrasil agora com mais informações:' );
	console.log(map);

	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	var filter = map.filter(function(item){
		return item.id % 2 === 0;
	})

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	console.log(filter);
	
}())