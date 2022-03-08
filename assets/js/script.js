let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function aumenta() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
}

function diminui() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
}
var botaoMenos = document.getElementById('SUB')
var botaoMais = document.getElementById('ADD')

function limitePositivo(){
    if(count == 10){
        botaoMais.style.display = 'none';
    }
    else{
        botaoMais.style.display = 'block';
    }
}
function limiteNegativo(){
    if(count == -10){
        botaoMenos.style.display = 'none';
    }
    else{
        botaoMenos.style.display = 'block';
    }
}

function negativo(){
    if(count < 0){
        CURRENT_NUMBER.style.color = 'red';
    }else{
        CURRENT_NUMBER.style.color= 'black'
    }
}

limitePositivo()
limiteNegativo()
negativo()