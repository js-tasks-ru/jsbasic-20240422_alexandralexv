function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.getElementById("text");

  button.onclick = function () {
    //   if (text.hidden) { // Вариант с text.hidden = true
    //     text.hidden = false;
    //   }
    //   else {
    //     text.hidden = true;
    //   }
    // }
    text.hidden = !text.hidden;
    // text.toggleAttribute("hidden");
  }
}
