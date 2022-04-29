
const imagens = [
    "unicornparrot",
    "bobrossparrot"   ,
    "explody.parrot",
    "fiestaparrot",
    "metalparrot",
    "revertiparrot",
    "tripleparrot"
]
imagens.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


let qtdcartas = parseInt(prompt("quantidades de cartas para jogo"))
while(qtdcartas < 4 || qtdcartas > 16 || (qtdcartas % 2 ) === 1){
    qtdcartas =  parseInt(prompt("quantidades de cartas para jogo"))
}

const cartas = []
for(let i=0; i < qtdcartas/2; i++){
    const papagaio = imagens[i]
    cartas.push(papagaio);
    cartas.push(papagaio);
}



const tabuleiro = document.querySelector(".tabuleiro");
const tiposCartas = ["um", "dois", "tres", "quatro", "cinco", "seis"];



for(let i = 0; i < b; i++) {
  tabuleiro.innerHTML += `
            <li class="carta">
                <div class='back-face face'>
                    <img src='imagens/${tiposCartas[i]}.gif'> 
                </div>

        </li>
`

}