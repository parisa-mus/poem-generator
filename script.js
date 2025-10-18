function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bdb6ff86a835be877o4tc8baf0ebd69b";
  let context =
    "You are a  persian poem expert.make sure write a poem in 4 verse.wrire a poem with srrong meaning ";
  let prompt = `User instructions: Generate a Persian poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${instructionsInput.value}</div>`;



  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);