(() => {
  const refs = {
    openModalkaBtn: document.querySelector("[data-modal-about-product-open]"),
    closeModalkaBtn: document.querySelector("[data-modal-about-product-close]"),
    modalka: document.querySelector("[data-modal-about-product]"),
  };

  refs.openModalkaBtn.addEventListener("click", toggleModalka);
  refs.closeModalkaBtn.addEventListener("click", toggleModalka);

  function toggleModalka() {
    refs.modalka.classList.toggle("is-hidden");
  }
})();
