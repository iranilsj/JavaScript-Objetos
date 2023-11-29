const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["(11)11111-1111", "(11)22222-2222"]
}

cliente.endereco = {
    rua: "R.nononono",
    numero: 1454,
    apartamento: true,
    complemento: "apto 10",
};
console.log("--------Opção 1----------------")
console.log(cliente)
console.log("---------Opção 2----------------")
console.log(cliente.endereco) //  Mais comun 
console.log("---------Opção 3----------------")
console.log(cliente["endereco"])