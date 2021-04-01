var res = document.getElementById('res')

function go(){
        var num = parseInt(Math.random() * 10)
        var tentativa = 3
        
        while(tentativa > 0){
        var chute = parseInt(prompt("Digite um número entre 0 e 10"))

        if(num == chute){
            res.innerHTML = `Você acertou. O número secreto é ${num}.`
            break
        }else if(num > chute){
            res.innerHTML = `Seu chute foi menor que o Numero secreto.`
            tentativa = tentativa -1
        }else if(num < chute){
            res.innerHTML = `Seu chute foi maior que o Numero secreto.`
            tentativa = tentativa -1
        }
    }if(chute != num){
        res.innerHTML = `Você errou. O número secreto era ${num}`
    }
}

