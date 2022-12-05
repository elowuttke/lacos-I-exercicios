console.log(` - EXERCÍCIO 2 LAÇO I -`)
// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

// Exemplo com entrada 7:

// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70

let userNum = +prompt(`Escolha um número e veja a tabuada de 1 a 10 deste número:`)

console.log(`A tabuada de ${userNum} é:`)

for (i=1; i<=10; i++){
    console.log(`${i} X ${userNum} = ${i*userNum}`)
}
