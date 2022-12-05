console.log(` - EXERCÍCIO 1 LAÇO I -`)
// Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma let conta para guardar o valor total.

// Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for sim, devemos imprimir o valor total da conta.

let eatCox = prompt(`Gostaria de comer mais coxinhas?
Digite "S" para sim,
e "N" para não.`).toUpperCase()
let howManyCox = 0

while (eatCox === `S`){
    howManyCox++;
    eatCox = prompt(`Gostaria de comer mais coxinhas?
    Digite "S" para sim,
e "N" para não.`).toUpperCase()
}

console.log(`Você comeu ${howManyCox} coxinhas, e cada uma custou R$2,50.
Total R$${howManyCox*2.50}`)