/*
[] - Lista
() - Grupo
/w = [A-Za-z0-9_] - Caracteres alfanuméricos
\d = [0-9] - Dígitos
\n - Quebra de linha
\t - Marca de tabulação
\s - Espaço em branco
. - Caracteres alfanuméricos sem quebras de linha


\S - Todos os caracteres, menos os espaços em branco
[\S\s] - Pegar todos os caracteres
\d? - Valor opcional
\d+ - Uma ou mais ocorrência do item anterior
\w* - Zero ou mais ocorrências do item anterior

                Flags

g - Global
m - Multiline
i - Ignore case
u - Unicode


            Métodos RegExp()

.test(string) - Retorna true ou false pra ocorrência da busca na string passada como parâmetro
.exec(string) - 


*/ 

let placa = 'JSP-2513'
let placa2 = 'Sry-26589'

let teste = placa.match(/^[A-Z]{3}\-[0-9]{4}$/i)
if(teste){ 
    console.log('Placa: '+placa+' verificada')
}else{
    console.log('Placa: '+placa+' inválida')
}

teste = placa2.match(/^[A-Z]{3}\-[0-9]{4}$/i)
console.log(teste)
