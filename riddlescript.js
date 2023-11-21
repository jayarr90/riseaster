const submitButton = document.getElementById("submit-button");
const answerInput = document.getElementById("answer-input");

submitButton.addEventListener("click", function() {
	if (answerInput.value.toLowerCase() === "tinsel") {
		window.location.href = "story.html";
	} else {
		alert("Sorry, that's incorrect. Please try again.");
	}
});
