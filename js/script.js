import {aleatorio} from ''./aleatorio.js';
import {perguntas} from ''./perguntas.js';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");








function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar");
botaoJogarNovamente.addEventListener("click", jogaNovamente());


}


function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();