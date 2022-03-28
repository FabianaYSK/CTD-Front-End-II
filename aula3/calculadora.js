import somar from "./somar.js"
import subtrair from "./subtrair.js"
import multiplicar from "./multiplicar.js"
import dividir from "./dividir.js"

function calcular() {

    let primeiroNumero = parseInt(prompt("Insira um número"))
    let operador = parseInt(prompt("Escolha o operador:\n1 Somar \n2 Subtrair \n3 Multiplicar \n4 Dividir"))
    let segundoNumero = parseInt(prompt("Insira um número"))

    if (operador == 1) {
        alert(somar(primeiroNumero, segundoNumero)) 
    } else if (operador == 2) {
        alert(subtrair(primeiroNumero, segundoNumero))
    } else if (operador == 3) {
        alert(multiplicar(primeiroNumero, segundoNumero))
    } else if (operador == 4) {
        alert(dividir(primeiroNumero, segundoNumero))
    }
}

calcular()
