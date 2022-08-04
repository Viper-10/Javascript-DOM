const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const countSpan = document.getElementById("count-value");
const guessInput = document.querySelector("input");
const progressMessage = document.getElementById("progress-message");
const startButton = document.getElementById("start-game-button");

let guessesLeft;
let guessNumber;
let countValue = 0;

function displayFriendsInConsole() {
  // using nodelist I can directly iterate
  let friends = document.querySelectorAll(".friends-list li");

  console.log("Friends displayed");
  friends.forEach((friend) => {
    console.log(friend.textContent);
  });

  console.log("friends displayed 2");
  // using html collection I've to convert to array
  // to use foreach.
  friends = document.getElementsByClassName("friend");

  Array.from(friends).forEach((friend) => {
    console.log(friend.textContent);
  });
}
const setProgressMessage = (message, color = "blue") => {
  progressMessage.textContent = message;
  progressMessage.style.color = color;
};
const updateCounterValue = (count) => {
  countValue = count;
  countSpan.textContent = count;
  sessionStorage.setItem("counterValue", `${countValue}`);
};
const startgame = () => {
  guessNumber = Math.floor(Math.random() * 5);
  guessesLeft = 3;
  guessInput.value = "";
  setProgressMessage(`Number of guesses left : ${guessesLeft}`);
  guessInput.disabled = false;
  startButton.disabled = true;
};
const endgame = (result) => {
  if (result === "won") {
    setProgressMessage("You won!!!", "green");
    startButton.textContent = "Play Again";
  } else {
    setProgressMessage("You lost, try again", "red");
    startButton.textContent = "Retry";
  }
  startButton.disabled = false;
  guessInput.disabled = true;
};
const guessInputChange = (event) => {
  let value = event.target.value;
  if (value === "") {
    setProgressMessage(`Number of guesses left : ${guessesLeft}`);
    return;
  }
  if (isNaN(value) || value > 5) {
    setProgressMessage(`Enter only numbers between 0 and 5`);

    return;
  }
  value = parseInt(value);

  if (value === guessNumber) {
    endgame("won");
  } else {
    guessesLeft -= 1;
    setProgressMessage(
      `Incorrect guess! You have ${guessesLeft} guesses left`,
      "red"
    );
    event.target.value = "";
  }

  if (guessesLeft === 0) {
    endgame("lose");
  }
};

const clickEventHandler = (event) => {
  if (event.target.id === "plus-button") {
    updateCounterValue(countValue + 1);
  } else if (event.target.id === "minus-button") {
    updateCounterValue(countValue - 1);
  } else if (event.target.id === "reset-button") {
    updateCounterValue(0);
  } else if (event.target.id === "start-game-button") {
    startgame();
  }
};
function loadEventHandlers(event) {
  document.addEventListener("click", clickEventHandler);
  guessInput.addEventListener("keyup", guessInputChange);

  document.addEventListener("DOMContentLoaded", () => {
    const promptMessage = prompt("Hello, how're you doing???");
    document
      .querySelector(".prompt-message")
      .append(document.createTextNode(`${promptMessage}`));

    let value = sessionStorage.getItem("counterValue");
    value = parseInt(value);
    if (isNaN(value) || value === "" || value === null) {
      value = 0;
    }
    updateCounterValue(value);
    guessInput.disabled = true;
  });
}

loadEventHandlers();
displayFriendsInConsole();
