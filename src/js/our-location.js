(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-our-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-our-location-close]'),
    modal: document.querySelector('[data-modal-our-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
