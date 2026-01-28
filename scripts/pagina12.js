let resultadoFinal = localStorage.getItem('resultado')
let res = document.getElementById('resultado')
let frase = document.getElementById('frasefinal')

res.innerText = `${resultadoFinal}/10`

if (resultadoFinal >= 8){
    frase.innerText = 'Uau... Você me conhece muito bem!'
} else if (resultadoFinal >= 5) {
    frase.innerText = 'É... Tá na média, mas não tá me conhecendo muito não.'
} else {
    frase.innerText = 'Péssimo! Não me conhece nem um pouco.'
}



