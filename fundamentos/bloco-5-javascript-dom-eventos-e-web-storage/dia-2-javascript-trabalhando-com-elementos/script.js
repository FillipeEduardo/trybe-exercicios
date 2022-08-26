let corpo = document.getElementsByTagName("body")[0];
let titulo = document.createElement('h1');
titulo.innerText = "Exercício 5.2 - JavaScript DOM";
corpo.appendChild(titulo);
let main = document.createElement("main");
main.className = "main-content";
corpo.appendChild(main);
let section = document.createElement("section");
section.className = "center-content";
main.appendChild(section);
let paragrafo = document.createElement('p');
paragrafo.innerText = "Algum texto";
section.appendChild(paragrafo);
let section2 = document.createElement('section');
section2.className = "left-content";
main.appendChild(section2);
let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);
let image = document.createElement('img');
image.src = "https://picsum.photos/200";
image.className = "small-image";
section2.appendChild(image);
let list = document.createElement('ul');
let itens = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez"
];

for (let index = 0; index < itens.length; index += 1) {
    let item = document.createElement('li');
    item.innerText = itens[index];
    list.appendChild(item);
}
section3.appendChild(list);

for (let index = 0; index < 3; index += 1) {
    let item = document.createElement("h3");
    main.appendChild(item);
}

titulo.className = 'title';

let titulosH3 = document.getElementsByTagName('h3');

for (let index = 0; index < titulosH3.length; index += 1) {
    titulosH3[index].className = "description";
}

main.removeChild(section2);

section3.style.marginRight = 'auto';

section.parentElement.style.backgroundColor = "green";

let lista = document.querySelectorAll("li");
for (let index = 0; index < lista.length; index += 1) {
    let element = lista[index];

    if (element.innerText.includes('nove') || element.innerText.includes('dez')) {
        list.removeChild(element);
    }
}



