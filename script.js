const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const greeting = document.getElementById("greeting");
const ageMonths = document.getElementById("ageMonths");

const savedName = localStorage.getItem("name");
const savedAge = localStorage.getItem("age");

if (savedName) {
    nameInput.value = savedName;
}

if (savedAge) {
    ageInput.value = savedAge;
    const months = calculateAgeInMonths(Number(savedAge));
    ageMonths.textContent = `You are ${months} months old.`;
}

if (savedName) {
    greeting.textContent = `Hello ${savedName}! Welcome to your personalized webpage.`;
}

userForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = Number(ageInput.value.trim());

    if (!name) {
        greeting.textContent = "Please enter your name.";
        return;
    }

    if (!Number.isFinite(age) || age < 0) {
        ageMonths.textContent = "Please enter a valid age.";
        return;
    }

    const ageInMonths = calculateAgeInMonths(age);

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    greeting.textContent = `Hello ${name}! Welcome to your personalized webpage.`;
    ageMonths.textContent = `You are ${ageInMonths} months old.`;
});

function calculateAgeInMonths(age) {
    return age * 12;
}