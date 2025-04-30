
//2- Crie duas funções que calcule a soma e a media de 3 números, exiba no console o resultado e da média

function soma(n1, n2 , n3){
    const soma = n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3){
    //const soma= n1 + n2 + n3 /3;
    const adição = n1 + n2 + n3 /3;
    const media = adição / 3
    
    return "A soma é " + adição + " e a média é: " + media;
}

console.log(media(10, 20, 30))

