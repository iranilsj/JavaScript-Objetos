const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["(11)11111-1111", "(11)22222-2222"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Seu novo saldo é: ${this.saldo}`);
        }
    }
};

console.log()
cliente.efetuaPagamento(25);
console.log()