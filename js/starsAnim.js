const svgStars = document.getElementById("stars");
const stars = svgStars.querySelectorAll("g");

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getAnimName = (elem, index) => {
  elem.style.cssText = `animation: moveStar${index} 1000s infinite`;
};

const generateRandomKeyframes = (index) => {
  let keyframeName = "moveStar" + index;
  let keyframes = `@keyframes ${keyframeName} {`;

  for (let i = 0; i <= 100; i++) {
    const translateX = getRandom(-200, 200) + "px";
    const translateY = getRandom(-200, 200) + "px";
    const opacity = getRandom(0.5, 1);
    const scale = getRandom(0.5, 2);

    keyframes += `
          ${i}% {
            transform: translate(${translateX}, ${translateY}) scale(${scale});
            opacity: ${opacity};
          }
        `;
  }

  keyframes += "}";
  const style = document.createElement("style");
  style.innerHTML = keyframes;
  document.head.appendChild(style);
  return keyframes;
};

stars.forEach((star, index) => {
  getAnimName(star, index);
  generateRandomKeyframes(index);
});
