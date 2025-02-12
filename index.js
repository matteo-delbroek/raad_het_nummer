const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;
let running = true;

function raad() {
    let inputField = document.getElementById("text");
    let resultField = document.getElementById("result");
    let guess = parseInt(inputField.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        resultField.textContent = `hoe dom zijt ge kunt ge nog niet eens een getal tussen de ${minNum} en de ${maxNum} ingeven !`;
        resultField.classList.remove("correct");
        resultField.classList.add("wrong"); // Rood maken bij een ongeldig getal
        return;
    }

    attempts++;

    if (running) {
        if (guess === answer) {
            resultField.textContent = `je hebt het just het getal was ${answer}. Je had ${attempts} pogingen nodig dat is veel te veel good boy.`;
            resultField.classList.remove("wrong");
            resultField.classList.add("correct"); // Groen maken bij goed antwoord
            running = false;
        } else {
            resultField.textContent = `hoe kunt ge het fout hebben ha ha het getal is ${guess < answer ? "groter" : "kleiner"} dan ${guess}.`;
            resultField.classList.remove("correct");
            resultField.classList.add("wrong"); // Rood maken bij fout
        }
    }

    inputField.value = ""; // Invoerveld leegmaken
}
