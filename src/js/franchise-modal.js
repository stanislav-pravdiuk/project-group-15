(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-franchise-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-franchise-modal-close]"),
      modal: document.querySelector("[data-modal-franchise-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();