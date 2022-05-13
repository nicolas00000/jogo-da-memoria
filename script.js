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
        <li class="carta">
            <div class="frente">
                <img src="imagens/fundo.jpg" class="youtube js">
            </div>

            <div class="verso">
                <img src="imagens/${cartas[i]}.png" class="js">  
            </div>
        </li>`
    }
}
function comparador() {
    return Math.random() - 0.5;
}