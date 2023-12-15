document.addEventListener('DOMContentLoaded', function () {
    // Check if there's a stored countdown time
    var storedCountdownTime = localStorage.getItem('countdownTime');
    
    // Set the date we're counting down to
    var countDownDate;
    
    if (storedCountdownTime) {
        // Use the stored time if available
        countDownDate = parseInt(storedCountdownTime, 10);
    } else {
        // Set a new countdown time (current time + 5 minutes)
        countDownDate = new Date().getTime() + 5 * 60 * 1000;
        // Store the initial countdown time
        localStorage.setItem('countdownTime', countDownDate);
    }

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
            // Clear the stored countdown time after it expires
            localStorage.removeItem('countdownTime');
        }
    }, 1000);
});


const submitButton = document.getElementById("submit-button");
const answerInput = document.getElementById("answer-input");

submitButton.addEventListener("click", function() {
	if (answerInput.value.toLowerCase() === "tinsel") {
		window.location.href = "story.html";
	} else {
		alert("Sorry, that's incorrect. Please try again.");
	}
});
