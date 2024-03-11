document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const laptopScreen = window.matchMedia('(min-width: 992px)');

    if (laptopScreen.matches) {
        const gAdv = gsap.timeline();
        gAdv
            .from('.adv__item', {
                scrollTrigger: {
                    trigger: '.adv ',
                    start: '-100 center',
                    scrub: 1,
                    end: '+=50%',
                },
                y: 300,
                opacity: 0,
                stagger: 1,
            })    
          
    }
});
