(() => {
    const refs = {
        openModalBtn: document.querySelector('hero__button'),
        closeModalBtn: document.querySelector('window__modal--button'),
        modal: document.querySelector('window'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('window__is--hidden');
    }
})();