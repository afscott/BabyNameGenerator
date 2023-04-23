const nameForm = document.getElementById("name-form");
const result = document.getElementById("result");

const names = {
  indian: {
    male: ["Aarav", "Arjun", "Karan", "Rahul", "Vikram"],
    female: ["Aanya", "Kavya", "Priya", "Riya", "Sanya"],
  },
  japanese: {
    male: ["Akio", "Daiki", "Hiroshi", "Kazuki", "Takahiro"],
    female: ["Aiko", "Emiko", "Keiko", "Miyuki", "Yuki"],
  },
};

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nationality = document.getElementById("nationality").value;
  const gender = document.getElementById("gender").value;

  const randomName = names[nationality][gender][Math.floor(Math.random() * names[nationality][gender].length)];

  result.innerHTML = `<h2>Your baby's name is: ${randomName}</h2>`;
});
