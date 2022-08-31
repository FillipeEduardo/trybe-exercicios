window.onload = function () {
    let paragrafo = document.getElementById('paragrafo');
    if (typeof (Storage) != "undefined"){
        if (localStorage.darkMode !== undefined) {
            if (localStorage.darkMode === JSON.stringify(true)) {
                document.body.className = 'darkMode';
            }
        }
        if (localStorage.corTexto !== undefined) {
            paragrafo.style.color = localStorage.corTexto;
        }

        if (localStorage.tamanhoFonte !== undefined) {
            paragrafo.style.fontSize = localStorage.tamanhoFonte;
        }
    }
    }

let botaoDarkMode = document.getElementById('botaoDarkMode');

botaoDarkMode.addEventListener('click', darkMode);

function darkMode() {
    document.body.classList.toggle('darkMode');
    if (typeof (Storage) != "undefined") {
        if (localStorage.darkMode !== undefined) {
            if (localStorage.darkMode === JSON.stringify(true)) {
                localStorage.darkMode = JSON.stringify(false);
            }
            else {
                localStorage.darkMode = JSON.stringify(true);
            }
        }
        else {
            localStorage.setItem('darkMode', 'true');
        }
    }
}

let botaoCor = document.getElementById('botaoCor');
let palhetaCores = document.getElementById('textColor');

botaoCor.addEventListener('click', mudarCorLetra);

function mudarCorLetra() {
    paragrafo.style.color = palhetaCores.value;
    localStorage.corTexto = palhetaCores.value;
}

let botaoTamanhoFonte = document.getElementById('botaoTamanhoFonte');

botaoTamanhoFonte.addEventListener('click', alterarTamanhoFonte);

function alterarTamanhoFonte() {
    let tamanhoEscolhido = document.querySelectorAll('input[type=radio]:checked')[0].value;
    paragrafo.style.fontSize = tamanhoEscolhido;
    localStorage.tamanhoFonte = tamanhoEscolhido;
}