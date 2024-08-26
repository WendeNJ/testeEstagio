const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularParcela(valor, taxaAnual, numeroDeParcelas) {
    const taxaMensal = (taxaAnual / 100) / 12;
    if (taxaMensal === 0) {
        return valor / numeroDeParcelas;
    }
    const multi  = Math.pow(1 + taxaMensal, numeroDeParcelas);
    return valor * (taxaMensal * multi) / (multi - 1);
} 

const valor = 50000;
const jurosAnual = 5;

console.log('O cliente quer um carro no valor de R$ ${valor}');

rl.question('Olá, em quantas parcelas você vai querer seu financiamento? ', (parcelas) => {
    const numeroDeParcelas = parseInt(parcelas, 10);

    const valorDaParcela = calcularParcela(valor, jurosAnual, numeroDeParcelas);
    const valorTotal = valorDaParcela * numeroDeParcelas;
    const valorTotalpago = valorTotal ;
    const valortotaldosjuros = valorTotal - valor;

    rl.question(`Olá, digite seu nome para que possamos botar no sistema: `, (nome) => {
        console.log(`Certo, ${nome}! o seu financiamento em ${numeroDeParcelas} parcelas já está em andamento.`);
        console.log(`O valor da parcela será: R$ ${valorDaParcela.toFixed(2)}`);
        console.log(`O valor total que você vai pagar no carro é: R$ ${valorTotal.toFixed(2)}`);
        console.log(`o valor total pago de juros foi : ${valortotaldosjuros.toFixed(2)}`);
        
    });
});

// nao tenho muita experiencia com js, estudei e consegui fazer dessa forma, tenda uma "interaçao" com o usuario