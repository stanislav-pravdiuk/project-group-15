(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-mode-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-mode-close]"),
    modal: document.querySelector("[data-modal-read-mode]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
