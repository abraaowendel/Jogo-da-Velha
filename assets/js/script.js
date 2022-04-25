let atual = 0;
let cpu = 0;
let you = 0;
let checarEmpate = 1;
let jogador = document.querySelector('.box__top .player__actual')
let vencedor = null;
let check = false;

const items = document.querySelectorAll('.box__line-item')
.forEach((item) => item.addEventListener('click', function(b){

    const jogadorAtual = (play) => {
        jogador.innerHTML = `${play}`
    };
    const setarAtributo = () => {
        b.currentTarget.setAttribute('busy', 'yes');
    }

    if(b.currentTarget.getAttribute('busy') === null && check != true){
        const adicionar = (a, b) =>  {
            switch(a){
                case 0:
                    jogadorAtual('CPU')
                    b.style.color = '#31C4BE';
                    b.innerHTML = 'X';
                    atual = 1;
                    break
                case 1:
                    jogadorAtual('VOCÊ')
                    b.style.color = '#F3B138';
                    b.innerHTML = 'O';
                    atual = 0;
                    break
            } 
        }

        // MUDAR COR DO VENCEDOR
        const mudarCor = (p,s,t) =>{
            p.style.background = '#19615D';
            s.style.background = '#19615D';
            t.style.background = '#19615D';
        }
        const mudarVencedor = (quadrado) =>{
            check = true;
            vencedor = quadrado.innerHTML;
            switch(vencedor){
                case 'X':
                    vencedor = 'VOCÊ';
                    you++;
                    document.querySelector('.players__player-quantWins').innerHTML = you;
                    break
                case 'O':
                    vencedor = 'CPU';
                    cpu++;
                    document.querySelector('.players__cpu-quantWins').innerHTML = cpu;
                    break
                default:
                    vencedor = "EMPATE";
            }
            jogador.innerHTML = vencedor;
            document.querySelector('.players__wins-name').innerHTML = vencedor;  
        }

        const checarVencedor = () => {
            let quadrado = document.querySelectorAll('.box__line-item')

            if(checarJogada(quadrado[0],quadrado[1],quadrado[2])){
                mudarCor(quadrado[0],quadrado[1],quadrado[2]);
                mudarVencedor(quadrado[0]);
            }
            if(checarJogada(quadrado[3], quadrado[4], quadrado[5])){
                mudarCor(quadrado[3],quadrado[4],quadrado[5]);
                mudarVencedor(quadrado[3]);
            }
            if(checarJogada(quadrado[6], quadrado[7], quadrado[8])){
                mudarCor(quadrado[6],quadrado[7],quadrado[8]);
                mudarVencedor(quadrado[6]);
            }
            if(checarJogada(quadrado[0], quadrado[3], quadrado[6])){
                mudarCor(quadrado[0],quadrado[3],quadrado[6]);
                mudarVencedor(quadrado[0]);
            }
            if(checarJogada(quadrado[1], quadrado[4], quadrado[7])){
                mudarCor(quadrado[1],quadrado[4],quadrado[7]);
                mudarVencedor(quadrado[1]);
            }
            if(checarJogada(quadrado[2], quadrado[5], quadrado[8])){
                mudarCor(quadrado[2],quadrado[5],quadrado[8]);
                mudarVencedor(quadrado[2]);
            }
            if(checarJogada(quadrado[0], quadrado[4], quadrado[8])){
                mudarCor(quadrado[0],quadrado[4],quadrado[8]);
                mudarVencedor(quadrado[0]);
            }
            if(checarJogada(quadrado[2], quadrado[4], quadrado[6])){
                mudarCor(quadrado[2],quadrado[4],quadrado[6]);
                mudarVencedor(quadrado[2]);
            }
        }
        const checarJogada = (quadrado1,quadrado2,quadrado3) =>{ 
            let check = false;
            if(quadrado1.innerHTML !== '' && quadrado1.innerHTML === quadrado2.innerHTML  && quadrado2.innerHTML === quadrado3.innerHTML){
                check = true;
            }
            else{
                checarEmpate++
                if(checarEmpate === 73){
                    document.querySelector('.players__wins-name').innerHTML = "EMPATE";  
                }
            }
            return check;
        }

        adicionar(atual,b.currentTarget)
        checarVencedor();
    }
    setarAtributo();
}))

/* RESETAR */
document.querySelector('.box__top .restart')
.addEventListener('click', () => {
    document.querySelectorAll('.box__line-item').forEach((i) => {
        check = false;
        i.innerHTML = '';
        i.removeAttribute('busy');
        i.style.background = '';
        document.querySelector('.players__wins-name').innerHTML = null;
        jogador.innerHTML = 'VOCÊ';
        atual = 0;
        checarEmpate = 1;

    })
})



