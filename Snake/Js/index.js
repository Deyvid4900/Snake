import { Bola } from "./classes.js"

// declarações de Variáveis

const telaEscolhaNivel = document.getElementById("container")
const cabeca = document.getElementById("cabeça")
const AreaDeJogo = document.getElementById("AreaDeJogo")
const btnNivelUm = document.getElementById("b1")
const btnNivelDois = document.getElementById("b2")
const btnNivelTres = document.getElementById("b3")
const btnJogar = document.getElementById("btnJogar")
const tempoDeJogo = document.getElementById("tempo")

// let areaDeAtuacao = document.getElementById("AreaDeAtuacao")


const personagem = document.getElementById("Personagem")


const aside = document.getElementById("aside")
const btnUp = document.getElementById("up")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
const btnDown = document.getElementById("down")



const quantidade_Objetos = 1
let bolas = []
let move=false


//  Movimento
btnUp.addEventListener("click", () => {

    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.bottom, 10) || 0

        personagem.style.bottom = posicaoAtual + 5 + "px";


    }
    if (move == false) {
        setInterval(addPx, 50)

    }


})



btnLeft.addEventListener("click", () => {

    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.left, 10) || 0

        personagem.style.left = posicaoAtual - 5 + "px";
    }
    if (move == false) {
        setInterval(addPx, 50)

    }
})



btnRight.addEventListener("click", () => {


    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.left, 10) || 0

        personagem.style.left = posicaoAtual + 5 + "px";
    }
    if (move == false) {
        setInterval(addPx, 50)

    }
})



btnDown.addEventListener("click", () => {


    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.bottom, 10) || 0
        personagem.style.bottom = posicaoAtual - 5 + "px";


    }
    if (move == false) {
        setInterval(addPx, 50)

    }

})






// ticks

let t = 0
const tempoJogo = () => {
    tempoDeJogo.innerHTML = t
    t = t + 1
}






// Niveis do jogo

btnNivelUm.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)

})
btnNivelDois.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)

})
btnNivelTres.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)

})



btnJogar.addEventListener("click", (evt) => {
    let cont = true
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")


    // setInterval(new Bola,1000)

    const chamaBolar = () => {
        const qtde = quantidade_Objetos
        for (let i = 0; i < qtde; i++) {
            bolas.push(new Bola(bolas, palco))
            // console.log(palco.offsetHeight)

        }
        console.log("ok")
    }
    let areaDeAtuacao = document.getElementById("AreaDeAtuacao")
    let larguraPalco = areaDeAtuacao.offsetWidth
    let alturaPalco = areaDeAtuacao.offsetHeight
    let palco = areaDeAtuacao
    console.log(bolas)


    const chamatic = (e) => {
        if (e == true) {
            chamaBolar()
            tempoJogo()
            
        }else if(e== false){
            
            console.log("no")
        }

    }
    setInterval(chamatic(true), 1000)

    btn_remover.addEventListener("click", (evt) => {
        Bola.remover
        chamatic(false)
    })

})





window.addEventListener("resize", (evt) => {
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
})

