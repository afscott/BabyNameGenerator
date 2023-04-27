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
  american: {
    male: ["James", "John", "Michael", "William", "David"],
    female: ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth"],
  },
  chinese: {
    male: ["Li", "Wang", "Zhang", "Liu", "Chen"],
    female: ["Li", "Wang", "Zhang", "Liu", "Chen"],
  }
};

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nationality = document.getElementById("nationality").value;
  const gender = document.getElementById("gender").value;

  const randomName = names[nationality][gender][Math.floor(Math.random() * names[nationality][gender].length)];

  result.innerHTML = `<h2>Your baby's name is: ${randomName}</h2>`;
});
