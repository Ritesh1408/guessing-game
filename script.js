let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const Userinput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(Userinput.value);
        console.log(guess);
        
        validateGuess(guess);
    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number greater than 1!');
    } else if(guess > 100){
        alert('Please enter a number less than 500!');
    } else {
        previousGuesses.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses}!`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Too Low! Try Again!');
    }else if(guess > randomNumber){
        displayMessage('Too High! Try Again!');
    }
}

function displayGuess(guess){
    Userinput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message){
    lowHigh.innerHTML = '';
    lowHigh.innerHTML = `<h1>${message}</h1>`;
}

function endGame(){
    // randomNumber = Math.floor(Math.random() * 100 + 1);
    // submit.disabled = true;
    // Userinput.disabled = true;
    // startOver.innerHTML = '<button class="newGame">New Game</button>';
    // const newGameButton = document.querySelector('.newGame');
    // newGameButton.addEventListener('click', resetGame);
    // playGame = false;

    Userinput.value = '';
    Userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.textContent = 'Start new game';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    // randomNumber = Math.floor(Math.random() * 100 + 1);
    // previousGuesses = [];
    // numGuesses = 1;
    // guessSlot.innerHTML = '';
    // lowHigh.innerHTML = '';
    // remaining.innerHTML = `${10 - numGuesses}`;
    // p.innerHTML = '';
    // playGame = true;

    const newgameButton = document.querySelector('.button');
    newgameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        Userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}







