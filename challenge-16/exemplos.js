
(function(){


    let nome = 'Pedro Henrique Bastos Carvalho'
    console.log(nome)



    let obj = {
        prop1:{
            prop2:{
                prop3:{
                    prop: 'Propriedade',
                    prop2:'Prototype'
                }
            }
        }
    }




    console.log(obj.prop1.prop2.prop3.prop)
    with(obj.prop1.prop2.prop3){
        console.log(prop+' '+prop2)
    }



    console.log(nome)

    
})()




