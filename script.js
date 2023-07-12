// Array com os dados dos potes
let pote1 = ['Alex', 'Tavernard', 'Mikael', 'Paulo', 'Marvin', 'Thiaguinho', 'Albert', 'Johan'];
pote1.sort(() => Math.random() - 0.5);

let pote2 = ['Erico', 'Iarley', 'Pericles', 'Abraao', 'Kayo', 'Josevan', 'Harrysson', 'Douglas'];
pote2.sort(() => Math.random() - 0.5);

let pote3 = ['Pablo', 'Herculano', 'Rafael Claudino', 'Alex Bruno', 'Elinton', 'John', 'Alan', 'Gabriel Camara'];
pote3.sort(() => Math.random() - 0.5);

let indiceAleatorio;
let escolhido;
let pote;
let escolhidos = []
let time = []
let time1 = []
let time2 = []
let time3 = []
let time4 = []

function disabledButton(idButton){
  let button = document.getElementById(idButton)
  button.disabled = true;
  button.style.backgroundColor = "grey";
  button.style.opacity = 0.5;
}

function enabledButton(idButton){
  let button = document.getElementById(idButton)
  button.disabled = false;
  button.style.backgroundColor = "#4CAF50";
  button.style.opacity = 1;
}

function preencherTabelaInicial(){

  disabledButton("reset")

  // Preencher Pote 1
  for (let i = 0; i < pote1.length; i++) {
    const elemento = document.getElementById(`pote1-${i + 1}`);
    elemento.textContent = pote1[i];
  }

  // Preencher Pote 2
  for (let i = 0; i < pote2.length; i++) {
    const elemento = document.getElementById(`pote2-${i + 1}`);
    elemento.textContent = pote2[i];
  }

  // Preencher Pote 3
  for (let i = 0; i < pote3.length; i++) {
    const elemento = document.getElementById(`pote3-${i + 1}`);
    elemento.textContent = pote3[i];
  }
}

function escolheJogador(){
    console.log('escolheJogador')
    escolhidos = []
   for(i=1; i<7; i++){

    if (i === 1 || i === 4) {
        pote = pote1;
    } else if (i === 2 || i === 5) {
        pote = pote2;
    } else if (i === 3 || i === 6) {
        pote = pote3;
    }
  
    pote.sort(() => Math.random() - 0.5)
    
    indiceAleatorio = Math.floor(Math.random() * pote.length);
    escolhido = pote.splice(indiceAleatorio, 1)[0];
    
    escolhidos.push(escolhido)
    
    }
}

function preencheLista(arrayTimes, idLista){
  let nomes = arrayTimes;
  let lista = document.getElementById(idLista);

    // Itera sobre os nomes e cria um item para cada um
    nomes.forEach(function(nome) {
      const item = document.createElement("li");
      item.textContent = nome;
      lista.appendChild(item);
    });

    lista.style.display = "block";
}

function sorteio(){

    const textoSorteio = document.getElementById("timesSorteadosTexto")
    textoSorteio.textContent = "TIMES SORTEADOS"

    escolheJogador()
    time1 = escolhidos
    preencheLista(time1, 'time1')

    escolheJogador()
    time2 = escolhidos
    preencheLista(time2, 'time2')

    escolheJogador()
    time3 = escolhidos
    preencheLista(time3, 'time3')

    escolheJogador()
    time4 = escolhidos
    preencheLista(time4, 'time4')
    
    disabledButton("buttonSorteio")
    enabledButton("reset")

}

function resetar(){
  location.reload();
}


preencherTabelaInicial();


