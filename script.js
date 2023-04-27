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

const surpriseBtn = document.getElementById("surprise-btn");

surpriseBtn.addEventListener("click", () => {
  const nationalities = Object.keys(names);
  const genders = ["male", "female"];

  const randomNationality = nationalities[Math.floor(Math.random() * nationalities.length)];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];

  const randomName = names[randomNationality][randomGender][Math.floor(Math.random() * names[randomNationality][randomGender].length)];

  result.innerHTML = `<h2>Surprise! Your baby's name is: ${randomName} (${randomNationality}, ${randomGender})</h2>`;
});
