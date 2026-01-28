let respondeu = false //porque ninguém respondeu ainda

function escolha1() {

    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta4 = document.getElementById('r4')
    let resposta1 = document.getElementById('r1')
    
    resposta1.style.background = 'red'
    resposta4.style.background = 'green'
}

function escolha2() {
    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta4 = document.getElementById('r4')
    let resposta2 = document.getElementById('r2')

    resposta4.style.background = 'green'
    resposta2.style.background = 'red'

}

function escolha3() {
    if (respondeu == true) {
        return
    }

    respondeu = true

    let resposta4 = document.getElementById('r4')
    let resposta3 = document.getElementById('r3')

    resposta4.style.background = 'green'
    resposta3.style.background = 'red'
}

function escolha4() {

    if (respondeu == true) {
        return
    }

    respondeu = true

    let resultado = Number(localStorage.getItem('resultado'))
    resultado += 1
    localStorage.setItem('resultado', resultado)

    let resposta4 = document.getElementById('r4')

    resposta4.style.background = 'green'
}