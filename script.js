const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselTrack = document.querySelector('.carousel-track');
const articles = document.querySelectorAll('.article-card');

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = articles[0].clientWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = articles.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < articles.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});
