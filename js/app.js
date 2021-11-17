



/*header */
const carousel = document.querySelector('#carrusel');
const slides = document.getElementsByClassName('card');
const cambio = new Flickity(carousel);


cambio.on('scroll',  () =>{
  cambio.slides.forEach( (slide, i) => {
    var image = slides[i];
    var x = (slide.target + cambio.x) * -1/3;
    image.style.backgroundPosition = x + 'px center';
  });
});
/*...........main */


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

