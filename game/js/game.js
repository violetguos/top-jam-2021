
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

const word_img_answer_lut = {
    "aeroplane": {
        answer: ['Aeroplane', 'Avion', 'Avión'],
        buttons: ['Aeroplane', 'Car'],
        image: 'aeroplane.png'
    }
}

// DOM Classes
// score-output-p
// level-output-p


let image_iter = 0
let word_list_answers_iter = 0

// the event listener functions for different answers
const correctButtonEvent = (e) => {
    // the event listener response for the correct answer
    level += 1;
    score += 2;

    document.querySelector('.score-output-p').textContent = String(score);
    document.querySelector('.level-output-p').textContent = String(level);


    image_iter += 1;

    let level_image = document.querySelector('.main-image');
    level_image.src = `images/words/${word_list_images[image_iter]}`;


    document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];
    word_list_answers_iter += 1;
};

const wrongButtonEvent = (e) => {
    // response for wrong answer
    let level_image = document.querySelector('.main-image');
    level_image.src = `images/words/${word_list_images[image_iter]}`;
    image_iter += 1;


    document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];
    word_list_answers_iter += 1;
}

const buttonAnswerCorrect = (btn) => {
    const current_choice = document.querySelector(btn).innerText.toLowerCase();
    const img_name = document.querySelector('.main-image').src;
    if(img_name.includes(current_choice)){
        return true;
    }
    else {
        return false;
    }
}

const buttonClick = (event) => {
    event.preventDefault();
    const btnClass = event.target.classList[2];
    const isCorrect = buttonAnswerCorrect('.'+btnClass);
    if (isCorrect) {
        console.log("answer is correct")
        return correctButtonEvent(event);
    }
    else {
        return wrongButtonEvent(event);
    }
 
}

// wire up the events for each game
document.querySelector('.game-level-result').textContent = 'Click Left Button to Test';
document.querySelector('.left-btn').addEventListener('click', buttonClick);
document.querySelector('.right-btn').addEventListener('click', buttonClick);







