// Get the modal
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const buttons = document.querySelectorAll(".modal-btn");

// Get the <span> element that closes the modal
const span = document.querySelector(".modal-close");

// When the user clicks on the button, open the modal
buttons.forEach(function(button) {
  button.onclick = function() {
    modal.style.display = "block";
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
