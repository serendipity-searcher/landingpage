const SCROLL_THRESHOLD = 1000
const SCROLL_SPEED_THRESHOLD = 5
const elem = document.querySelector('.carousel')
const nextButton = document.querySelector('.button--next')

let allowFlick = true

const flick = new Flickity(elem, {
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false
});


nextButton.addEventListener('click', () => {
    flick.next();
});