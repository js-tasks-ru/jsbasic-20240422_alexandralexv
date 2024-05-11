function highlight(table) {
  let trElements = table.querySelectorAll('tbody tr');

  for (let i = 0; i < trElements.length; i++) {
    let tdAvailable = trElements[i].querySelector('td[data-available]');

    if (tdAvailable && tdAvailable.dataset.available == 'true') {
      trElements[i].classList.add('available');
    }
    else if (tdAvailable) {
      trElements[i].classList.add('unavailable');
    }
    else {
      trElements[i].hidden = true;
    }
  }

  for (let j = 0; j < trElements.length; j++) {
    let tdSex = trElements[j].querySelectorAll('td')[2].textContent;

    if (tdSex == 'm') {
      trElements[j].classList.add('male');
    }
    else {
      trElements[j].classList.add('female');
    }
  }

  for (let x = 0; x < trElements.length; x++) {
    let tdAge = trElements[x].querySelectorAll('td')[1].textContent;

    if (tdAge < 18) {
      trElements[x].style.textDecoration = 'line-through';
    }
  }
}

