const elem = document.querySelector('.carousel');
const nextButton = document.querySelector('.button--next');

const flkty = new Flickity(elem, {
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false
});

nextButton.addEventListener('click', () => {
    flkty.next();
});