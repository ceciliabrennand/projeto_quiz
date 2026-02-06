let respondeu = false //porque ninguém respondeu ainda

let botao = document.getElementById('area-botao')

function escolha1() {

    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta1 = document.getElementById('r1')
    let resposta3 = document.getElementById('r3')

    resposta1.style.background = 'red'
    resposta3.style.background = 'green'
    botao.style.display = 'block'
}

function escolha2() {
    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta3 = document.getElementById('r3')
    let resposta2 = document.getElementById('r2')

    resposta3.style.background = 'green'
    resposta2.style.background = 'red'
    botao.style.display = 'block'

}

function escolha3() {
    
    if (respondeu == true) {
        return
    }

    respondeu = true

    let resultado = Number(localStorage.getItem('resultado'))
    resultado += 1
    localStorage.setItem('resultado', resultado)

    let resposta3 = document.getElementById('r3')

    resposta3.style.background = 'green'
    botao.style.display = 'block'
}

function escolha4() {
    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta3 = document.getElementById('r3')
    let resposta4 = document.getElementById('r4')

    resposta3.style.background = 'green'
    resposta4.style.background = 'red'
    botao.style.display = 'block'
}