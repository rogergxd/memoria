document.addEventListener('DOMContentLoaded', () => {

const cartas = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

cartas.sort(() => 0.5 - Math.random());

let cartaSeleccionada = [];
let cartaSeleccionadaId = [];
let completadas = [];

let jugar = document.getElementById('play');
jugar.addEventListener('click', juego);

function juego () {

for (let i = 0; i < cartas.length; i++) {
    const grid = document.querySelector('.grid');
    let carta = document.createElement('img');
    carta.setAttribute('src', 'images/blank.png');
    carta.classList.add('cards');
    carta.setAttribute('id', i);
    carta.addEventListener('click', voltear)
    grid.appendChild(carta);

    jugar.removeEventListener('click', juego);
  
}
}

function voltear() {
    cartaId = this.getAttribute('id');
    cartaSeleccionada.push(cartas[cartaId].name);
    cartaSeleccionadaId.push(cartaId);
    this.setAttribute('src', cartas[cartaId].img)
    if (cartaSeleccionada.length === 2){
        setTimeout(comparar, 200);
    }
}


function comparar() {
    let imagenes = document.querySelectorAll('.cards');
    const opcionUnoId = cartaSeleccionadaId[0];
    const opcionDosId = cartaSeleccionadaId[1];
    if (cartaSeleccionada[0] == cartaSeleccionada[1]) {
        alert('Perfecto');
        imagenes[opcionUnoId].style.visibility = 'hidden';
        imagenes[opcionDosId].style.visibility = 'hidden';
        completadas.push(cartaSeleccionada);
        console.log(completadas);
    }else {
        alert('Nein');
        imagenes[opcionUnoId].setAttribute('src', 'images/blank.png');
        imagenes[opcionDosId].setAttribute('src', 'images/blank.png');
    }
    cartaSeleccionada = [];
    cartaSeleccionadaId = [];

    if (completadas.length === cartas.length/2) {
        alert('Felicidades, ganaste el juego. Click to play si quieres volver a jugar')
        setTimeout(window.location.reload(), 500);

    }
   


}
})