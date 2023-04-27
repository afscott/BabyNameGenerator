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

async function getGPTGeneratedName(nationality1, nationality2, gender) {
  const response = await fetch('http://localhost:3001/api/generate-name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nationality1,
      nationality2,
      gender,
    }),
  });

  const data = await response.json();
  return data.suggestedName;
}


nameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nationality1 = document.getElementById("nationality1").value;
  const nationality2 = document.getElementById("nationality2").value;
  const gender = document.getElementById("gender").value;

  const suggestedName = await getGPTGeneratedName(nationality1, nationality2, gender);

  result.innerHTML = `<h2>Your mixed-culture baby name is: ${suggestedName}</h2>`;
});