const nome = "Cauã";
let idade = 23;
let isEmpregado = false;

let emprego;
if (isEmpregado) {
    emprego = "empregado";
}else{
    emprego = "desempregado";
}

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e estou ${emprego} no momento`);
console.log("A let idade é um " + typeof idade);
console.log("A const nome é uma " + typeof nome);
console.log(`E a let isEmpregado, é um ${typeof isEmpregado}`);
