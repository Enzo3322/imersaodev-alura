var res = document.getElementById('res')

function calcular(){
    
var firstValue = parseInt(prompt("Digite o primeiro Valor:"))
var secondValue = parseInt(prompt("Digite o segundo Valor:"))


var operacao = prompt("Digite 1 para fazer uma divisão, 2 para uma multiplicação, 3 para uma soma e 4 para subtração")

if (operacao == 1){
    var result1 = firstValue / secondValue
    res.innerHTML = `${firstValue} / ${secondValue} = ${result1}`
}else if(operacao == 2){
    var result2 = firstValue * secondValue
    res.innerHTML = `${firstValue} * ${secondValue} = ${result2}`

}else if(operacao == 3){
    var result3 = firstValue + secondValue
    res.innerHTML = `${firstValue} + ${secondValue} = ${result3}`

}else{
    var result4 = firstValue - secondValue
    res.innerHTML = `${firstValue} - ${secondValue} = ${result4}`

}
}

