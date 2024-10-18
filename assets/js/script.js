

var evioEnput = document.querySelector('.envios');
var filhoInput = document.getElementById('filhoInput');


evioEnput.onclick = () =>{
    filhoInput.classList.toggle('filhoInputClick')
    filhoInputUm.classList.remove('filhoInputUmClick')
    filhoInputDois.classList.remove('filhoInputDoisClick')

}

var envios = document.getElementById('envios');
var filhoInputUm = document.getElementById('filhoInputUm');


envios.onclick = () =>{
    filhoInputUm.classList.toggle('filhoInputUmClick')
    filhoInput.classList.remove('filhoInputClick')
    filhoInputDois.classList.remove('filhoInputDoisClick')

}

var enviosUm = document.getElementById('enviosUm');
var filhoInputDois = document.getElementById('filhoInputDois');


enviosUm.onclick = () =>{
    filhoInputDois.classList.toggle('filhoInputDoisClick')
    filhoInputUm.classList.remove('filhoInputUmClick')
    filhoInput.classList.remove('filhoInputClick')

}

var inputDinheiro = document.getElementById('inputDinheiro');
var troco = document.getElementById('troco')




inputDinheiro.onclick = () =>{
    troco.classList.toggle('trocoClick')

}
