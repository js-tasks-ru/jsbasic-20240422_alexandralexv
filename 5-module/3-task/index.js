function initCarousel() {
  let shift = 0;

  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');

  let picture = document.querySelector('.carousel__inner');
  let pictureWidth = picture.offsetWidth;

  updateButtons();

  buttonRight.addEventListener('click', function () {
    if (shift < 3) {
      shift++;
      picture.style.transform = `translateX(-${shift * pictureWidth}px)`;
      updateButtons();
    }
  });

  buttonLeft.addEventListener('click', function () {
    if (shift > 0) {
      shift--;
      picture.style.transform = `translateX(-${shift * pictureWidth}px)`;
      updateButtons();
    }
  });

  function updateButtons() {
    if (shift === 0) {
      buttonLeft.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
    }

    if (shift === 3) {
      buttonRight.style.display = 'none';
    } else {
      buttonRight.style.display = '';
    }
  }

}





