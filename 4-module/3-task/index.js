function highlight(table) {
  let trElements = table.querySelectorAll('tbody tr');

  for (let i = 0; i < trElements.length; i++) {
    let tdAvailable = trElements[i].querySelector('td[data-available]');
    console.log(tdAvailable);
    if (tdAvailable.dataset.available == 'true') {
      trElements[i].classList.add('available');
    }
    else {
      trElements[i].classList.add('unavailable');
    }
  }
}
