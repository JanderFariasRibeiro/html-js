// //Sintaxe da função
// function nome(/*argumentos, parâmmetros*/) {//argumentos, parâmetros: são entradas de dados para a função utilizar
//     //bloco de código, lógica
// }

// //executar,  chamando pelo nome e passa os parâmetros se houver, sen ão fica vazio '()'
// nome()

// //1- soma dois números
// function somaDoisNumeros(n1, n2) {
//     //let n1 = 50;
//     //let n2 = 70;

//     let resultado = n1 + n2;
//     console.log(resultado)

//     // o código é interrompido após o return, se houver algo abaixo, não será executado
//     return resultado;

//     const test = 'OI'
// }

// //console.log(somaDoisNumeros())

// //os parâmetros ou argumentos
// somaDoisNumeros(20, 50);
// somaDoisNumeros(100, 400);

function verificarIdade(idade) {
    if (typeof idade !== 'string') {
        const mensagem = `Idade: ${idade} anos`
        console.log(mensagem);

        //if. else

        if (idade >= 60) {
            console.log(`Véi`);
            //console.log(`Se a condição for atendida`)
        } else if (idade >= 12 && idade <= 18) {
            console.log(`Aborrecente`);
        } else if (idade < 12) {
            console.log(`Pivete`);
        } else {
            //19 e 59
            console.log(`Adultero`);
        }
    }else{
        console.log('Por favor informar a idade no formato de número')
    }
}

verificarIdade(60)