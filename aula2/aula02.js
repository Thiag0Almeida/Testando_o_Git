 // selecionar input com o numero digitado
 var valorElemt = document.getElementById("valor")
 // selecionar os elementos
 var moeda = document.getElementById("coin")
// seleciona Div onde exibirá a mensagem
 var aviso = document.getElementById("valorConvertido")
// valor das variveis moedas

 var valorDolar = 5.49 
 var valorEuro = 6.22
 var valorLibra = 7.4
 var valorMex = 0.2
 var valorEmReal = 0  

var coin = ''
var moedaFinal = 0.00

function mensagemFinal (moedaFinal){
    //mensagem que vai ser exibida

    console.log("Moeda Convertida " + moedaFinal)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + coin + " é " + moedaFinal

}
function converter(){
   
    coin = moeda.value
    valorEmReal = parseFloat(valorElemt.value)
    
    console.log(coin)
    console.log(valorEmReal)

        
        if (coin == 'Dolar'){
            moedaFinal = valorEmReal / valorDolar
            mensagemFinal(moedaFinal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        }
        else if (coin == 'Euro'){
            moedaFinal = valorEmReal / valorEuro
            mensagemFinal(moedaFinal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        }
        else if(coin == 'Libra'){
            moedaFinal = valorEmReal / valorLibra
            mensagemFinal(moedaFinal.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        }
        else if (coin == 'Peso Mex.'){
            moedaFinal = valorEmReal / valorMex
            mensagemFinal(moedaFinal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }))
        }    
    
       
  /*  poderia ser feito com switch
  
  
  switch(coin) {
        
        case 'Dolar':
            moedaFinal = valorEmReal / valorDolar
            mensagemFinal(moedaFinal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaFinal = valorEmReal / valorEuro
            mensagemFinal(moedaFinal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaFinal = valorEmReal / valorLibra
            mensagemFinal(moedaFinal.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Peso Mex.':
            moedaFinal = valorEmReal / valorMex
            mensagemFinal(moedaFinal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    } */

}