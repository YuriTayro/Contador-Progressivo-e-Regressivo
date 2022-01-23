function clicar(){

let inicio = window.document.querySelector('input#Início')
let fim = window.document.querySelector('input#Fim')
let passo = window.document.querySelector('input#Passo')
let res = window.document.querySelector('div#res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
} 
else{
    res.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
    //Contagem Progressiva
   if(i<f){
    for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
        } 
    } else {
    //Contagem Regressiva
        for(let c = i; c>=f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
} 
res.innerHTML += `\u{1F3C1}`
}