const numberGuess = Math.floor(Math.random() * 100 + 1);
const form = document.querySelector('form')
const subt = document.querySelector('#subt');
const lowOrHi = document.querySelector('.lowOrHi')
const guessField = document.querySelector('#guessField')
const lastResult = document.querySelector('.lastResult')
const guesses = document.querySelector('.guesses')
const lottieContainer = document.getElementById('lottie-container');
let guessesArray = [];

const animation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: false, 
    path: 'https://raw.githubusercontent.com/yash-skl/lottie-animations/refs/heads/main/celebration.json' // correct JSON link
  });

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userGuess = Number(guessField.value);
    let guessRemaining = Number(lastResult.textContent)

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        lowOrHi.textContent = "Please enter a valid number between 1 and 100.";
        return;
      }
    if (userGuess == numberGuess) {
        lowOrHi.textContent = 'Correct Answer! 🎉';
        lottieContainer.style.display = 'block';
        animation.goToAndPlay(0, true);
        subt.disabled = true;
    } else {
        guessRemaining = guessRemaining - 1;
        lastResult.textContent = guessRemaining;
        guessesArray.push(userGuess);
        guesses.textContent = guessesArray.join(', ');
        lowOrHi.innerHTML = userGuess > numberGuess ? "Too High!" : "Too Low!";
        if (guessRemaining == 0) {
            lastResult.textContent = 'Your guesses are over.'
            subt.disabled = true;
        }
    }

    guessField.value = '';
    guessField.focus();
})