const courosoul = document.querySelector('.courosoul')
let sliders = [];
let slideIndex = 0;

const createslide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    courosoul.appendChild(slide);

    imgelement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slider-cont';
    h1.className = 'movie-title';
    p.className = 'movie-des'
    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2 )}% - ${30 * (sliders.length - 2)}px)`;
    }

}

for (let i = 0; i < 3; i++) {
    createslide();
}
setInterval(() => {
    createslide();
},3000);

const videoCards = document.querySelectorAll('.vedio-cont');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

let cardcontain = document.querySelectorAll('.movie-cart');
let pre = document.querySelectorAll('.pre-btn');
let nxt = document.querySelectorAll('.nxt-btn');

cardcontain.forEach((item,i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width

    nxt[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth - 200;
    })
    pre[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth + 200;
    })


})