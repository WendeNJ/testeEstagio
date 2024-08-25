function ParaattEstoque ( itensVendidos, estoque){
    for ( let Vendido of itensVendidos){
        for (let Noestoque of estoque){
            if ( Vendido.Codigo == Noestoque.Codigo){
                Noestoque.quantidade -= Vendido.quantidade;
                break;
            }
        }
    } return estoque
}
 const itensVendidos = [
    { Codigo  : 1001, quantidade: 2 },
    { Codigo :  1002, quantidade: 1 },
    { Codigo : 1003, quantidade: 5 }
];
const estoque = [
    { Codigo: 1001, quantidade: 5 },
    { Codigo: 1002, quantidade: 2 },
    { Codigo: 1003, quantidade: 5 }
];
const EstoqueAtualizado = ParaattEstoque ( itensVendidos, estoque);
console.log( EstoqueAtualizado);

// fiquei meio confuso nesse
