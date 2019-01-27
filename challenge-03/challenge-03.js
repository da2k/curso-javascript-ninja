var myvar = {}

console.log(myvar);

var pessoa = {
  nome: 'Neto',
  sobrenome: 'alves',
  sexo: 'Masculino',
  idade: 27,
  altura: 1.79,
  peso: 72,
  andando: false,
  caminhouQuantosMetros: 0
}

pessoa.fazerAniversario = function (){
  return pessoa.idade++
}

pessoa.andar = function(distancia){
  pessoa.caminhouQuantosMetros =+ distancia;
  pessoa.andando = true
}


pessoa.parar = function(){
  return pessoa.andando = false
}

// pessoa.parar();

function nomeCompleto() {
  return 'Olá, meu nome é '+ pessoa.nome +' '+ pessoa.sobrenome +''
}

function mostrarIdade(){
  return 'Olá, eu tenho '+ pessoa.idade +' anos'
}


function mostrarPeso(){
  return 'Eu peso '+ pessoa.peso +''
}

function mostrarAltura(){
  return 'Minha altura é: '+ pessoa.altura +''
}

// console.log(nomeCompleto());
// console.log(mostrarIdade());
// console.log(mostrarPeso());
// console.log(mostrarAltura());
//
// pessoa.fazerAniversario();
// pessoa.fazerAniversario();
// pessoa.fazerAniversario();
//
pessoa.andar(90);
pessoa.andar(90);
pessoa.andar(100);

// pessoa.parar();
//
// console.log(pessoa);
//
// console.log(pessoa.caminhouQuantosMetros);

pessoa.apresentacao = function(){
  var orientacao = 'o';
  var qtdano = 'anos'
  var qtdmetro = 'metros'

  if (pessoa.sexo == 'Feminino') {
    orientacao = 'a'
  }
  if (pessoa.idade = 1) {
    qtdano = 'ano'
  }
  if (pessoa.caminhouQuantosMetros <= 1) {
    qtdmetro = 'metro'
  }
  return 'Olá, eu sou '+ orientacao +' '+ pessoa.nome +' '+ pessoa.sobrenome +', tenho '+ pessoa.idade +' '+ qtdano +', '+ pessoa.altura +', meu peso é '+ pessoa.peso +' e, só hoje, eu já caminhei '+ pessoa.caminhouQuantosMetros +' '+ qtdmetro +'!'
}
console.log(pessoa.apresentacao());



// console.log(mostrarAltura());
