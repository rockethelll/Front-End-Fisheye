/* eslint-disable no-unused-vars */

const modal = document.getElementById("contact_modal");
const body = document.querySelector('body');
const main = document.querySelector('main');
const openModalBtn = document.querySelector('.contact_button');
const form = document.querySelector('form');

// Close the modal when the user clicks use Escape key
const closeModalHandler = (e) => {
  const key = e.key;
  if (modal.getAttribute('aria-hidden') === 'false' && key === 'Escape') {
    closeModal();
  }
};

const displayModal = () => {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  modal.focus();

  // Close the modal when escape is pressed
  document.addEventListener('keydown', closeModalHandler)

}

// Close the modal when the user clicks on the close button
const closeModal = () => {
  body.classList.remove('no-scroll');
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  openModalBtn.focus();
  document.removeEventListener('keydown', closeModalHandler);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`)
  })
  closeModal();
  form.reset();
});
