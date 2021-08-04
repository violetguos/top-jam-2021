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
    'all.jpg',
    'bank.png'
]

// DOM Classes
// score-output-p
// level-output-p


let image_iter = 0
let word_list_answers_iter = 0

// the event listener functions for different answers
const correctButtonEvent = () => {
    // the response for the correct answer
    document.querySelector('.score-output-p').textContent = String(score);
    document.querySelector('.level-output-p').textContent = String(level);

    level += 1;
    score += 2;

    let level_image = document.querySelector('.main-image');
    level_image.src = `images/words/${word_list_images[image_iter]}`;
    image_iter += 1;


    document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];
    word_list_answers_iter += 1;
};

const wrongButtonEvent = () => {
    // response for wrong answer
    let level_image = document.querySelector('.main-image');
    level_image.src = `images/words/${word_list_images[image_iter]}`;
    image_iter += 1;


    document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];
    word_list_answers_iter += 1;
}

// wire up the events for each game
document.querySelector('.game-level-result').textContent = 'Click Left Button to Test';

document.querySelector('.left-btn').addEventListener('click', correctButtonEvent);
document.querySelector('.right-btn').addEventListener('click', wrongButtonEvent);





