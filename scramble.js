document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (current time + 5 minutes)
    var countDownDate = new Date().getTime() + 5 * 60 * 1000;

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = minutes + 'm ' + seconds + 's ';

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = 'EXPIRED';
        }
    }, 1000);
});

const words = ["snow", "bauble", "chocolate", "tinsel", "rudolph", "sleigh", "grinch", "wonderland", "presents"];
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
