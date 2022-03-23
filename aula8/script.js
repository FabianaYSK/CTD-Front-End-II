let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')
let botaoSomar = document.querySelector('#somar')
let botaoSubtrair = document.querySelector('#subtrair')
let botaoMultiplicar = document.querySelector('#multiplicar')
let botaoDividir = document.querySelector('#dividir') 
let resultado = document.querySelector('#res')

// operações
function somar() {
    resultado.innerHTML = Number(valor1.value) + Number(valor2.value)
}

function subtrair() {
    resultado.innerHTML = Number(valor1.value) - Number(valor2.value)
}

function multiplicar() {
    resultado.innerHTML = Number(valor1.value) * Number(valor2.value)
}

function dividir() {
    resultado.innerHTML = Number(valor1.value) / Number(valor2.value)
}

// calcular o resultado após clicar no botão
botaoSomar.addEventListener('click', function(event) {
    event.preventDefault()
    somar()  
})

botaoSubtrair.addEventListener('click', function(event) {
    event.preventDefault()
    subtrair()     
})

botaoMultiplicar.addEventListener('click', function(event) {
    event.preventDefault()
    multiplicar()     
})

botaoDividir.addEventListener('click', function(event) {
    event.preventDefault()
    dividir()     
})
