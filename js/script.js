let x = document.getElementsByClassName("x")[0]
let o = document.getElementsByClassName("o")[0]
let boxes = document.querySelectorAll(".box")
let buttons = document.getElementsByTagName("button")
let msgContainer = document.querySelector("#msg")
let msgText = document.querySelector("#msg p")
let secondPlayer

// contador de jogadas

let p1 = 0
let p2 = 0

// evento de click

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkEl(p1, p2)

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)

            if (p1 == p2) {
                p1++

                if (secondPlayer == "ai-jog") {
                    jogadaIa()
                    p2++
                }
            } else {
                p2++
            }
            checkQuemVenceu()
        }
    })
}

// p1 p2 ou ia

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none"
        }
        setTimeout(function() {
            let container = document.getElementById("container")
            
            container.classList.remove("hide")
        }, 500)
    })
}

function checkEl(p1, p2) {
    if (p1 == p2) {
        el = x
    } else {
        el = o
    }
    return el
}
function checkQuemVenceu() {
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")

    // horizontal

    if (b1.childNodes.length > 0  && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
            declararVencedor("x")
        } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
            declararVencedor("o")
        }
    }
    if (b4.childNodes.length > 0  && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
            declararVencedor("x")
        } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
            declararVencedor("o")
        }
    }
    if (b7.childNodes.length > 0  && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
            declararVencedor("x")
        } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
            declararVencedor("o")
        }
    }

    // vertical

    if (b1.childNodes.length > 0  && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
            declararVencedor("x")
        } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
            declararVencedor("o")
        }
    }
    if (b2.childNodes.length > 0  && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
            declararVencedor("x")
        } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
            declararVencedor("o")
        }
    }
    if (b3.childNodes.length > 0  && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
            declararVencedor("x")
        } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
            declararVencedor("o")
        }
    }

    // diagonal

    if (b1.childNodes.length > 0  && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
            declararVencedor("x")
        } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
            declararVencedor("o")
        }
    }
    if (b3.childNodes.length > 0  && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
            declararVencedor("x")
        } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
            declararVencedor("o")
        }
    }
    // deu velha

    let c = 0

    for(let i = 0; i < boxes.length; i++) {
        if ((boxes[i]).childNodes[0] != undefined) {
            c++
        }
        if (c == 9) {
            console.log("Deu velha")
            declararVencedor("Velha")
        }
    }
}

function declararVencedor(vencedor) {
    let placarX = document.querySelector("#placar-1")
    let placarO = document.querySelector("#placar-2")
    let msg

    if (vencedor == "x") {
        placarX.textContent = parseInt(placarX.textContent) + 1
        msg = "O jogador 1 venceu" 
    } else if (vencedor == "o") {
        placarO.textContent = parseInt(placarO.textContent) + 1
        msg = "O jogador 2 venceu"
    } else {
        msg = "Deu velha!"
    }

    msgText.innerHTML = msg
    
    msgContainer.classList.remove("hide")

    setTimeout(function() {
        msgContainer.classList.add("hide")
    }, 2000)

    p1 = 0
    p2 = 0

    let boxesRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesRemove.length; i++) {
        boxesRemove[i].parentNode.removeChild(boxesRemove[i])
    }
}
function jogadaIa() {
    let cloneO = o.cloneNode(true)
    let contador = 0
    let cheios = 0

    for(let i = 0; i < boxes.length; i++) {
        let nRandom = Math.floor(Math.random() * 5)

        if (boxes[i].childNodes[0] == undefined) {
            if (nRandom <= 1) {
                boxes[i].appendChild(cloneO)
                contador++
            }
        } else {
            cheios++
        }
    }
    if (contador == 0 && cheios < 9) {
        jogadaIa()
    }
}