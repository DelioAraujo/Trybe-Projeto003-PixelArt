//01[x]. Adicione á página o título "Paleta de Cores"
//02[x]. Adicione à pǵina uma paleta contendo quatro cores distintas
const black = document.querySelector("#black")
black.style.backgroundColor="black"
let backGroundBlack=black.style.backgroundColor

const red = document.querySelector("#red")
red.style.backgroundColor="red"
let backGroundRed=red.style.backgroundColor

const green = document.querySelector("#green")
green.style.backgroundColor="green"
let backGroundGreen=green.style.backgroundColor

const blue = document.querySelector("#blue")
let backGroundBlue=blue.style.backgroundColor="blue"

//03[x]. Adicione a cor preta como a primeira cor da paleta de cores
//04[x]. Adicione um botão para gerar cores aleatórias para a paleta de cores
const randomColors=()=>{
    
    const buttomRandom = document.querySelector("#button-random-color")
    let cores=document.querySelectorAll("#color-palette div")
    
    buttomRandom.addEventListener("click", ()=>{
        
        for(let i=1; i<cores.length; i+=1){
            let r = Math.random()*255;
            let g = Math.random()*255;
            let b = Math.random()*255;
            cores[i].style.backgroundColor=`rgba(${r},${g},${b})`
        }
        
        saveColorPalette()
    }) 
    
} 
randomColors()

//05[ ]. Implemente uma função usando o localStorage para que a paletra de cores gerada aleatoriamente seja mantida após recarregar a página.
const saveColorPalette = ()=>{
    let colorPalette = document.querySelector("#color-palette").innerHTML
        localStorage.setItem("colorPalette", JSON.stringify(colorPalette))
}

// const recoverColorPalette = ()=>{
//     let colorPalette = document.querySelector("#color-palette")
//     colorPalette.innerHTML= JSON.parse(localStorage.getItem("colorPalette"))

// }
// recoverColorPalette()------------------------------




//06[x]. Adicione à página um quadro contendo 25 pixels

let ladoTabela = 5
let fazGrade=(ladoTabela)=>{
    let tabela= document.querySelector("#pixel-board")
    for(n=1; n<=ladoTabela*ladoTabela; n+=1){
        let quadrado = document.createElement("div")
        quadrado.classList.add("pixel")
        tabela.appendChild(quadrado)
    }
}
fazGrade(ladoTabela);

//07[x]. Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura
//08[x]. Defina a or preta como cor inicial da paletra de cores
//09[x]. Crie uma função para selecionar uma cor na paleta de cores

const selecionaCor=()=>{
    let cores=document.querySelectorAll(".color")
    for(cor of cores){
        cor.addEventListener("click", (event)=>{
            const selected=document.querySelector(".selected")
            selected.classList.remove("selected");
            event.target.classList.add("selected")                
        }
        )
    }
}
selecionaCor()

//10[x]. Crie uma função que permita preencher um pixel do quadra com a cor selecionada na paletra de cores

let quadrados= document.querySelectorAll("#pixel-board div")
let pintaQuadro = ()=>{
    for(let quadrado of quadrados){
        quadrado.addEventListener("click",(event)=>{
            const selected=document.querySelector(".selected")
            quadrado.style.backgroundColor=selected.style.backgroundColor
    
    
            saveBoard()
        })
    }
}
pintaQuadro()


//11[x]. Crie um botão que retorne a cor do quadro para a cor inicial

const limpar=()=>{
    const buttomLimpar = document.querySelector("#clear-board")
    buttomLimpar.addEventListener("click", ()=>{
    
        for(let quadrado of quadrados){
            quadrado.style.backgroundColor="white"
        }
    })
    
} 
limpar();

//12[ ]. Crie uma função para salvar e recuperar o seu desenho atual no localStorage

const saveBoard = ()=>{
    let boardColors = document.querySelector("#pixel-board").innerHTML
        localStorage.setItem("pixelBoard", JSON.stringify(boardColors))
}

// const recoverBoard = ()=>{
//     let boardColors = document.querySelector("#pixel-board").innerHTML
//     boardColors= JSON.parse(localStorage.getItem("pixel-board"))
// } --------------------------------

// 13[ ]. Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
let novoTamanho = document.querySelector("#board-size")
let vqv=document.querySelector("#generate-board")
let tabela = document.querySelector("#pixel-board")

vqv.addEventListener("click", ()=>{
    console.log(novoTamanho.value)
    tabela.innerHTML=""
    fazGrade(novoTamanho.value);
    tabela.style.width=`${40*(novoTamanho.value)}px`
    if(novoTamanho.value===""){
        alert("Board inválido!")
    }

    salvarNovoTamanho()
})

//não colore mais.............................

// 14[ ]. Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.
novoTamanho.addEventListener("change", ()=>{
    if (novoTamanho.value < 5) {
        novoTamanho.value = 5;
      } else if (novoTamanho.value > 50) {
        novoTamanho.value = 50;
      }
})

// 15[ ]. Crie uma função para manter o tamanho novo do board ao recarregar a página.

const salvarNovoTamanho = ()=>{
    localStorage.setItem("boardSize",JSON.stringify(novoTamanho.value))
}