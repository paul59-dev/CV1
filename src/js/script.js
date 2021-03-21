// VARIABLE
const btnCircle = document.querySelector('.btn-circle');
const menuLinks = document.querySelector('.content-menu');
const progressBar = document.querySelector('.progress-bar');
const knowledges = document.querySelector('.knowledges');
const links = document.querySelectorAll('.links');
const nameTitle = document.querySelector('.name');
const subtitle = document.querySelector('.subtitle');
const pp = document.querySelector('.pp');

// EVENT
btnCircle.onclick = () => {

    btnCircle.classList.toggle('menu-anim');
    menuLinks.classList.toggle('menu-links-anim');

}

// TIMELINE
const Tl1 = new TimelineMax({pased: true});

Tl1
.from(nameTitle, 1, {y: -100, opacity: 0})
.from(subtitle, 1, {x: -30, opacity: 0}, '-=0.4')
.from(pp, 1, {x: 60, opacity: 0}, '-=0.5')
.staggerFrom(links, 0.5, {y: -30, opacity: 0}, '-0.3')

Tl1.play();

// OBSERVER
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        if (entrie.intersectionRatio > 0.5) {
            entrie.target.classList.remove('progress-anim');
        }
    })
}, {
    threshold: [0.5]
});

let items = document.querySelectorAll('.progress-bar');
items.forEach((item) => {
    item.classList.add('progress-anim');
    observer.observe(item);
});
