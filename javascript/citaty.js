document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const dotsNav = document.querySelector('.carousel-dots');
  const dots = Array.from(dotsNav.children);

  let currentIndex = 0;

  // Funkce pro posunutí carouselu a aktualizaci puntíků
  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Aktualizace puntíků
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  };

  // Kliknutí na šipku "Další"
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
  });

  // Kliknutí na šipku "Zpět"
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
  });

  // Kliknutí na konkrétní puntík
  dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    currentIndex = targetIndex;
    updateCarousel(currentIndex);
  });
});