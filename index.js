const section = document.querySelector('.section'),
  sectionContainer = section.querySelector('.section_container'),
  sectionCol = section.querySelectorAll('.section_col'),
  sectionCaptions = section.querySelectorAll('.section_col_caption');

const isDesktop = window.matchMedia('(min-width: 768px)');

const init = () => {
  if (isDesktop.matches) {
    addHoverEffect();
  }
};

const addHoverEffect = () => {
  sectionCol[0].classList.add('active');

  sectionCol.forEach((col, index) => {
    col.addEventListener('mouseenter', () => {
      sectionCol.forEach((el) => el.classList.remove('active'));
      col.classList.add('active');

      if (index === sectionCol.length - 1) {
        col.classList.add('active');
      }
    });
  });
};

// Reinitialize when screen width changes
isDesktop.addEventListener('change', init);

init();
