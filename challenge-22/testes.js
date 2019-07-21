(function(){


    function myFunction(a, b, c){
        console.log(this.name, a, b, c)
    }


    let pessoa = { name: 'Pedro'}
    let arr = ['PHP', 'JS', 'JAVA']

    // myFunction.call(pessoa)
    // myFunction.apply(pessoa, arr)


    function verify(){
        console.log(arguments)
    }



    let obj = {
        nome: 'Pedro',
        idade: 21,
        altura: 1.86
    }


    verify(obj, 1, 2)
    
   








})()