const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", function() {
	window.location.href = 'riddle.html';
});

document.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		window.location.href = 'riddle.html';
	}
});
