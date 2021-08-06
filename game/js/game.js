
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
    ['Bank', 'Banque', 'Banco'],
    ['Good', 'Bien', 'Bien'],
    ['View', 'Vue', 'Vista'],
    ['Other', 'Autre', 'Otro'],
    ['Dual', 'Deux', 'Dos'],
    ['Circle', 'Cercle', 'Circulo'],
    ['Young', 'Jeune', 'Joven'],
    ['Horse', 'Cheval', 'Caballo'],
    ['Warrior', 'Guerrier', 'Guerrero']

]

const word_list_buttons = {
    "aeroplane": ['Avion', 'Avión'],
    "bank": ['Banque', 'Banco'],
    "good": ['Bien', 'Bien'],
    "view": ['Vue', 'Vista'],
    "other": ['Autre', 'Otro'],
    "dual": ['Deux', 'Dos'],
    "circle": ['Cercle', 'Circulo'],
    "young": ['Jeune', 'Joven'],
    "horse": ['Cheval', 'Caballo'],
    "warrior": ['Guerrier', 'Guerrero']

}


const word_list_images = [
    'aeroplane.png',
    'bank.png',
    'good.png',
    'view.jpg',
    'other.jpg',
    'dual.png',
    'circle.png',
    'young.png',
    'horse.png',
    'warrior.jpg'
]


let image_iter = 0
let word_list_answers_iter = 0
let score_executed = false;
let level_executed = false;
let level_image = document.querySelector('.main-image');
level_image.src = `images/words/${word_list_images[image_iter]}`;


function getRandomIdx(unwantedIndex, obj) {
    // get a random element that's not this notIndex
    const len = Object.keys(obj).length;
    let chosenIdx = Math.floor(Math.random() * len);
    while (chosenIdx === unwantedIndex) {
        chosenIdx = Math.floor(Math.random() * len);
    }
    return chosenIdx;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key].toString() === value.toString()) //object[key] == value);
}


// go to the next button
const goToNext = () => {
    if (!level_executed) {
        document.querySelector('.game-level-result').textContent = 'Please Finish this Level First'; // respond right answer

    }

    else {

        // document.querySelector('.score-output-p').textContent = String(score);
        level += 1;
        document.querySelector('.level-output-p').textContent = String(level);
        image_iter += 1;
        score_executed = false;
        level_executed = false;
        document.querySelector('.languages-display').style.display = "none";

        if (level > 10) {
            document.querySelector('.game-level-result').textContent = "You Win. Game Over!";
            document.querySelector('.main-content').style.opacity = "0"; // initially hides 3 languages at bottom. Set to "block" to show
            document.querySelector('.next-level').style.opacity = "0"; // initially hides 3 languages at bottom. Set to "block" to show


        }


        level_image.src = `images/words/${word_list_images[image_iter]}`;

        word_list_answers_iter += 1;
        document.querySelector('#english').textContent = word_list_answers[word_list_answers_iter][0];
        document.querySelector('#french').textContent = word_list_answers[word_list_answers_iter][1];
        document.querySelector('#spanish').textContent = word_list_answers[word_list_answers_iter][2];

        const incorrectIndex = getRandomIdx(word_list_answers_iter, word_list_buttons);
        console.log("word_list_answers_iter ", word_list_answers_iter)
        console.log("Object.values(word_list_buttons)[word_list_answers_iter]", Object.values(word_list_buttons)[word_list_answers_iter])
        // random sample which one's the correct one
        if (Math.random() < 0.5) {
            document.querySelector('.left-btn').textContent = Object.values(word_list_buttons)[word_list_answers_iter];
            document.querySelector('.right-btn').textContent = Object.values(word_list_buttons)[incorrectIndex];

        }
        else {
            document.querySelector('.left-btn').textContent = Object.values(word_list_buttons)[incorrectIndex];
            document.querySelector('.right-btn').textContent = Object.values(word_list_buttons)[word_list_answers_iter];

        }
        document.querySelector('.game-level-result').textContent = 'Let\' Play'; // respond right answer

    }
}

// the event listener functions for different answers
const correctButtonEvent = (e) => {
    // the event listener response for the correct answer
    // level += 1;
    if (!score_executed) {
        score += 2;
        score_executed = true;
        level_executed = true;

    }

    document.querySelector('.languages-display').style.display = "block"; // initially hides 3 languages at bottom. Set to "block" to show
    document.querySelector('.score-output-p').textContent = String(score);

};


const buttonAnswerCorrect = (btn) => {
    const current_btn = document.querySelector(btn).innerText.split(",");
    console.log(current_btn)
    const current_en_src = getKeyByValue(word_list_buttons, current_btn);
    console.log(current_en_src)
    const img_name = document.querySelector('.main-image').src;

    getKeyByValue
    if (img_name.includes(current_en_src) || img_name.includes(current_btn[0].toLowerCase())) {
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
        document.querySelector('.game-level-result').textContent = 'You Got This! Go to Next Level'; // respond right answer
        return correctButtonEvent(event);
    }
    else {
        document.querySelector('.game-level-result').textContent = 'Try Again'; // respond wrong answer
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







