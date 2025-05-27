let nome = 'Jander'
let sobrenome = 'Farias'
let funcao = 'Professor'

//Como eu sei
//console.log(funcao, nome, sobrenome)


//Melhorando
//console.log(funcao + ':', nome.toUpperCase(), sobrenome.toUpperCase())

let nome_usuario = nome + '.' + sobrenome
//console.log(nome_usuario.toLowerCase())

//Inrerpolação de String
let user = `${nome}.${sobrenome}`  
let usuario = `Nome de Usario: ${user.toLowerCase()}`
console.log(usuario)