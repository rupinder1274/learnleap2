document.getElementById("submit-answer").addEventListener("click", function() {
    const answer = document.getElementById("quiz-answer").value.toLowerCase();
    const result = document.getElementById("quiz-result");

    if (answer === "paris") {
        result.textContent = "Correct! 🎉";
        result.style.color = "#388e3c"; // Green for correct answers
    } else {
        result.textContent = "Incorrect! The correct answer is Paris.";
        result.style.color = "#d32f2f"; // Red for incorrect answers
    }
});

// Adding functionality to register buttons
const registerButtons = document.querySelectorAll(".register-btn");
registerButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for registering!"); // This can be modified to redirect or save data
    });
});
