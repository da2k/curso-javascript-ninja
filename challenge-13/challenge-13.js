(function(){
	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	console.log( 'O array em formato de string é:' );
	
	var arr = [1, 2, 3, 4];
	
	arr.toString() // "1,2,3,4"

	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	
	var sul = ['Santa Catarina', 'Paraná', 'Rio Grande do Sul'];
	var sudeste = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
	

	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	var brasil = sul.concat(sudeste);
	
	console.log(brasil) // Santa Catarina,Parana,Rio Grande do SulSão Paulo,Rio de Janeiro,Minas Gerais,Espírito Santo
	
	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	console.log( '\nMais estados adicionados:' );
	
	brasil.unshift('norte', 'Pará', 'Amazonas');
	
	console.log(brasil)  // Array(10) [ "norte", "Pará", "Amazonas", "Santa Catarina", "Parana", "Rio Grande do Sul", "São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo" ]

	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	
	brasil.shift() // 'norte'

	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	
	var newSul = brasil.slice(2,5); // Array(3) [ "Santa Catarina", "Parana", "Rio Grande do Sul" ]
	
	

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	
	console.log(newSul) //	Array(3) [ "Santa Catarina", "Parana", "Rio Grande do Sul" ];

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	console.log(brasil); // Array(9) [ "Pará", "Amazonas", "Santa Catarina", "Parana", "Rio Grande do Sul", "São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo" ]

	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	
	var nordeste = ['Maranhão','Piauí','Cerá','Rio Grande do Norte','Pernambuco', 'Paraíba', 'Sergipe', 'Alagoas', 'Bahia'];

	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	
	console.log(nordeste) // Array(9) [ "Maranhão", "Piauí", "Cerá", "Rio Grande do Norte", "Pernambuco", "Paraíba", "Sergipe", "Alagoas", "Bahia" ]

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	
	var newSudeste = brasil.splice(5)
	
	console.log(newSudeste) // Array(4) [ "São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo" ]

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	brasil = brasil.concat(nordeste);

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );

	console.log(newSudeste); // Array(4) [ "São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo" ]

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	
	cosole.log(brasil) // Array(13) [ "Pará", "Amazonas", "Santa Catarina", "Parana", "Maranhão", "Piauí", "Cerá", "Rio Grande do Norte", "Pernambuco", "Paraíba", … ]

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/

   var newBrasil = [];
    brasil.forEach(function(item, index){
        newBrasil.push({
            id: index,
            estado: item
        });
    });

	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );
	
	console.log(newBrasil)
	/*
	0: Object { id: 0, estado: "Pará" }
​
	1: Object { id: 1, estado: "Amazonas" }
	​
	2: Object { id: 2, estado: "Santa Catarina" }
	​
	3: Object { id: 3, estado: "Parana" }
	​
	4: Object { id: 4, estado: "Maranhão" }
	​
	5: Object { id: 5, estado: "Piauí" }
	​
	6: Object { id: 6, estado: "Cerá" }
	​
	7: Object { id: 7, estado: "Rio Grande do Norte" }
	​
	8: Object { id: 8, estado: "Pernambuco" }
	​
	9: Object { id: 9, estado: "Paraíba" }
	​
	10: Object { id: 10, estado: "Sergipe" }
	​
	11: Object { id: 11, estado: "Alagoas" }
	​
	12: {…}
	*/

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	
		
	var every = brasil.every(function(item){
		return item.length > 7;
	});

	console.log(every ? "Sim, todos os estados tem mais de 7 letras!" :  "Nem todos os estados tem mais de 7 letras!");


	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
	
	var some = brasil.some(function(item){
		return item === 'Cerá' ;
	});

	console.log(some ? "Ceará está incluído!" : "Ceará não foi incluído :("); //  Ceará está incluído!



	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/
	
 var map = newBrasil.map(function(item, index){
        return {
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil'
        };
    });

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\nnewBrasil agora com mais informações:' );
	
	console.log(map)
	/*
	0: Object { id: 1, estado: "Pará pertence ao Brasil" }
​
1: Object { id: 2, estado: "Amazonas pertence ao Brasil" }
​
2: Object { id: 3, estado: "Santa Catarina pertence ao Brasil" }
​
3: Object { id: 4, estado: "Parana pertence ao Brasil" }
​
4: Object { id: 5, estado: "Maranhão pertence ao Brasil" }
​
5: Object { id: 6, estado: "Piauí pertence ao Brasil" }
​
6: Object { id: 7, estado: "Cerá pertence ao Brasil" }
​
7: Object { id: 8, estado: "Rio Grande do Norte pertence ao Brasil" }
​
8: Object { id: 9, estado: "Pernambuco pertence ao Brasil" }
​
9: Object { id: 10, estado: "Paraíba pertence ao Brasil" }
​
10: Object { id: 11, estado: "Sergipe pertence ao Brasil" }
​
11: Object { id: 12, estado: "Alagoas pertence ao Brasil" }
​
12: {…}
	*/

	
	
	
	
	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	
		var filter = map.filter(function(item, index){
			return item.id % 2 === 0;
		});
	

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	
	console.log(filet)
	/*
0: Object { id: 2, estado: "Amazonas pertence ao Brasil" }
​1: Object { id: 4, estado: "Parana pertence ao Brasil" }
​2: Object { id: 6, estado: "Piauí pertence ao Brasil" }
​3: Object { id: 8, estado: "Rio Grande do Norte pertence ao Brasil" }
​4: Object { id: 10, estado: "Paraíba pertence ao Brasil" }
​5: {…}	
	
	*/

})();
