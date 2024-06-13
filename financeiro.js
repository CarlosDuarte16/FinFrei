
import {hum} from './menu.js';

export function deposita(saldo){
    while(true){
        let b = hum('Digite o valor a depositar (ou "c" para cancelar): ')
        if(b === "c" ) return saldo;
        b = Number(b);
        if(b > 0){
            return saldo + b;
        }
        else {
            return console.log('Valor inválido. Tente novamente.');
        }
    }           
}

export function sacar(saldo){    
    while(true){
        let b = hum('Digite o valor a sacar (ou "c" para cancelar): ')
        if(b === "c" ) return saldo;
        b = Number(b);
        if(b > 0 && b <= saldo){
            return saldo - b;
        }
        else {
            return console.log('Valor inválido. Tente novamente.');
        }
    }   
}

export function ExibirSaldo(saldo){
    return console.log(`Seu saldo atual é: R$ ${saldo}`)
}

export function investimento(saldo){
        let a = hum('Digite o Juros (ou "c" para cancelar):')
        let b = hum('Digite o tempo de investimento (ou "c" para cancelar): ')
        let c = hum('Digite o Capital Inicial (ou "c" para cancelar): ')
        if(a === "c" && b === "c" && c === "c" )  return saldo;
        b = Number(b);
        a = Number(a);
        c = Number(c);
        
        if(b > 0 && a > 0 && c > 0 ){
                let taxajuros = a / 100;
                let m = c * ((1 + taxajuros)** b);
                return m
        }
        else {
            return console.log('Valor inválido. Tente novamente.');
        }   
}
