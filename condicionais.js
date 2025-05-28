// const idade = 38
// console.log(`Idade: ${idade} anos`)

const idade = 19
const mensagem = `Idade: ${idade} anos`
console.log(mensagem)

//if. else

if (idade >= 60) {
    console.log(`Véi`);
//console.log(`Se a condição for atendida`)
} else if (idade >= 12 && idade <= 18) {
    console.log(`Aborrecente`);

} else if (idade < 12) {
    console.log(`Pivete`);
}
else {
    //19 e 59
    console.log(`Adultero`);
}
