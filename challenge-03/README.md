
var pessoa = {nome : 'Luan', sobrenome : 'Melo',sexo : 'Masculino',idade : 19, altura : 183 + 'cm', peso : 82.3 + "kg" , andando : false, caminhouQuantosMetros : 0}

pessoa.fazerAniversario = function(){ pessoa.idade++ }


pessoa.andar = function(x){ pessoa.andando = true; pessoa.caminhouQuantosMetros += x}

pessoa.parar = function(){pessoa.andando = false}


pessoa.nomeCompleto = function(){
return console.log(`Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`)
}

pessoa.mostrarIdade = function() {
return console.log(`Olá, eu tenho ${pessoa.idade} anos!`)
}

pessoa.mostrarPeso = function(){
return console.log(`Eu tenho ${pessoa.peso}`)}


pessoa.mostrarAltura = function(){
return console.log(`Minha altura é ${pessoa.altura}`)}

pessoa.nomeCompleto() // 'Olá! Meu nome é Luan Melo!


pessoa.mostrarIdade() // 'Olá, eu tenho 19 anos!'


pessoa.mostrarPeso() // "Eu peso 82,3 kg"


pessoa.mostrarAltura() // "Minha altura é 183 cm"


pessoa.fazerAniversario(); //20
pessoa.fazerAniversario(); //21
pessoa.fazerAniversario(); //22


pessoa.idade //22


pessoa.andar(2)
pessoa.andar(8)
pessoa.andar(20)


pessoa.andando // True


pessoa.parar()


pessoa.andando // false


pessoa.caminhouQuantosMetros // 30


pessoa.apresentacao = function(){
var x=[];
if (pessoa.sexo == 'Feminino'){
x.push('a')} else { x.push('o')}
if (pessoa.idade <= 1){
x.push('ano')} else { x.push('anos')}
if (pessoa.caminhouQuantosMetros <= 1) {
x.push('metro')} else { x.push('metros')}
return console.log(`Olá, sou ${x[0]} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${x[1]}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${x[2]}!`)}
pessoa.apresentacao()
