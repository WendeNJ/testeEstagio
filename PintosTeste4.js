const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};
function frete ( distancia, peso){
    
        for ( let divisao in tabelaPrecos){
         let [ Precos, Distancia] = divisao.split(',' );
          let [ pesominimo, pesomaximo] = Precos.split('-' ).map(Number);   
          let [ distminimo, distmaximo] = Distancia.split('-').map(Number);
       if ( peso >= pesominimo && peso <= pesomaximo && distancia >= distminimo && distancia<= distmaximo ){
            return tabelaPrecos[divisao];
        }
    }  return " Nao entregamos para essa regiao";

    }
    
    const valorfrete = frete ( 4, 0.5 ); // a distancia fica no parametro esquerdo, e o peso no direito 
    console.log ( ` o valor do frete e : R$ ${valorfrete.toFixed(2)}`);


// estudei uma forma de fazer sem utilizar a repitaçao de ifs e else, encontrei essa forma