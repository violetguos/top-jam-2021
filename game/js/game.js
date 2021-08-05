
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




let image_iter = 0
let word_list_answers_iter = 0



// go to the next button
const goToNext = () => {
    // document.querySelector('.score-output-p').textContent = String(score);
    level += 1;
    document.querySelector('.level-output-p').textContent = String(level);
    image_iter += 1;

    let level_image = document.querySelector('.main-image');
    level_image.src = `images/words/${word_list_images[image_iter]}`;

    word_list_answers_iter += 1;
    document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];

    // random sample which one's the correct one
    if (Math.random() < 0.5) {
        document.querySelector('.left-btn').textContent = word_list_buttons[word_list_answers_iter][0];
        document.querySelector('.right-btn').textContent = word_list_buttons[word_list_answers_iter][1];

    }
    else {
        document.querySelector('.left-btn').textContent = word_list_buttons[word_list_answers_iter][1];
        document.querySelector('.right-btn').textContent = word_list_buttons[word_list_answers_iter][0];

    }
}

// the event listener functions for different answers
const correctButtonEvent = (e) => {
    // the event listener response for the correct answer
    // level += 1;
    score += 2;
    document.querySelector('.languages-display').style.display = "block"; // initially hides 3 languages at bottom. Set to "block" to show
    document.querySelector('.score-output-p').textContent = String(score);


    // return goToNext(e); // commenting this out as the player should stay in the current level and check the 3 answers solutions at the bottom before going to next level
};

const wrongButtonEvent = (e) => {
    // response for wrong answer
    // image_iter += 1;

    // let level_image = document.querySelector('.main-image');
    // level_image.src = `images/words/${word_list_images[image_iter]}`;

    // word_list_answers_iter += 1;

    // document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
    // document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
    // document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];
}

const buttonAnswerCorrect = (btn) => {
    const current_choice = document.querySelector(btn).innerText.toLowerCase();
    const img_name = document.querySelector('.main-image').src;
    if (img_name.includes(current_choice)) {
        return true;
    }
    else {
        return false;
    }
}

const buttonClick = (event) => {
    event.preventDefault();
    const btnClass = event.target.classList[2];
    const isCorrect = buttonAnswerCorrect('.' + btnClass);
    if (isCorrect) {
        console.log("answer is correct");
        document.querySelector('.game-level-result').textContent = 'You Got This!'; // respond right answer
        return correctButtonEvent(event);
    }
    else {
        document.querySelector('.game-level-result').textContent = 'Try Again'; // respond wrong answer
        // return wrongButtonEvent(event); // commenting this out for now as we want player to win. So he can answer the level after seeing the solution. Can change this later.
    }




}


// wire up the events for each game
document.querySelector('.game-level-result').textContent = 'Let\'s Play';
document.querySelector('.left-btn').addEventListener('click', buttonClick);
document.querySelector('.right-btn').addEventListener('click', buttonClick);
document.querySelector('.next-level-button').addEventListener('click', goToNext); // button to go to next level


// beginning content
document.querySelector('.languages-display').style.display = "none"; // initially hides 3 languages at bottom. Set to "block" to show
document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];







