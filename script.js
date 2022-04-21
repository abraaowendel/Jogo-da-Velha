let atual = 0;
const btns = document.querySelectorAll('.box__line-item')
.forEach((btn) => btn.addEventListener('click', function(b){
   
    const adicionar = (a, b) =>  {
          switch(a){
            case 0:
                b.innerHTML = 'X'
                atual = 1;
                break
            case 1:
                b.innerHTML = 'O'
                atual = 0;
                break
        } 
    }
    adicionar(atual,b.currentTarget)
}))