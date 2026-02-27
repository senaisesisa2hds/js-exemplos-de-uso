// Selecionando o botão via JS (Vamos usar ID "MyButton")

// const button = document.getElementById('myButton');
// const button = document.querySelector('#myButton');
// const button = document.getElementsByTagName ('button');
const button = document.getElementsByClassName ('botão');


// Selecionando o texto via JS (Vamos usar ID "MyText")
// const text = document.getElementById('myText');
const text =document.getElementsByTagName('p');

// Adicionando um "ouvinte" de evento para disparar uma ação
// button[0].addEventListener('click',() => {
button[0].addEventListener('mouseover',() => {


    // Troca o texto para "Olá, mundo!"
    text[0].textContent = 'Olá, Mundo!';
})

button[0].addEventListener('mouseout',() => {


    // Troca o texto para "Texto inicial"
    text[0].textContent = 'Texto inicial';
})

button[0].addEventListener('dblclick',() => {


    // Troca o texto para "Clique duplo!!"
    text[0].textContent = 'Clique duplo!!';
})