function checkGrade() {
    const scoreInput = document.getElementById("score-input");
    const gradeOutput = document.getElementById("grade-output");
    const score = parseInt(scoreInput.value);

    if (isNaN(score)) {
        gradeOutput.textContent = "Please enter a valid number.";
        gradeOutput.style.color = "red";
        return;
    }

    if (score < 0 || score > 100) {
        gradeOutput.textContent = "Score not recognized. Enter a value between 0 and 100.";
        gradeOutput.style.color = "red";
    } else if (score <= 39) {
        gradeOutput.textContent = "F - Fail";
        gradeOutput.style.color = "red";
    } else if (score <= 49) {
        gradeOutput.textContent = "D - Average";
        gradeOutput.style.color = "orange";
    } else if (score <= 59) {
        gradeOutput.textContent = "C - Credit";
        gradeOutput.style.color = "gold";
    } else if (score <= 69) {
        gradeOutput.textContent = "B - Good";
        gradeOutput.style.color = "blue";
    } else {
        gradeOutput.textContent = "A - Excellence";
        gradeOutput.style.color = "green";
    }
}
