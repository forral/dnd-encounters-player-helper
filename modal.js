// Get the modal
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const buttons = document.querySelectorAll(".modal-btn");

// Get the <span> element that closes the modal
const span = document.querySelector(".modal-close");

const modalTitle = document.querySelector(".modal-type-char");

// When the user clicks on the button, open the modal
buttons.forEach(function(button) {
  button.onclick = function() {
    let titleSpanText;

    if (button.classList.contains("party-btn")) {
      titleSpanText = document.createTextNode("party character");
    } else {
      titleSpanText = document.createTextNode("enemy");
    }

    modalTitle.appendChild(titleSpanText);
    modal.style.display = "block";
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTitle.innerHTML = "";
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modalTitle.innerHTML = "";
    modal.style.display = "none";
  }
};
