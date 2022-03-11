const start = 1;
const end = 10;
let numberOfGuessesLeft = 3;
const minNumber = document.getElementById("min-num");
const maxNumber = document.getElementById("max-num");
const winningNumber = parseInt(
  Math.floor(Math.random() * (end - start) + start)
);

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const outputMessage = document.getElementById("message");
const game = document.querySelector("#game");

document.addEventListener("DOMContentLoaded", () => {
  minNumber.textContent = start;
  maxNumber.textContent = end;
});

/* 
  Mousedown event vs click event. 

  Mousedown event fires when the mouse key is pressed and before it is lifted. 

  click event is fired after mousedown and mouse up event. 

  Here when we click on the submit button on the last guess, 
  on clicking, we append 'play-again' class to submit button. 

  When we have mousedown as an event, it is fired before this click event, and by that time guessbtn doesn't have play-again btn. 

  If we have click event on 'play-again' instead of mousedown event, due to eventbubbling, when the event bubbles to the parent, we would have already added 'play-again' class to the button in the event handler of last submit button(in gameOver function). 
*/
game.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
});
guessBtn.addEventListener("click", checkGuess);

function checkGuess(e) {
  guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < start || guess > end) {
    setMessageOutput("red", `Enter a number between ${start} and ${end}`);

    return;
  }

  if (guess === winningNumber) {
    setMessageOutput(
      "green",
      `You Won!!! ${winningNumber} is the correct guess`
    );
    gameOver();
    return;
  } else {
    numberOfGuessesLeft--;
    if (numberOfGuessesLeft === 0) {
      setMessageOutput(
        "red",
        `You Lost, ${winningNumber} is the correct number`
      );
      gameOver();
    } else {
      if (guess > winningNumber) {
        setMessageOutput(
          "red",
          `${guess} is larger than the winning number, you have ${numberOfGuessesLeft} more guesses`
        );
      } else {
        setMessageOutput(
          "red",
          `${guess} is smaller than the winning number,you have ${numberOfGuessesLeft} more guesses`
        );
      }
    }
  }
}

function setMessageOutput(color, text) {
  outputMessage.textContent = text;
  outputMessage.style.color = color;
  guessInput.style.borderColor = color;
}
function gameOver() {
  guessInput.disabled = true;
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";

  let playAgainText = document.createElement("p");

  playAgainText.appendChild(
    document.createTextNode("Click Play again to play again")
  );
  playAgainText.style.color = "#00f";
}
