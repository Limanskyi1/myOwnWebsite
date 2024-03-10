const burger = document.getElementById('burger');
const menu  = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    if(burger.classList.contains('open')){
        menu.classList.add('open')
    } else {
        menu.classList.remove('open')
    }
})



const anchors = document.querySelectorAll('.header__nav-item');

const sections = document.querySelectorAll('section[data-section]');

anchors.forEach(link => {
    link.addEventListener('click' , (e) => {
        e.preventDefault();
        const attr = link.dataset.anchor;
        const targetElement = Array.from(sections).find(item => item.dataset.section === attr);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            menu.classList.remove('open');
            burger.classList.remove('open');
        }
    })
})