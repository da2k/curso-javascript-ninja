
    //slice = Retorna pedaço do array 

    let arr = ['Pedro', 'Paulo', 'Junior', 'Ricardo']

    console.log(arr.slice(2,4))
    console.log(arr.slice(0))


    //splice = remove pedaço de array

    let arr2 = [1, 2, 3, 4, 5, 6]
        console.log(arr2.splice(4))
        console.log(arr2)
       
        console.log(arr2.slice(1,0, 'a'))
        console.log(arr2)


    //array.forEach(function(item, index, array){})


    let frutas = ['Manga', 'Uva', 'Pêra', 'Laranja']


    frutas.forEach(function(fruta, indice){
        console.log(indice+':'+fruta)
    })


/* 

            $frutas = ['Manga', 'Uva', 'Pêra', 'Laranja']

                foreach($frutas as $indice=>$fruta){
                    echo $indice.': '.$fruta;
                }

*/

                //every = Retorna todas as ocorrências (true or false) baseadas na setença passada no parâmetro


        let array = [1, 3, 7, 5, 6, 9]


        let every = array.every(function(item){
            return item>0
        })

        console.log(every)


        //some = Retorna true para alguma das ocorrências verdadeiras no array
        
        
        let some = array.some(function(item){
            return item%2 == 0
        })

        console.log(some)




                            // map e filter



        arr = [1,3,5,4,78,9]

    arr2 = arr.map(function(item){
            return `R$ ${item.toFixed(2)}`
    })


    console.log(arr)
    console.log(arr2[2])

