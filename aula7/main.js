let buttonReference = document.querySelector('#button')
let nomeInputReference = document.querySelector('#nomeInput')

// 3. Mostre um alerta na página quando a tela terminar de ser carregada
window.onload = alert('A página foi carregada com sucesso!')


// 2. Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
buttonReference.addEventListener('click', function(event) {
   event.preventDefault()
})


// 4. Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
function mouseOver() {
  document.getElementById("titulo").style.color = "blue"
}

function mouseOut() {
  document.getElementById("titulo").style.color = "orange"
}

document.getElementById("titulo").addEventListener("mouseover", mouseOver)
document.getElementById("titulo").addEventListener("mouseout", mouseOut)


// 5. Faça um trecho de código que utilize algum evento de teclado
nomeInputReference.addEventListener('keyup', function(event){
    console.log('digitando...')
})
