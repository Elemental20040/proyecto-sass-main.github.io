const track = document.querySelector('.carrousel-track');
const next = document.querySelector('.image-carrusel .next');
const prev = document.querySelector('.image-carrusel .prev');
const dots = document.querySelectorAll('.dot');

let index = 0;
const total = track.children.length;

const updateCarousel = () => {
  track.style.transform = `translateX(-${index * 50}%)`;
  dots.forEach((dot,i) => dot.classList.toggle('active', i === index));
};

next.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});

dots.forEach((dot,i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
});
