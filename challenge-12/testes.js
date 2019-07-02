

var obj = {
    x: 1,
    y: 2
}                           // Object.create()

var obj2 = Object.create(obj)
    obj2.name = 'kkkk'

    console.log(obj2)
    console.log(obj2.x)

    console.log(obj2.hasOwnProperty('y'))
    console.log(obj2.hasOwnProperty('name'))


                                            //Object.keys()

    let pessoa = {
        nome: 'Pedro',
        idade: 21,
        altura: 1.86
    }   
                                                                
    console.log(Object.keys(pessoa))
    console.log(Object.keys(pessoa).length)
    
                                            //Object.isPrototypeOf()


    console.log(obj2.isPrototypeOf(obj))
    console.log(obj.isPrototypeOf(obj2))
        
                                            //JSON.stringfy(objeto)
                                            //JSON.parse(string)