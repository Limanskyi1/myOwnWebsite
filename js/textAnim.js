const text = "YAMAKASI";
let content = document.querySelector("#text");

for (let i in [...text]) {
  let letter = document.createElement("span");
  letter.textContent = [...text][i];
  if (letter.textContent.match(/\s/)) {
    letter.style.margin = "auto 3px";
  }
  letter.style.animationDelay = i / 10 + "s";
  content.appendChild(letter);
}

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    overflow: true,
    scale: 1.5,
  });
});
