document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const laptopScreen = window.matchMedia("(min-width: 992px)");

     {
        gsap.fromTo('.cloud.left img', {
            opacity: 1,
            scale: 1,
            x: 0, 
            y:0,
            filter: 'blur(0px)',
            ease: 'power1.inOut'
        }, {
            scrollTrigger: {
                trigger: '.cloud.left img',
                start: "top 50%",
                end: '+=650',
                scrub: true,
            },
            scale: 0.50,
            x: -1000,
            y: -1000,
            opacity: 0,
            rotate: 45,
            filter: 'blur(40px)',
            ease: 'power1.inOut'
        });

        gsap.fromTo('.cloud.right img', {
            opacity: 1,
            scale: 1,
            x: 0, 
            y:0,
            filter: 'blur(0px)',
        }, {

            scrollTrigger: {
                trigger: '.cloud.right img',
                start: "top 50%",
                end: '+=650',
                scrub: true,
            },
            scale: 0.50,
            x: 1000,
            y: -1000,
            opacity: 0,
            rotate: 45,
            filter: 'blur(40px)',
            ease: 'power1.inOut'
        });

        gsap.fromTo('.cloud.center img', {
            opacity: 1,
            scale: 1,
            x: 0, 
            y:0,
            filter: 'blur(0px)',
        }, {
            scrollTrigger: {
                trigger: '.cloud.center img',
                start: "top 50%",
                end: '+=650',
                scrub: true,
            },
            x: 600, 
            y:-1000,
            scale: 0,
            filter: 'blur(40px)',
            opacity: 0,
            ease: 'power1.inOut'
        });
    }
});







let text = 'YAMAKASI'
let content = document.querySelector('#text')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/10+'s'
  content.appendChild(letter)
}