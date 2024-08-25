function DisponibilidadeNaloja ( Codigo, produtos){ 
  
    for ( let produto of produtos) { 
        if ( produto.Codigo == Codigo && produto.quantidade > 0 ){
            return true
        } 
    } return false

} const produtos = [
    { Codigo: 1001, nome: 'Camisa Futebol', quantidade: 5 },
    { Codigo: 1002, nome: 'Camisa basquete', quantidade: 10 },
    { Codigo: 1003, nome: 'Camisa Golf', quantidade: 3 }
];
console.log(DisponibilidadeNaloja(1001, produtos)); // vai ser verdadeiro
console.log(DisponibilidadeNaloja(1002, produtos)); // vai ser verdadeiro
console.log(DisponibilidadeNaloja(10050, produtos)); // falso

//Pintosteste