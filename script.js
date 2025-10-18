function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "به نام خداوند جان و خرد",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);