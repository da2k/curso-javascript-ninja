var qualquer = {};

var pessoa = {
  nome: "alane",
  sobrenome: "ribeiro",
  sexo: "feminino",
  idade: 35,
  altura: 1.54,
  peso: 62,
  andando: false,
  caminhouQuantosMetros: 0
};

pessoa.fazerAniversario = function() {
  return pessoa.idade++;
};

pessoa.andar = function(qtd) {
  pessoa.andando = true;
  return (pessoa.caminhouQuantosMetros += qtd);
};

pessoa.parar = function() {
  pessoa.andando = false;
};

pessoa.nomeCompleto = function() {
  return "Meu nome completo é " + pessoa.nome + " " + pessoa.sobrenome;
};

pessoa.mostrarIdade = function() {
  return "Olar, eu tenho " + pessoa.idade + " anos";
};

pessoa.mostrarPeso = function() {
  return "Eu peso " + pessoa.peso + " quilos";
};

pessoa.mostrarAltura = function() {
  return "Minha altura é " + pessoa.altura;
};

pessoa.apresentacao = function() {
  var artigo;
  if (pessoa.sexo === "feminino") {
    artigo = "a";
  } else {
    artigo = "o";
  }
  console.log(artigo);

  var ano;
  if (pessoa.idade > 1) {
    ano = "anos";
  } else {
    ano = "ano";
  }
  console.log(ano);

  var metro;
  if (pessoa.caminhouQuantosMetros === 1) {
    metro = "metro";
  } else {
    metro = "metros";
  }

  var eu =
    "Olar, eu sou " +
    artigo +
    " " +
    pessoa.nome +
    " " +
    pessoa.sobrenome +
    ", tenho " +
    pessoa.idade +
    " " +
    ano +
    ", tenho " +
    pessoa.altura +
    " de altura, meu peso é " +
    pessoa.peso +
    " quilos e, só hoje, eu já caminhei " +
    pessoa.caminhouQuantosMetros +
    " " +
    metro;

  return eu;
};
