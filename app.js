import prompt from 'prompt-sync';
let ler = prompt();

import {deposita, sacar, ExibirSaldo, investimento } from './financeiro.js';
import { opções } from './menu.js';

let saldo = 0;


while(true){
    const opcao = opções();
    if (opcao === '1') {
        saldo = deposita(saldo);
    }
     else if (opcao === '2') {
        saldo = sacar(saldo);
    }
     else if (opcao === '3') {
        ExibirSaldo(saldo);
    }
    else if (opcao === '4'){
        let m = investimento();
        console.log(m)
    }
     else if (opcao === '5') {
        console.log('Saindo...');
        break
    } else {
        console.log('Opção inválida. Tente novamente.');
    }

    console.log(saldo)
}