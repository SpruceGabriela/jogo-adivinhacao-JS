/*O sistema sorteia um sistema aleatórrio
o sistema pede um palpite para o usuário
se acertar, venceu
se não
    o sistema avisa se foi maior ou menor
a cada erro, o usuário perde 1 vida, ele tem 10 vidas*/

let numeroSorteado = 0;
let tentativas = 10;
let i = 0;


function rodarJogo(){
    let valorUsuario = Number(prompt('Adivinhe o número sorteado entre 0 e 50.'));

    if(valorUsuario === numeroSorteado){
        alert('parabens, você ganhou o jogo');
    }
    else{
        if(valorUsuario > numeroSorteado){
            alert('seu palpite foi maior que o número, tente novamente');
           
        }
        else{
            alert('seu palpite foi menor que o número, tente um número mais alto.');
            
        }
        rodarJogo();
    }
    while(tentativas>0){
        
}


function iniciarJogo(){
    numeroSorteado = aleatorio (0, 50);
    rodarJogo();
}

rodarJogo();