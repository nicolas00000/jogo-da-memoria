const qtdcartas = perguntarQuantidadeCartas()
const papagaio = gerarCartasEmbaralhadas(qtdcartas)
renderizarCartaNaTela(papagaio)



function perguntarQuantidadeCartas() { 
    let qtdcartas = parseInt(prompt("quantidades de cartas para jogo"))
    while(isNaN(qtdcartas) || qtdcartas < 4 || qtdcartas > 14 || (qtdcartas % 2 ) === 1){
        qtdcartas =  parseInt(prompt("quantidades de cartas para jogo"))
    }
    return qtdcartas
}

function gerarCartasEmbaralhadas(qtdcartas){ 
const tiposCartas = ["c++", "css", "html", "java", "js", "php", "python"];
  
const cartas = []
    for(let i = 0; i < qtdcartas/2; i++){
        const papagaio = tiposCartas[i];
        cartas.push(papagaio)
        cartas.push(papagaio)
    }
    cartas.sort(comparador)
    return cartas
}

function renderizarCartaNaTela(cartas) { 
/*  */

const tabuleiro = document.querySelector(".tabuleiro");
    for(let i = 0; i < cartas.length ; i++) {
    tabuleiro.innerHTML += `
        <li class="carta" onclick="virarCarta(this)">
            <div class="fornt-face face">
                <img src="imagens/fundo.jpg" class="youtube js">
            </div>

            <div class="back-face face">
                <img src="imagens/${cartas[i]}.png" class="js">  
            
            </div>
        </li>`
    }
}

let primeiracarta = null
let segundaCarta = null
let paresVirados = 0

function virarCarta(cartaClicada){
  
    if(cartaClicada.classList.contains("virada") || segundaCarta !== null){
        return; 
    }

    if(primeiracarta === null){
        primeiracarta = cartaClicada
        cronometro()
    } else{
        segundaCarta = cartaClicada
        if(primeiracarta.innerHTML === cartaClicada.innerHTML){
           paresVirados += 2
            resetarJogadas()
            verificarFIM()
        }  else{
                setTimeout(desvirarCarta, 1000)
                verificarFIM()

        }
   }
   cartaClicada.classList.add("virada")

}

function desvirarCarta(){
    primeiracarta.classList.remove("virada")
    segundaCarta.classList.remove("virada")
    resetarJogadas()
}

function resetarJogadas(){
    primeiracarta = null
    segundaCarta = null
}

function comparador() {
    return Math.random() - 0.5;
}


let contador = 0;
var relogio;

function verificarFIM(){
    if(paresVirados === qtdcartas){   
        setTimeout(MSGalerta, 900) 
        setTimeout(jogarNovamente, 4000)    
        
     }
}

function cronometro(){
    relogio = setInterval(function() {
		document.getElementById("contador").innerHTML = contador++;
        console.log(contador)
	}, 1000);
    
    

}

function MSGalerta(){
    alert(`voce venceu em ${contador} segundos`)
    clearInterval(relogio)
   
}

function jogarNovamente(){
    const mensagem = prompt("quer jogar novamente ?")
    if(mensagem === "sim"){
        document.location.reload(true);
    }
}