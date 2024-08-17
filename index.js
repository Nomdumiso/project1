function displayJoke(response) {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer;

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "8ff7etab40db237fa70dfac60c1o5839";
  let context =
    "You are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a short and unique joke about French people";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  console.log("Called the AI API");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
