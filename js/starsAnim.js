const svgStars = document.getElementById("stars");
const stars = svgStars.querySelectorAll("g");

stars.forEach((star) => {
  const rundomRange = () => Math.random() * 20 - 10;

  const randomX1 = rundomRange();
  const randomY1 = rundomRange();
  const randomOpacity1 = Math.random();

  const randomX2 = rundomRange();
  const randomY2 = rundomRange();
  const randomOpacity2 = Math.random();

  const randomX3 = rundomRange();
  const randomY3 = rundomRange();
  const randomOpacity3 = Math.random();

  const randomX4 = rundomRange();
  const randomY4 = rundomRange();
  const randomOpacity4 = Math.random();

  star.style.setProperty("--xOffset1", `${randomX1}px`);
  star.style.setProperty("--yOffset1", `${randomY1}px`);
  star.style.setProperty("--opacity1", randomOpacity1);
  star.style.setProperty("--xOffset2", `${randomX2}px`);
  star.style.setProperty("--yOffset2", `${randomY2}px`);
  star.style.setProperty("--opacity2", randomOpacity2);
  star.style.setProperty("--xOffset3", `${randomX3}px`);
  star.style.setProperty("--yOffset3", `${randomY3}px`);
  star.style.setProperty("--opacity3", randomOpacity3);
  star.style.setProperty("--xOffset4", `${randomX4}px`);
  star.style.setProperty("--yOffset4", `${randomY4}px`);
  star.style.setProperty("--opacity4", randomOpacity4);
  star.style.animation = "moveStar 10s ease-in-out infinite";
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    overflow: true,
    scale: 1.5,
  });
});
