const compRandom = () => {
  const compRandomChoice = Math.floor(Math.random() * 3) + 1;
  if (compRandomChoice == 1) {
    return "stone";
  } else if (compRandomChoice == 2) {
    return "paper";
  }
  return "scissors";
};
const inputChecking = (input) => {
  if (
    input == "stone" ||
    input == "paper" ||
    input == "scissors" ||
    input == "reversed stone" ||
    input == "reversed paper" ||
    input == "reversed scissors"
  ) {
    return true;
  }
  return false;
};

const main = (input) => {
  const comp = compRandom();
  let result = "";
  const validInput = inputChecking(input);
  if (validInput) {
    if (input == comp || input == "reversed " + comp) {
      result = "It's a draw!";
    } else if (
      (input == "stone" && comp == "scissors") ||
      (input == "paper" && comp == "stone") ||
      (input == "scissors" && comp == "paper") ||
      (input == "reversed stone" && comp == "paper") ||
      (input == "reversed paper" && comp == "scissors") ||
      (input == "reversed scissors" && comp == "stone")
    ) {
      result = "You win! ";
    } else {
      result = "You lose! Bummer.";
    }
    return `The computer chose ${comp}.<br>You chose ${input}.<br><br>${result}<br><br>Now you can type "scissors" "paper" or "stone" to play another round, or reverse it by adding the word "reversed" to your choice!`;
  }
  return `Try again. <br>Now you can type "scissors" "paper" or "stone" to play another round, or reverse it by adding the word "reversed" to your choice!`;
};
