var pessoa = {
    nome: "Ricardo",
    sobreNome: "Rodrigues",
    sexo: "M",
    idade: 43,
    altura: 1.83,
    peso: 165,
    andando: false,
    caminhouQuantosMetros: 0
} ;

pessoa.fazerAniversario = function() {
    pessoa.idade++ ;
} ;

pessoa.andar = function(args) {
    pessoa.caminhouQuantosMetros += args ;
    pessoa.andando = true ;
}

pessoa.parar = function() {
    pessoa.andando = false ;
} ;

pessoa.nomeCompleto = function() {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobreNome}!` ;
} ;

pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${pessoa.idade} anos!` ;
} ;

pessoa.mostrarPeso = function() {
    return `Eu peso ${pessoa.peso}Kg.` ;
} ;

pessoa.mostrarAltura = function() {
    return `Minha altura é ${pessoa.altura}m.` ;
} ;

pessoa.nomeCompleto() ; // o resultado foi 'Olá! Meu nome é Ricardo Rodrigues!'

pessoa.mostrarIdade() ; // o resultado foi 'Olá, eu tenho 43 anos!'

pessoa.mostrarPeso() ; // o resultado foi 'Eu peso 165Kg.'

pessoa.mostrarAltura() ; // o resultado foi 'Minha altura é 1.83m.'

pessoa.fazerAniversario() ;
pessoa.fazerAniversario() ;
pessoa.fazerAniversario() ;

pessoa.mostrarIdade() ; // o resultado foi 'Olá, eu tenho 46 anos!'

pessoa.andar(10) ;
pessoa.andar(20) ;
pessoa.andar(30) ;

var isWalking = pessoa.andando ? "Está Andando!" : "Está parada!" ;

pessoa.parar() ;

isWalking = pessoa.andando ? "Está Andando!" : "Está parada!" ;

pessoa.caminhouQuantosMetros //  a pessoa caminhou 60m.

pessoa.apresentacao = function() {
    var result, juncao = "a", juncaoIdade = "", juncaoMetros = "" ;
    if (pessoa.sexo === "M") {
        juncao = "o" ;
    }
    if (pessoa.idade !== 1) {
        juncaoIdade = "s"
    }
    if (pessoa.caminhouQuantosMetros !== 1) {
        juncaoMetros = "s"
    }
    result = `Olá, eu sou ${juncao} ${pessoa.nome} ${pessoa.sobreNome}, tenho ${pessoa.idade} ano${juncaoIdade}, meu peso é ${pessoa.peso} e, só hoje caminhei ${pessoa.caminhouQuantosMetros} metro${juncaoMetros}!`
    return result ;
} ;

pessoa.apresentacao() ;