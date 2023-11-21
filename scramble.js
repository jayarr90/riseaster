const words = ["snow", "bauble", "chocolate", "tinsel", "rudolph", "sleigh-bells", "santa claus", "winter wonderland", "presents"];
let shuffledWord = "";
let wordIndex = 0;
let correctAnswers = 0;

const scrambleWord = (word) => {
	const index = wordIndex;
	let shuffled = word.split("");
	do {
	  for (let i = 0; i < word.length; i++) {
		const j = Math.floor(Math.random() * word.length);
		const temp = shuffled[i];
		shuffled[i] = shuffled[j];
		shuffled[j] = temp;
	  }
	} while (shuffled.join("") === words[index]);
	return shuffled.join("");
  };

const getNextWord = () => {
	const word = words[wordIndex];
	shuffledWord = scrambleWord(word);
	document.getElementById("scrambled-word").textContent = shuffledWord;
	document.getElementById("user-answer").value = "";
	document.getElementById("message").textContent = "";
};

const checkAnswer = () => {
	const userAnswer = document.getElementById("user-answer").value;
	const actualAnswer = words[wordIndex];
	if (userAnswer === actualAnswer) {
		document.getElementById("message").textContent = "Correct!";
		correctAnswers++;
		if (correctAnswers === words.length) {
			window.location.href = "puzzle.html";
		} else {
			wordIndex++;
			getNextWord();
		}
	} else {
		document.getElementById("message").textContent = "Wrong answer. Try again!";
	}
};

document.getElementById("submit-button").addEventListener("click", checkAnswer);
getNextWord();
