console.log(` - EXERCÍCIO 3 LAÇOS I -`)
// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

const picnic = [`Clima favorável`,`Local esplêndido`,`Companhia agradável`,`Comida apetitosa`,`Passatempo divertido`,`Registrar para relembrar`]

for(i=0;i<picnic.length;i++){
    console.log(`${i+1} - ${picnic[i]}`)
}