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
  const prompt = `Generate a mixed-culture baby name for a family with one ${nationality1} parent and one ${nationality2} parent. The baby's gender is ${gender}.`;

  const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`, // Replace API_KEY with your actual OpenAI API key
    },
    body: JSON.stringify({
      prompt,
      max_tokens: 10,
      n: 1,
      stop: null,
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  return data.choices[0].text.trim();
}

nameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nationality1 = document.getElementById("nationality1").value;
  const nationality2 = document.getElementById("nationality2").value;
  const gender = document.getElementById("gender").value;

  const suggestedName = await getGPTGeneratedName(nationality1, nationality2, gender);

  result.innerHTML = `<h2>Your mixed-culture baby name is: ${suggestedName}</h2>`;
});