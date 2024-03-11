document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const items = document.querySelectorAll(".works__item");
  const laptopScreen = window.matchMedia("(min-width: 992px)");

  if (laptopScreen.matches) {
    {
      const adv = gsap.timeline();

      const setActiveClass = (index) => {
        items.forEach((item, i) => {
          i === index
            ? item.classList.add("active")
            : item.classList.remove("active");
        });
      };

      adv.fromTo(
        ".works .wrapper",
        { opacity: 0.8, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: ".works",
            start: "top 20px",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              const progress = self.progress;
              setActiveClass(progress > 0.7 ? 2 : progress > 0.4 ? 1 : 0);
            },
          },
        }
      );
    }
  }
});
