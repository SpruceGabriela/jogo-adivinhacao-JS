/*O sistema sorteia um sistema aleatórrio
o sistema pede um palpite para o usuário
se acertar, venceu
se não
    o sistema avisa se foi maior ou menor
a cada erro, o usuário perde 1 vida, ele tem 10 vidas*/

let numeroSorteado = 0;
let tentativas = 10;


function rodarJogo() {
    while (tentativas>0) {
        let palpite = Number(prompt('Adivinhe o número sorteado entre 0 e 50.'));

        if (palpite === numeroSorteado) {
            alert('parabens, você ganhou o jogo');
            tentativas = 0; //não perde nenhuma vida
        }
        else {
            if (palpite > numeroSorteado) {
                alert('seu palpite foi maior que o número, tente novamente');
            }
            else {
                alert('seu palpite foi menor que o número, tente um número mais alto.');
            }
            tentativas--; //diminui as chances a cada palpite errado
            rodarJogo();
        }
    }
}

function iniciarJogo() {
    numeroSorteado = aleatorio(0, 50);
    rodarJogo();
}

iniciarJogo();