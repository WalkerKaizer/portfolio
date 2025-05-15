
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.carousel-dots a');
  let currentIndex = 0;

  function updateCarousel(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-view').style.transform = `translateX(${offset}%)`;

    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      const index = parseInt(dot.dataset.index);
      updateCarousel(index);
    });
  });

  
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    updateCarousel(nextIndex);
  }, 8000); 

