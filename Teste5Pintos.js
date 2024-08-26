function vendasDatas(vendas, datainicio, datafim) {
    const inicio = new Date(datainicio);
    const final = new Date(datafim);

    return vendas.reduce((relatorio, venda) => {
        const dataVenda = new Date(venda.data);
        if (dataVenda >= inicio && dataVenda <= final) {
            relatorio.valorTotalPeriodo += venda.valorTotal;

            if (!relatorio.totalPorCod[venda.sku]) {
                relatorio.totalPorCod[venda.sku] = { quantidade: 0, valorTotal: 0 };
            }
            relatorio.totalPorCod[venda.sku].quantidade += venda.quantidade;
            relatorio.totalPorCod[venda.sku].valorTotal += venda.valorTotal;
        }
        return relatorio;
    }, { totalPorCod: {}, valorTotalPeriodo: 0 });
}


const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

const relatorio = vendasDatas(vendas, '2021-01-01', '2021-01-02');
console.log('Valor por código:', relatorio.totalPorCod);
console.log('Relatório vendas: R$', relatorio.valorTotalPeriodo.toFixed(2));

// encontrei  dificuldade para fazer esse