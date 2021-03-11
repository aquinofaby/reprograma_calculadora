dconsole.log("oi oi oi")

var inputSalario = document.querySelector("#ganho-mes")
var inputHoras = document.querySelector("#horas-dia")

function calcularValorHora(){
    var salario = inputSalario.valueAsNumber
    var horas = inputHoras.valueAsNumber
    var horasMes = horas *22 //multiplicou horas trabalhadas por dias uteis
    var valorHora = salario/horasMes //dividiu salario por horas mes
    var valorDuasCasas = valorHora.toFixed(2) //função que fixa qnt num após a virgula 
    var resultado = document.querySelector ("#resposta")
    console.log (valorDuasCasas)

    resultado.textContent = "R$" + valorDuasCasas // concatena R$ + o valor
}