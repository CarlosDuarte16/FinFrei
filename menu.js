import prompt from 'prompt-sync';
let ler = prompt();

export function hum(mensagem) {
    return ler(mensagem);
}

export function opções(){
     console.log(`
Digite a sua opção:
1 - Depositar
2 - Sacar
3 - Exibir Saldo
4 - Investir
5 - Sair`)
let a = ler('Escolha uma opção:')
return a
}




