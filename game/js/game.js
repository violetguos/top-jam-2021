let score = 0;
let level = 1;

// Aeroplane, Avion, Avión
// Bank - Banque - Banco
// Good / Benefit - Bien - Bien
// View - Vue - Vista
// Other - Autre  - Otro
// Dual - Deux - Dos
// Circle - Cercle - Circulo
// All / Total - Tout - Todo
// Young / Juvenile - Jeune - Joven


const word_list_answers = [
    ['Aeroplane', 'Avion', 'Avión'],
    ['Bank', 'Banque', 'Banco']
]

const word_list_buttons = [
    ['Aeroplane', 'Car'],
    ['Bank', 'Law Office']
]

const word_list_images = [
    'aeroplane.png',
    'bank.png'
]

// DOM Classes
// score-output-p
// level-output-p


document.querySelector('.left-btn').addEventListener('click', function () {
    document.querySelector('.score-output-p').textContent = String(score);
    document.querySelector('.level-output-p').textContent = String(level);

    level += 1;
    score += 2;
});






