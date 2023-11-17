const cliente = {
    nome: "André",
    idade: 32,
    cpf: "123.xxx.xxx-xx",
    email: "xxx@xxxxx.com",
}
console.log()
console.log(`O nome do(a) cliente é: ${cliente.nome}! e esse(a) cliente tem: ${cliente.idade}.`)
console.log(`Os 3 primeiros digitos do CPf são: ${cliente.cpf.substring(0,3)}`)
console.log()