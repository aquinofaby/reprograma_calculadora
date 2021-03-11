//Atribuindo variavel ao input de Valor Hora e Horas de projeto
var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')

//Criando uma funçao para o botão CALCULAR

function calcular(){
    var valorHora = inputValorHora.valueAsNumber 
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorProjeto = valorHora * horasProjeto
    var totalDuasCasas = valorProjeto.toFixed(2)
    var resultado = document.querySelector('#resposta')
    resultado.textContent = 'O valor total do projeto é R$ '+ totalDuasCasas
 
}