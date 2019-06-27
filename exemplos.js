




        /*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function teste(a, b ,c ){
    if(arguments.length == 1){
        return arguments[0]

    }else if(arguments.length == 2){
        return arguments[0] + arguments[1]

    }else if(arguments.length == 3){
            return (arguments[0]+arguments[1])/arguments[2]

    }else if(arguments.length == 0){
        return false;

    }else{
        return null
    }
}


// console.log(teste(4,3,5,6))




                                            // CHALLENGE-03


        var pessoa = {
            nome: 'Pedro Henrique',
            sobrenome: 'Carvalho',
            sexo: 'Masculino',
            idade: 22,
            altura: 1.86,
            peso: 80,
            andando: false,
            caminhouQntsMetros: 0
        }

        pessoa.fazerAniversario = function(){
            this.idade +=1
        }

        pessoa.andar = function(qnt){
            this.caminhouQntsMetros += qnt
            this.andando = true
        }

        pessoa.parar = function(){
            this.andando = false
        }

        pessoa.nomeCompleto = function(){
            return 'Olá! Meu nome é '+this.nome+' '+this.sobrenome+'!';
        }

        pessoa.mostrarIdade = function(){
            return 'Olá, eu tenho '+this.idade+' anos';
        }

        pessoa.mostrarPeso = function(){
            return 'Eu peso '+this.peso+' Kg.';
        }

        pessoa.mostrarAltura = function(){
            return 'Minha altura é '+this.altura+'m';
        }

        //console.log(pessoa.nomeCompleto()) // Pedro Henrique Carvalho

        //console.log(pessoa.idade)    //22

        //console.log(pessoa.peso)


        // console.log(pessoa.altura)

        pessoa.fazerAniversario()
        pessoa.fazerAniversario()
        pessoa.fazerAniversario()
        // console.log(pessoa.idade)


        pessoa.andar(3)
        pessoa.andar(6)
        pessoa.andar(1)


        // console.log(pessoa.andando)
        pessoa.parar()
        // console.log(pessoa.andando)

        console.log(pessoa.caminhouQntsMetros)



            /*
            Agora vamos deixar a brincadeira um pouco mais divertida! :D
            Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
            retornar a string:
            - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

            Só que, antes de retornar a string, você vai fazer algumas validações:
            - Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
            apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
            - Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
            palavra "ano" ao invés de "anos", pois é singular;
            - Se a quantidade de metros caminhados for igual a `1`, então a palavra que
            deve conter no retorno da frase acima é "metro" no lugar de "metros".
            - Para cada validação, você irá declarar uma variável localmente (dentro do
            método), que será concatenada com a frase de retorno, mostrando a resposta
            correta, de acordo com os dados inseridos no objeto.
            */

        pessoa.apresentacao = function(){

            if(this.sexo == 'Feminino'){
                var retorno;
                retorno += 'Olá, eu sou a +'+this.nomeCompleto()+', tenho '+this.idade+' anos, '+this.altura+', meu peso é '+this.peso+' e, só hoje, eu já caminhei '+this.caminhouQntsMetros+' metros';
                
                return retorno 
            }


            if(this.idade == 1){
                var retorno;
                retorno += 'Olá, eu sou a +'+this.nomeCompleto()+', tenho '+this.idade+' ano, '+this.altura+', meu peso é '+this.peso+' e, só hoje, eu já caminhei '+this.caminhouQntsMetros+' metros';
                
                return retorno 
            }

            if(this.caminhouQntsMetros == 1){
                var retorno;
                retorno += 'Olá, eu sou a +'+this.nomeCompleto()+', tenho '+this.idade+' anos, '+this.altura+', meu peso é '+this.peso+' e, só hoje, eu já caminhei '+this.caminhouQntsMetros+' metro';
                
                return retorno 
            }

            return 'Olá, eu sou o '+this.nome+' '+this.sobrenome+', tenho '+this.idade+' anos, '+this.altura+', meu peso é '+this.peso+' e, só hoje, eu já caminhei '+this.caminhouQntsMetros+' metros';
            
        }

        // console.log(pessoa.apresentacao())




                                            //CHALLENGE-04



        var isTruthy = function(argument){
            if(argument){
                return true
            }else{
                return false
            }
        }

        // console.log(isTruthy(0))
        // console.log(isTruthy(false))
        // console.log(isTruthy(''))
        // console.log(isTruthy(""))
        // console.log(isTruthy(-0))


        // console.log(isTruthy(1))
        // console.log(isTruthy('Pedro'))
        // console.log(isTruthy(true))
        // console.log(isTruthy([]))
        // console.log(isTruthy({}))







 var carro = {
     marca: 'Toyota',
     modelo: 'Corolla',
     placa: 'JSP-4550',
     ano: 2008,
     cor: 'Prata',
     qntPortas: 4,
     assentos: 5,
     qntPessoas: 0
 }


 carro.mudarCor = function(cor){
     this.cor = cor
 }

 carro.obterCor = function(){
     console.log(this.cor)
     return this.cor
 }

 carro.obterModelo = function(){
     console.log(this.modelo)
     return this.modelo
 }

 carro.obterMarca = function(){
     console.log(this.marca)
     return this.marca
 }

 carro.obterMarcaModelo = function(){
     console.log('Esse carro é um '+this.marca+' '+this.modelo)
     return 'Esse carro é um '+this.marca+' '+this.modelo;
 }

 carro.addPessoas = function(qnt){
     if(this.qntPessoas >= this.assentos){
         console.log('Esse carro já está lotado')
         return false
     }

     if(this.qntPessoas < this.assentos && qnt > (this.assentos-this.qntPessoas)){
         if(this.assentos-this.qntPessoas == 1){
            console.log('Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoa no carro')
            return 'Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoa no carro'
         }
         console.log('Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoas no carro')
         return 'Só cabem mais '+(this.assentos-this.qntPessoas)+' pessoas no carro'
     }
        this.qntPessoas += qnt
        console.log('Já temos: '+this.qntPessoas+' pessoas no carro')

 }


    console.log(carro.obterCor())

    carro.mudarCor('Vermelho')
    carro.obterCor()
    carro.obterMarcaModelo()

    carro.addPessoas(2)
    carro.addPessoas(4)
    carro.addPessoas(3)
    carro.qntPessoas -= 4
    console.log(carro.qntPessoas)
    carro.addPessoas(10)