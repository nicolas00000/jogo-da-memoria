
const imagens = [
    "unicornparrot",
    "bobrossparrot"   ,
    "explody.parrot",
    "fiestaparrot",
    "metalparrot",
    "revertiparrot",
    "tripleparrot"
]
imagens.sort(comparador); 
function comparador() { 
	return Math.random() - 0.5; 
}


                //loop perguntando quantidade de cartas

// let qtdcartas = parseInt(prompt("quantidades de cartas para jogo"))

// while(isNaN(qtdcartas) || qtdcartas < 4 || qtdcartas > 16 || (qtdcartas % 2 ) === 1){
//     qtdcartas =  parseInt(prompt("quantidades de cartas para jogo"))
// }

const cartas = []
for(let i=0; i < qtdcartas/2; i++){
    const papagaio = tiposCartas[i]
    cartas.push(papagaio);
    cartas.push(papagaio);
}



const tabuleiro = document.querySelector(".tabuleiro");
const tiposCartas = ["um", "dois", "tres", "quatro", "yt", "seis"];


for(let i = 0; i < tiposCartas.length ; i++) {
  tabuleiro.innerHTML += `
  <li class="carta">
    <div class="frente">
        <img src="data:image/png;base64,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" class="js">
         
    </div>
  
    <div class="atras">
       <img src='imagens/${cartas[i]}.gif' class="papagaio"> 
    </div>

</li>
`

}